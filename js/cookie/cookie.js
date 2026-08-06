export function playCookieBounce(cookie) {
  cookie.classList.remove("cookieButton--clicked");
  void cookie.offsetWidth;
  cookie.classList.add("cookieButton--clicked");
}
