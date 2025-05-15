// utils/authUtils.js
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const getTokens = () => ({
    accessToken: Cookies.get("accessToken"),
    refreshToken: Cookies.get("refreshToken"),
});

export const setTokens = (access, refresh = null) => {
    const accessExpiry = new Date(Date.now() + 1 * 60 * 1000); // 1 minute
    Cookies.set("accessToken", access, { expires: accessExpiry });

    if (refresh) {
        const refreshExpiry = new Date(Date.now() + 2 * 60 * 1000); // 2 minutes
        Cookies.set("refreshToken", refresh, { expires: refreshExpiry });
    }
};

export const removeTokens = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
};

export const isTokenExpired = (token) => {
    try {
        const decoded = jwtDecode(token);
        const now = Math.floor(Date.now() / 1000);
        return decoded.exp < now;
    } catch {
        return true;
    }
};

export const refreshAccessToken = async (refreshToken) => {
    const response = await fetch("https://ravik00111110.pythonanywhere.com/api/auth/token/refresh/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) return null;
    return await response.json();
};
