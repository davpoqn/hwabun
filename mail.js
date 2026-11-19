// 문의 메일 주소는 화면에서만 조립한다. 페이지 원문에 주소를 그대로 두지 않아 자동 수집을 줄인다.
// data-mail 이 붙은 링크는 메일 쓰기로 열리고, data-mail="show"면 주소를 글자로도 보여 준다.
(function () {
  var addr = ['ice9863', 'gmail.com'].join('@');
  var href = 'mailto:' + addr + '?subject=' + encodeURIComponent('바탕화분 문의');
  var els = document.querySelectorAll('[data-mail]');
  for (var i = 0; i < els.length; i++) {
    els[i].setAttribute('href', href);
    if (els[i].getAttribute('data-mail') === 'show') els[i].textContent = addr;
  }
})();
