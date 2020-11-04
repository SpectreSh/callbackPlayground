
function pushSlogan(SloganNumber, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            console.log(`down with America ${xhr.responseTextfoo}`);
            callback();
            //document.getElementById("2").innerHTML = `down with America ${xhr.responseTextfoo}`;
        }
    }
    xhr.open('GET', `/Slogans/${SloganNumber}`, true);
    xhr.send();
}