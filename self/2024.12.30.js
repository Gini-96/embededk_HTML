window.onload = function() {
    document.querySelector("#inputurl").addEventListener("keydown", function(e) {
        console.log(document.querySelector("#inputurl").value);
        if (e.keyCode==13) {
            location.href = "https://" + document.querySelector("#inputurl").value;
        }
    });
    document.querySelector("#btn").addEventListener("click", function() {
        location.href = "https://www.google.com";
    });
    document.querySelector("#btn2").addEventListener("click", function() {
        location.href = "https://www.naver.com";
    });
    document.querySelectorAll(".btn3").forEach(function() {
        this.addEventListener("click", function() {
            location.href = "https://www.kakao.com";
        });
    });
}