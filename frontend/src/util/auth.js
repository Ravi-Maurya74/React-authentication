export function getAuthToken() {
  return localStorage.getItem("token");
}

export function tokenLoader() {
  console.log(getAuthToken());
  return getAuthToken();
}
