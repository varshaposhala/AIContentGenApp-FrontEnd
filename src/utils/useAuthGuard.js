// hooks/useAuthGuard.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    getTokens,
    isTokenExpired,
    removeTokens,
    setTokens,
    refreshAccessToken,
} from "./authUtils";

export const useAuthGuard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const validateSession = async () => {
            const { accessToken, refreshToken } = getTokens();

            // No refresh token = unauthenticated
            if (!refreshToken) {
                removeTokens();
                navigate("/login");
                return;
            }

            // If access token is missing or expired, try to refresh it
            if (!accessToken || isTokenExpired(accessToken)) {
                const data = await refreshAccessToken(refreshToken);

                if (!data?.access) {
                    removeTokens();
                    navigate("/login");
                    return;
                }

                setTokens(data.access, data.refresh);
                console.log("Token refreshed on navigation");
            }
        };

        validateSession();
    }, [navigate]);
};
