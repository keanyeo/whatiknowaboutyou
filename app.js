
function mappingElementById() {

    document.getElementById("timeOpened").innerHTML = new Date();
    document.getElementById("timezone").innerHTML = (new Date()).getTimezoneOffset() / 60;
    document.getElementById("pageon").innerHTML = window.location.pathname;

    document.getElementById("sizeDocW").innerHTML = document.width;
    document.getElementById("sizeDocH").innerHTML = document.height;

    document.getElementById("previousSites").innerHTML = history.length;

    document.getElementById("browserVersion1b").innerHTML = navigator.userAgent;
    document.getElementById("browserLanguage").innerHTML = navigator.language;
    document.getElementById("browserOnline").innerHTML = navigator.onLine;
    document.getElementById("dataCookiesEnabled").innerHTML = navigator.cookieEnabled;
    document.getElementById("connectionType").innerHTML = navigator.connection.effectiveType;
    document.getElementById("vendor").innerHTML = navigator.vendor;

    document.getElementById("dataStorage").innerHTML = localStorage.length;
    document.getElementById("sizeScreenW").innerHTML = screen.width;
    document.getElementById("sizeScreenH").innerHTML = screen.height;
    document.getElementById("sizeInW").innerHTML = innerWidth;
    document.getElementById("sizeInH").innerHTML = innerHeight;
    document.getElementById("sizeAvailW").innerHTML = screen.availWidth;
    document.getElementById("sizeAvailH").innerHTML = screen.availHeight;
    document.getElementById("scrColorDepth").innerHTML = screen.colorDepth;
    document.getElementById("scrPixelDepth").innerHTML = screen.pixelDepth;
}

function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch {
        document.getElementById("err").innerHTML = err;
    }
}

function showPosition(position) {
    document.getElementById("latitude").innerHTML = position.coords.latitude;
    document.getElementById("longitude").innerHTML = position.coords.longitude;
    document.getElementById("accuracy").innerHTML = position.coords.accuracy;
    document.getElementById("altitude").innerHTML = position.coords.altitude;
    document.getElementById("altitudeAccuracy").innerHTML = position.coords.altitudeAccuracy;
    document.getElementById("heading").innerHTML = position.coords.heading;
    document.getElementById("speed").innerHTML = position.coords.speed;
    document.getElementById("timestamp").innerHTML = position.timestamp;
}