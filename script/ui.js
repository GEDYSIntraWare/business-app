document.addEventListener("DOMContentLoaded", function (event) {
    var lang = navigator.language;
    if (lang.startsWith('de')) {
        var elems = document.querySelectorAll('.de');
        for (i = 0; i < elems.length; i++) {
            elems[i].style.display = 'block';
        }
    } else {
        var elems = document.querySelectorAll('.en');
        for (i = 0; i < elems.length; i++) {
            elems[i].style.display = 'block';
        }
    }

    var pltfrm = navigator.platform;
    if (/iphone/i.test(pltfrm) || /ipad/i.test(pltfrm)) {
        document.querySelector(".play").parentElement.style.display = 'none';
        document.querySelector(".play-legal").style.display = 'none';
    } else if (/linux/i.test(pltfrm)) {
        document.querySelector(".app").parentElement.style.display = 'none';
        document.querySelector(".app-legal").style.display = 'none';
    }

    window.setTimeout(function () {
        var elemPlay = document.querySelector(".play");
        var elemApp = document.querySelector(".app");
        elemApp.style.height = elemApp.offsetHeigth - (elemPlay.offsetHeight * 82 / 250) + "px";
        elemApp.style.width = elemApp.offsetWidth - (elemPlay.offsetWidth * 82 / 646) + "px";
    }, 5);
});