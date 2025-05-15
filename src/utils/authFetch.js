// utils/authFetch.js
import { getTokens, setTokens, removeTokens, refreshAccessToken } from "./authUtils";

export const authFetch = async (url, options = {}, navigate, retry = true) => {
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

        const response = await fetch(url, { ...options, headers });

        if (response.status !== 401) return response;

        // Retry logic if unauthorized
        if (!refreshToken || !retry) {
            handleLogout();
            return null;
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
            return authFetch(url, options, navigate, false);
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
