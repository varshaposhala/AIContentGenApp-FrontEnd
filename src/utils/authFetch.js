// utils/authFetch.js
import { getTokens, setTokens, removeTokens, refreshAccessToken } from "./authUtils";

const fetchWithTimeout = (url, options = {}, timeout) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeout)
    ),
  ]);
};

export const authFetch = async (url, options = {}, navigate, timeout=200000, retry = true) => {
  const { accessToken, refreshToken } = getTokens();

  const handleLogout = () => {
    removeTokens();
    navigate("/login");
  };

  if (accessToken) {
    const headers = {
      ...(options.headers || {}),
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await fetchWithTimeout(url, { ...options, headers }, timeout=200000);

      if (response.status !== 401) return response;

      // Unauthorized, try refresh if retry allowed
      if (!refreshToken || !retry) {
        handleLogout();
        return null;
      }
    } catch (err) {
      // Network error or timeout
      console.error("Fetch error:", err);
      throw err;
    }
  }

  if (refreshToken) {
    try {
      const data = await refreshAccessToken(refreshToken);

      if (!data?.access) {
        handleLogout();
        return null;
      }

      setTokens(data.access, data.refresh);
      // Retry once after token refresh, no infinite loop
      return authFetch(url, options, navigate, false, timeout);
    } catch (err) {
      console.error("Token refresh failed:", err);
      handleLogout();
      return null;
    }
  } else {
    handleLogout();
    return null;
  }
};
