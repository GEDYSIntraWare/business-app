document.addEventListener("DOMContentLoaded", function (event) {
    var lang = navigator.language;
    var hasRecordPartDiv = document.querySelector(".hasRecordPart");
    var url = new URL(window.location);

    document.querySelector("meta[name='apple-itunes-app']")
        .setAttribute("content", "app-id=1017772659, affiliate-data=redirect, app-argument=" + url);

    if (lang.startsWith("de")) {
        var elems = document.querySelectorAll(".de");
        for (i = 0; i < elems.length; i++) {
            elems[i].style.display = "block";
        }
    } else {
        var elems = document.querySelectorAll(".en");
        for (i = 0; i < elems.length; i++) {
            elems[i].style.display = "block";
        }
    }

    var platform = navigator?.userAgentData?.platform || navigator?.platform || "unknown";

    if (/iphone/i.test(platform) || /ipad/i.test(platform)) {
        document.querySelector(".play").parentElement.style.display = "none";
        document.querySelector(".play-legal").style.display = "none";
    } else if (/linux/i.test(platform)) {
        document.querySelector(".app").parentElement.style.display = "none";
        document.querySelector(".app-legal").style.display = "none";
    }
    if (url.search != "") {
        var searchParams = new URLSearchParams(window.location.search);
        if(!searchParams.has("baseUrl")) {
            var hideElemes = document.querySelectorAll(".webapp-open");
            for (i = 0; i < hideElemes.length; i++) {
                hideElemes[i].style.display = "none";
            }
        }
    }
    else{
        hasRecordPartDiv.style.display = "none";
    }

    window.setTimeout(function () {
        var elemPlay = document.querySelector(".play");
        var elemApp = document.querySelector(".app");
        elemApp.style.height = elemApp.offsetHeigth - (elemPlay.offsetHeight * 82 / 250) + "px";
        elemApp.style.width = elemApp.offsetWidth - (elemPlay.offsetWidth * 82 / 646) + "px";
    }, 5);
});

function reload() {
    //location.reload();
	var url = new URL(window.location);
    if (url.search != "") {
        var params = new URLSearchParams(url.search);
        var setup = params.get("goToSetup");

        if (setup === "true") {
           url.pathname = "setup";
        }
    }
    url.hostname = "gedysintraware.github.io"
    url = url.toString().replace("+", "%20")  // Browsers resolve the space as +
    window.open(url, "_blank");
}

function openInWeb(){
    var searchParams = new URLSearchParams(window.location.search);
    var baseUrl = searchParams.get("baseUrl");
    var openDocumentPart = new URLSearchParams(searchParams.get("openDocument"));
    var record = openDocumentPart.get("oid");
    window.open(baseUrl+"_openRecord/"+record+"?forceWeb=true", "_blank");
}

function decodeHTMLEntities(text) {
    var textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }