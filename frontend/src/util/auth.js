import { redirect } from "react-router-dom";

export function getAuthToken() {
  return localStorage.getItem("token");
}

export function tokenLoader() {
  console.log(getAuthToken());
  return getAuthToken();
}

export function checkAuthLoader(){
    const token = getAuthToken();
    if (!token) {
      return redirect('/auth?mode=login');
    }
    return null;
}