function isIE() {
  return navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1;
}

if (isIE()) {
  window.location.href = '/static/actualizar-navegador.html';
}
