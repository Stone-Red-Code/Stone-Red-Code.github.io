$.get("header.html", function (data) {
    $("#header-placeholder").replaceWith(data);
    document.getElementById('header-title').innerHTML = document.querySelector('title').textContent;
});

$.get("nav.html", function (data) {
    $("#nav-placeholder").replaceWith(data);
});

$.get("footer.html", function (data) {
    $("#footer-placeholder").replaceWith(data);
});