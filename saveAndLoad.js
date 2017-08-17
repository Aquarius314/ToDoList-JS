function saveCards() {
  var expireDate = "Thu, 16 Aug 2018 12:00:00 UTC";
  document.cookie = "test=correct";
  // document.cookie = "name=Jakub; expires=Thu, 16 Aug 2018 12:00:00 UTC; path=/";
  // document.cookie = "surname=Wójcik; expires=Thu, 16 Aug 2018 12:00:00 UTC; path=/";
  alert("Cookies saved?");
  alert(document.cookie);
}

function loadCards() {
  var c = document.cookie;
  alert(c);
  alert("Was the cookie right?");
}

saveCards();
loadCards();
