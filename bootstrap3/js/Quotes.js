// JavaScript source code

 
var QuoteInterval;
var QuoteNo = 0;
function LoadQuotes() {

    if ($("#start").text() == "Stop") {
        QuoteNo = 0;
        clearInterval(QuoteInterval);
        $("#textquote").text("Click the start!");
        $("#start").text("Start");
    } else {

        var Quotes = new Array();

        Quotes = [
            " there is nothing impossible to they who will try ~Alexander the Great~",
            " when you have a dream, you've got to grab it and never let go ~Carol Burnett~",
            " Nothing is impossible, the word itself says 'i'm possible' ~Onos Yoma~",
            " The bad news is time flies,the good news is you're the pilot ~Michael Alshuler~",
            " success is not final,failure is not fatal: it is the courage to continue that counts ~Winston Churchill~",
            " if you define your own life,don't let other people write your script ~Opray Winfrey~",
        ];

        document.getElementById("textquote").innerText = "please, kindly wait while the quotes stack up... ";
        QuoteInterval = setInterval(function () {

            if (QuoteNo > Quotes.length) {
                QuoteNo = 0;
            } else {
                $("#textquote").text(Quotes[QuoteNo]);
                QuoteNo = Math.floor(Math.random() * (Quotes.length));
                $("#start").text("Stop");
            }

        }, 2000)

    }


    //function DisableSc() {
    //    document.onkeydown = function (e) {
    //        if (event.keyCode == 123) {
    //            return false;
    //        }
    //        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I') {
    //            return false;
    //        }
    //        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C') {
    //            return false;
    //        }
    //        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J') {
    //            return false;
    //        }
    //        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    //            return false;
    //        }

    //    }

    //};

    //$(document).bind("contextmenu", function (e) {
    //    e.preventDefault();
    //})
}
