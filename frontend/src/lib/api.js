export function getApiBase() {
  const envUrl = process.env.REACT_APP_BACKEND_URL;
  const trimmedEnvUrl = envUrl && envUrl.trim();

  if (trimmedEnvUrl) {
    const normalizedEnvUrl = trimmedEnvUrl.replace(/\/$/, "");
    return `${normalizedEnvUrl}/api`;
  }

  if (typeof window !== "undefined" && window.location?.origin) {
    const origin = window.location.origin.replace(/\/$/, "");
    return `${origin}/api`;
  }

  return "/api";
}
