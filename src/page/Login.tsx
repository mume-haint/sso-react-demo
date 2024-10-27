const LoginButton = () => {
  const handleLogin = () => {
    const keycloakUrl = `${import.meta.env.VITE_KEYCLOAK_BASE_URL}/auth`;
    window.location.href = `${keycloakUrl}?client_id=${import.meta.env.VITE_KEYCLOAK_CLIENT_ID}&redirect_uri=${window.location.origin}/callback&response_type=code`;
  };

  return <button onClick={handleLogin}>Login with Keycloak</button>;
};

export default LoginButton;
