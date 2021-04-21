

// var textbook = $('#textbook').text().trim();
var textcopy = document.getElementById('textcopy');
console.log(textcopy.value);
var textbook_words = [];
var ps = 0

var started = false;
var secondsup = 0;
var meter = {
    gwpm: 0.00,
    nwpm: 0.00,
    acc: 0
}
var disablebackspace = false;
var wordlimit = false;
var autoscroll = true;
var username = false;
var uduration = 0;
var typedkey = 0;
var totalbackspace = 0;
function calculateinfo() {
    var t = $('#textcopy').val().trim();
    result.typedkey = t.length;
    // console.log(t.length);
    var gwpm = (t.length / 5) / (secondsup / 60);
    if (gwpm == Infinity) {
        meter.gwpm = 0.00;
    } else {
        meter.gwpm = gwpm.toFixed(2);

    }
    console.log(meter.gwpm);

    var tw = t.split(" ");
    var error = 0;
    var correct = 0;
    tw.forEach(function (item, index) {
        if (item !== textbook_words[index]) {
            error++;
        } else {
            correct++;
        }
    });
    result.wrongwords = error;
    result.correctwords = correct;
    result.totaltypedwords = tw.length;
    result.totalwords = textbook_words.length;
    result.restwords = textbook_words.length - tw.length;

    error = error / (secondsup / 60);
    s = meter.gwpm - error;

    if (s < 0) {
        meter.nwpm = 0.00;
    } else {
        meter.nwpm = s.toFixed(2);

    }
    d = (correct / tw.length) * 100;
    meter.acc = d.toFixed(2);

    console.log('Meter', meter);
    $('.gwpm').text(meter.gwpm);
    $('.nwpm').text(meter.nwpm);
    $('.acc').text(meter.acc);
    result.gwpm = parseInt(meter.gwpm) + ' WPM';
    result.nwpm = parseInt(meter.nwpm) + ' WPM';
    result.accuracy = meter.acc + ' %';

}
var fsize = 20;

var result = {
    username: '',
    accuracy: '0 %',
    timeduration: '',
    nwpm: '0 WPM',
    testname: 'HINDI MANGAL',
    gwpm: '0 WPM',
    wrongwords: 0,
    totalkey: '',
    correctwords: 0,
    typedkey: 0,
    totaltypedwords: 0,
    restkey: '',
    totalwords: '',
    actualtimetaken: '',
    restwords: '',
    backspacecount: 0
}

$('.isize').click(function () {
    fsize++;
    $('#fsize').text(fsize);
    $('#textbook').css('font-size', fsize + 'px');
});

$('.dsize').click(function () {
    fsize--;
    $('#fsize').text(fsize);
    $('#textbook').css('font-size', fsize + 'px');
});


$('#limiton').click(function () {
    if ($(this).is(":checked")) {
        $('#limit').prop('disabled', false);
        $('#limitoff').prop('checked', false);


        wordlimit = true;

    } else {
        $('#limit').prop('disabled', true);
        $('#limitoff').prop('checked', true);

        wordlimit = false;

    }
});

$('#limitoff').click(function () {
    if ($(this).is(":checked")) {
        $('#limit').prop('disabled', true);
        $('#limiton').prop('checked', false);
        wordlimit = false;


    } else {
        $('#limit').prop('disabled', false);
        $('#limiton').prop('checked', true);
        wordlimit = true;


    }
});

$('#backon').click(function () {
    if ($(this).is(":checked")) {
        $('#backoff').prop('checked', false);
        disablebackspace = false;

    } else {

        $('#backoff').prop('checked', true);
        disablebackspace = true;


    }
});

$('#backoff').click(function () {
    if ($(this).is(":checked")) {
        $('#backon').prop('checked', false);
        disablebackspace = true;


    } else {
        $('#backon').prop('checked', true);
        disablebackspace = false;


    }
});
$('#newscrollcheck').click(function () {
    $('#scrollon').trigger('click');
    // alert("sds");
});
$('#newlimitcheck').click(function () {
    $('#limiton').trigger('click');
    // alert("sds");
});
$('#newbackcheck').click(function () {
    $('#backon').trigger('click');
    // alert("sds");
});

$('#scrollon').click(function () {
    if ($(this).is(":checked")) {
        $('#scrolloff').prop('checked', false);
        autoscroll = true;

    } else {

        $('#scrolloff').prop('checked', true);

        autoscroll = false;

    }
});

$('#scrolloff').click(function () {
    if ($(this).is(":checked")) {
        $('#scrollon').prop('checked', false);
        autoscroll = false;


    } else {

        $('#scrollon').prop('checked', true);
        autoscroll = true;


    }
});

$('#subtest').click(function () {
    result.username = username;
    result.timeduration = (uduration / 60) + ' Minutes';

    result.restkey = result.totalkey - result.typedkey;
    result.backspacecount = totalbackspace;
    result.actualtimetaken = parseInt(secondsup / 60) + " : " + (secondsup % 60);

    showResult();

});
var non = "";
$("#textcopy").keydown(function (e) {
    if (e.which == 8 && disablebackspace) { e.preventDefault(); return false; } else {
        if (e.keyCode == 8) {


        } else {
            userkeys.forEach(function (k) {
                if (k.keycode == e.keyCode && k.shift == e.shiftKey) {
                    non = $('#textcopy').val() + k.key;
                    $('#textcopy').val(non);
                }
            });
            e.preventDefault();

        }

        typing(e);
    }
});

$('#start').click(function (e) {
    if ($('#username').val() == '') {
        e.preventDefault();
        $('#username').css('border', '1px solid red');
        $('#username').prop('placeholder', 'You have to enter your name !');

    } else {
        $('#username').css('border', '');
        $('#username').prop('placeholder', '');

        $('.option').hide(1000);
        $('.tester').show(1000);
        var para = $('#para').val();
        console.log('paragraph', para);
        $('#textbook').load('text' + para + '.txt', function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                var textbook = $('#textbook').text().trim();
                textbook_words = textbook.split(" ");
                if (wordlimit) {
                    var lim = $("#limit").val();
                    var temp = [];

                    if (lim < textbook_words.length) {
                        for (i = 0; i < lim; i++) {
                            temp.push(textbook_words[i]);
                        }
                        textbook_words = temp;
                        var st = "";
                        for (i = 0; i < textbook_words.length; i++) {
                            st += textbook_words[i] + ' ';
                        }
                        $('#textbook').text(st);
                        textbook = $('#textbook').text().trim();
                    }


                }
                console.log(textbook.length);
                result.totalkey = textbook.length;
            }
        });

        // console.log('textbook size', tottext);
        // console.log('textbook', tot.value);

        username = $('#username').val();
        uduration = $('#duration').val();
        console.log('wordlimit', wordlimit);
        console.log('autoscroll', autoscroll);
        console.log('disablebackspace', disablebackspace);
        console.log('username', username);
        console.log('duration', uduration);




    }

});
function scrolldiv() {
    var elem = document.getElementById("restbook");
    if (elem) {
        elem.scrollIntoView({
            block: 'center',
            behavior: 'smooth',
            inline: 'nearest'
        });
    }

}
var userkeys = [
    {
        "keycode": 32,
        "key": " ",
        "shift": false
    },
    {
        "keycode": 8,
        "key": "Backspace",
        "shift": false
    },
    {
        "keycode": 192,
        "key": "ॊ",
        "shift": false
    },
    {
        "keycode": 49,
        "key": "1",
        "shift": false
    },
    {
        "keycode": 50,
        "key": "2",
        "shift": false
    },
    {
        "keycode": 51,
        "key": "3",
        "shift": false
    },
    {
        "keycode": 52,
        "key": "4",
        "shift": false
    },
    {
        "keycode": 53,
        "key": "5",
        "shift": false
    },
    {
        "keycode": 54,
        "key": "6",
        "shift": false
    },
    {
        "keycode": 55,
        "key": "7",
        "shift": false
    },
    {
        "keycode": 56,
        "key": "8",
        "shift": false
    },
    {
        "keycode": 57,
        "key": "9",
        "shift": false
    },
    {
        "keycode": 48,
        "key": "0",
        "shift": false
    },
    {
        "keycode": 189,
        "key": "-",
        "shift": false
    },
    {
        "keycode": 187,
        "key": "ृ",
        "shift": false
    },
    {
        "keycode": 81,
        "key": "ौ",
        "shift": false
    },
    {
        "keycode": 87,
        "key": "ै",
        "shift": false
    },
    {
        "keycode": 69,
        "key": "ा",
        "shift": false
    },
    {
        "keycode": 82,
        "key": "ी",
        "shift": false
    },
    {
        "keycode": 84,
        "key": "ू",
        "shift": false
    },
    {
        "keycode": 89,
        "key": "ब",
        "shift": false
    },
    {
        "keycode": 85,
        "key": "ह",
        "shift": false
    },
    {
        "keycode": 73,
        "key": "ग",
        "shift": false
    },
    {
        "keycode": 79,
        "key": "द",
        "shift": false
    },
    {
        "keycode": 80,
        "key": "ज",
        "shift": false
    },
    {
        "keycode": 219,
        "key": "ड",
        "shift": false
    },
    {
        "keycode": 221,
        "key": "़",
        "shift": false
    },
    {
        "keycode": 220,
        "key": "ॉ",
        "shift": false
    },
    {
        "keycode": 65,
        "key": "ो",
        "shift": false
    },
    {
        "keycode": 83,
        "key": "े",
        "shift": false
    },
    {
        "keycode": 68,
        "key": "्",
        "shift": false
    },
    {
        "keycode": 70,
        "key": "ि",
        "shift": false
    },
    {
        "keycode": 71,
        "key": "ु",
        "shift": false
    },
    {
        "keycode": 72,
        "key": "प",
        "shift": false
    },
    {
        "keycode": 74,
        "key": "र",
        "shift": false
    },
    {
        "keycode": 75,
        "key": "क",
        "shift": false
    },
    {
        "keycode": 76,
        "key": "त",
        "shift": false
    },
    {
        "keycode": 186,
        "key": "च",
        "shift": false
    },
    {
        "keycode": 222,
        "key": "ट",
        "shift": false
    },
    {
        "keycode": 90,
        "key": "ॆ",
        "shift": false
    },
    {
        "keycode": 88,
        "key": "ं",
        "shift": false
    },
    {
        "keycode": 67,
        "key": "म",
        "shift": false
    },
    {
        "keycode": 86,
        "key": "न",
        "shift": false
    },
    {
        "keycode": 66,
        "key": "व",
        "shift": false
    },
    {
        "keycode": 78,
        "key": "ल",
        "shift": false
    },
    {
        "keycode": 77,
        "key": "स",
        "shift": false
    },
    {
        "keycode": 188,
        "key": ",",
        "shift": false
    },
    {
        "keycode": 190,
        "key": ".",
        "shift": false
    },
    {
        "keycode": 191,
        "key": "य",
        "shift": false
    },
    {
        "keycode": 191,
        "key": "य",
        "shift": false
    },
    {
        "keycode": 192,
        "key": "ऒ",
        "shift": true
    },
    {
        "keycode": 49,
        "key": "ऍ",
        "shift": true
    },
    {
        "keycode": 50,
        "key": "ॅ",
        "shift": true
    },
    {
        "keycode": 51,
        "key": "्र",
        "shift": true
    },
    {
        "keycode": 52,
        "key": "र्",
        "shift": true
    },
    {
        "keycode": 53,
        "key": "ज्ञ",
        "shift": true
    },
    {
        "keycode": 54,
        "key": "त्र",
        "shift": true
    },
    {
        "keycode": 55,
        "key": "क्ष",
        "shift": true
    },
    {
        "keycode": 56,
        "key": "श्र",
        "shift": true
    },
    {
        "keycode": 57,
        "key": "(",
        "shift": true
    },
    {
        "keycode": 48,
        "key": ")",
        "shift": true
    },
    {
        "keycode": 189,
        "key": "ः",
        "shift": true
    },
    {
        "keycode": 187,
        "key": "ऋ",
        "shift": true
    },
    {
        "keycode": 81,
        "key": "औ",
        "shift": true
    },
    {
        "keycode": 87,
        "key": "ऐ",
        "shift": true
    },
    {
        "keycode": 69,
        "key": "आ",
        "shift": true
    },
    {
        "keycode": 82,
        "key": "ई",
        "shift": true
    },
    {
        "keycode": 84,
        "key": "ऊ",
        "shift": true
    },
    {
        "keycode": 89,
        "key": "भ",
        "shift": true
    },
    {
        "keycode": 85,
        "key": "ङ",
        "shift": true
    },
    {
        "keycode": 73,
        "key": "घ",
        "shift": true
    },
    {
        "keycode": 79,
        "key": "ध",
        "shift": true
    },
    {
        "keycode": 80,
        "key": "झ",
        "shift": true
    },
    {
        "keycode": 219,
        "key": "ढ",
        "shift": true
    },
    {
        "keycode": 221,
        "key": "ञ",
        "shift": true
    },
    {
        "keycode": 220,
        "key": "ऑ",
        "shift": true
    },
    {
        "keycode": 65,
        "key": "ओ",
        "shift": true
    },
    {
        "keycode": 83,
        "key": "ए",
        "shift": true
    },
    {
        "keycode": 68,
        "key": "अ",
        "shift": true
    },
    {
        "keycode": 70,
        "key": "इ",
        "shift": true
    },
    {
        "keycode": 71,
        "key": "उ",
        "shift": true
    },
    {
        "keycode": 72,
        "key": "फ",
        "shift": true
    },
    {
        "keycode": 74,
        "key": "ऱ",
        "shift": true
    },
    {
        "keycode": 75,
        "key": "ख",
        "shift": true
    },
    {
        "keycode": 76,
        "key": "थ",
        "shift": true
    },
    {
        "keycode": 186,
        "key": "छ",
        "shift": true
    },
    {
        "keycode": 222,
        "key": "ठ",
        "shift": true
    },
    {
        "keycode": 90,
        "key": "ऎ",
        "shift": true
    },
    {
        "keycode": 88,
        "key": "ँ",
        "shift": true
    },
    {
        "keycode": 67,
        "key": "ण",
        "shift": true
    },
    {
        "keycode": 86,
        "key": "ऩ",
        "shift": true
    },
    {
        "keycode": 66,
        "key": "ऴ",
        "shift": true
    },
    {
        "keycode": 78,
        "key": "ळ",
        "shift": true
    },
    {
        "keycode": 77,
        "key": "श",
        "shift": true
    },
    {
        "keycode": 188,
        "key": "ष",
        "shift": true
    },
    {
        "keycode": 190,
        "key": "।",
        "shift": true
    },
    {
        "keycode": 191,
        "key": "य़",
        "shift": true
    },
    {
        "keycode": 16,
        "key": "Shift",
        "shift": false
    }
];


function typing(e) {

    // if (disablebackspace && e.keyCode == 8) {
    //     e.preventDefault();
    //     console.log('button stopped');
    //     return false;
    // }
    if (e.keyCode == 8 && !disablebackspace) {
        totalbackspace++;
    }
    if (!started) {
        started = true;
        startTimer(uduration);
        var intervalId = window.setInterval(function () {
            secondsup++;
            // console.log(secondsup);
        }, 1000);
    }
    calculateinfo();
    if (autoscroll) {
        scrolldiv();
    }
    var usertext = $('#textcopy').val().trim();
    usertext = usertext.split(" ");
    var usedwords = '';

    usertext.forEach(function (item, index) {
        if (index == usertext.length - 1) {
            usedwords += ' <span class="bg-warning">' + textbook_words[index] + '</span>';

        } else {
            if (usertext[index] == textbook_words[index]) {

                usedwords += ' <span class="text-success"><b>' + textbook_words[index] + '</b></span>';
            } else {
                usedwords += ' <span class="text-danger"><b>' + textbook_words[index] + '</b></span>';

            }

        }


    });
    var sos = true;
    textbook_words.forEach(function (item, index) {
        if (index > usertext.length - 1) {
            if (sos) {
                usedwords += ' <span id="restbook">' + textbook_words[index] + '</span>';
                sos = false;

            } else {
                usedwords += ' ' + textbook_words[index];
            }

        }

    });


    $('#textbook').html(usedwords);
    // console.log(usedwords);

    // if (ps !== usertext.length) {
    //     console.log(usertext);

    // }
    // ps = usertext.length;
}


function startTimer(duration) {
    var timer = duration, minutes, seconds;
    var cl = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $(".time").text(minutes + ":" + seconds);

        if (--timer < 0) {
            result.username = username;
            result.timeduration = (uduration / 60) + ' Minutes';

            result.restkey = result.totalkey - result.typedkey;
            result.backspacecount = totalbackspace;
            result.actualtimetaken = parseInt(secondsup / 60) + " : " + (secondsup % 60);
            showResult();
            clearInterval(cl);
            clearInterval(intervalId);
        }
    }, 1000);
}


function showResult() {
    $('.tester').hide(1000);
    $('.result #username').val(result.username);
    $('.result #accuracy').val(result.accuracy);
    $('.result #timeduration').val(result.timeduration);
    $('.result #nwpm').val(result.nwpm);
    $('.result #testname').val(result.testname);
    $('.result #gwpm').val(result.gwpm);
    $('.result #wrongwords').val(result.wrongwords);
    $('.result #totalkey').val(result.totalkey);
    $('.result #correctwords').val(result.correctwords);
    $('.result #typedkey').val(result.typedkey);
    $('.result #totaltypedwords').val(result.totaltypedwords);
    $('.result #restkey').val(result.restkey);
    $('.result #totalwords').val(result.totalwords);
    $('.result #actualtimetaken').val(result.actualtimetaken);
    $('.result #restwords').val(result.restwords);
    $('.result #backspacecount').val(result.backspacecount);
    $('.result').show(1000);
}

function restarttest() {
    location.reload();
}