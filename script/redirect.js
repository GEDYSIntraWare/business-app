document.addEventListener("DOMContentLoaded", function (event) {
    var lang = navigator.language;
    var waitDiv = document.querySelector(".wait");
    var infoDiv = document.querySelector(".getAppInfo");
    var hintDiv = document.querySelector(".hint");
    var url = new URL(window.location);

    document.querySelector('meta[name="apple-itunes-app"]')
        .setAttribute("content", "app-id=1017772659, affiliate-data=redirect, app-argument=" + url);

    if (url.search != "") {
        var params = new URLSearchParams(url.search);
        var redirect = params.get("url");
        params.delete("url");
        if (redirect !== null && redirect !== "" && params.get("goToSetup") != "true") {
            waitDiv.style.display = "block";
            infoDiv.style.display = "none";

            var seperator = "?";
            if (redirect.lastIndexOf("?") > 0) {
                seperator = "&";
            }
            window.location.replace(redirect + seperator + params.toString());
        } else {
            infoDiv.style.display = "block";
            waitDiv.style.display = "none";
        }
    } else {
        infoDiv.style.display = "block";
        waitDiv.style.display = "none";
        hintDiv.style.display = "none";
    }
});

function reload() {
    var url = new URL(window.location);
    if (url.search != "") {
        var params = new URLSearchParams(url.search);
        var setup = params.get("goToSetup");

        if (setup === "true") {
           url.pathname = "setup";
        }
    }
    //url.hostname = "gedysintraware.github.io"
    url = url.toString().replace("+", "%20")  // Browsers resolve the space as +
    window.open(url, "_blank");
}