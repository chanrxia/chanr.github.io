$(document).ready(function () {
    $('.hholst').mouseenter(function () {
        var wrapper = $(this);
        var audioElement = wrapper.find('.jupiter');
        var plainHtmlAudio = audioElement[0];
        plainHtmlAudio.play();
    });
 });

$(document).ready(function () {
    $('.lliszt').mouseenter(function () {
        var wrapper = $(this);
        var audioElement = wrapper.find('.hsiao');
        var plainHtmlAudio = audioElement[0];
        plainHtmlAudio.play();
    });
});

$(document).ready(function () {
    $('.eelgar').mouseenter(function () {
        var wrapper = $(this);
        var audioElement = wrapper.find('.enigma');
        var plainHtmlAudio = audioElement[0];
        audioElement.currentTime = 1546;
        plainHtmlAudio.play();

    });
});

$(document).ready(function () {
    $('.ggershwin').mouseenter(function () {
        var wrapper = $(this);
        var audioElement = wrapper.find('.paris');
        var plainHtmlAudio = audioElement[0];
        audioElement.currentTime = 1546;
        plainHtmlAudio.play();

    });
});

$(document).ready(function () {
    $('.ddvorak').mouseenter(function () {
        var wrapper = $(this);
        var audioElement = wrapper.find('.symphony');
        var plainHtmlAudio = audioElement[0];
        audioElement.currentTime = 1546;
        plainHtmlAudio.play();

    });
});

$(document).ready(function () {
    $('.bbizet').mouseenter(function () {
        var wrapper = $(this);
        var audioElement = wrapper.find('.arles');
        var plainHtmlAudio = audioElement[0];
        audioElement.currentTime = 1546;
        plainHtmlAudio.play();

    });
});
// myAudio.addEventListener('canplaythrough', function () {
//     this.currentTime = 46;
//     this.play();



// $(document).ready(function(){
//     $('.h1').mouseenter(function() {
//         console.log('mouse enter');
//         var wrapper = $(this).closest(".hholst");
//         var audioElement = wrapper.find('.jupiter');
//         var plainHtmlAudio = audioElement[0];
//         plainHtmlAudio.play();
//       }).mouseleave(function () {
//         console.log('mouse leave');
//     });
// });



   /*  $(document).ready(function () {
        $('.a1').mouseenter(function () {
            console.log('mouse enter');
            var wrapper = $(this).closest(".svg");
            var audioElement = wrapper.find('.sound1');
            var plainHtmlAudio = audioElement[0];
            plainHtmlAudio.play();
        }).mouseleave(function () {
            console.log('mouse leave');
        });
    });
          ***  $('audio#pop')[0].currentTime = 0
    $(document).ready(function () {
        $('.a1').mouseenter(function () {
            console.log('mouse enter');
            var wrapper = $(this).closest(".letter.A");
            var audioElement = wrapper.find('.sound1');
            var plainHtmlAudio = audioElement[0];
            plainHtmlAudio.play();
        }).mouseleave(function () {
            console.log('mouse leave');
        });
    });
    $('#HOLST').fadeIn(5000);
    
});
 */