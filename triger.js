// Fungsi enkripsi sederhana
function encd(params) {
    var str = "";
    for (var i = 0; i < params.length; i++) {
        str += String.fromCharCode(params.charCodeAt(i) + 1);
    }
    return str;
}

// Fungsi deskripsi sederhana
function decd(params) {
    var str = "";
    for (var i = 0; i < params.length; i++) {
        str += String.fromCharCode(params.charCodeAt(i) - 1);
    }
    return str;
}

// Fungsi untuk merekam suara
function record() {
    try {
        console.log("tag");

        setTimeout(() => {
            swingCircle();
        }, 2000);
    } catch (e) {
        console.log(e);
    }
}

// Fungsi untuk memutar input suara
function play() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.getElementById("result").value;
    window.speechSynthesis.speak(msg);
}

// Fungsi untuk memutar suara dari teks
function speak(text) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}


// Fungsi untuk mulai rekam lalu putar suara
function start() {
    try {
        speak("Please speak something.");
        console.log("start");
        record();
        console.log("record");
        // Menggunakan setTimeout untuk memberi waktu rekam sebelum putar
        setTimeout(function () {
            console.log("play");
            play();
        }, 4000); // timeout dinaikkan menjadi 4 detik untuk hasil lebih stabil
    } catch (e) {
        console.log(e);
    }
}

