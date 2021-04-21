

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
    testname: 'ENGLISH',
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

$('#newlimitcheck').click(function () {
    $('#limiton').trigger('click');
    // alert("sds");
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
$('#newbackcheck').click(function () {
    $('#backon').trigger('click');
    // alert("sds");
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

$(document).keydown(function (e) { if (e.which == 8 && disablebackspace) { e.preventDefault(); return false; } });

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
                console.log(textbook_words);
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
$('#textcopy').keyup(function (e) {

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
});


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