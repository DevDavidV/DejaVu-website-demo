/* Listy s objektami ktore chceme animovat */
var $window = $(window);
var $listToAnimate = [$("#dealHeader"), $("#dealNum"), $("#dealDescript"), $("#dealName"), $("#foodMenu")];
var $listToRotateAnimate = [$("#dealPlate"), $("#arrow")];
var $listToSlideInLeft = [$("#aboutSectionContent h1"), $("#aboutSectionContent h2"), $("#aboutSectionContent p")];
var $listToSlideInRight = [$("#extraSectionContent h1"), $("#extraSectionContent h2"), $("#extraSectionContent p")];

/* Objekt sipky a trigger body */
var $arrowTriggerPoint = $(document).height() / 5;
var arrowObejct = document.getElementById("arrow");

/* Funkcia ktora zisti či je objekt vo viditelnej casti okna, ak ano vracia True */
function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

/* Akonahle sa naloaduje cela stranka tak prejde vsetky objekty na animovanie, ci uz nahodou nie su viditelne */
$(document).ready(function () {
    for (var i = 0; i < ($listToAnimate.length); i++) {
        $listToAnimate[i].addClass("toAnimate");
        if (isScrolledIntoView($listToAnimate[i], $window)) {
            $listToAnimate[i].removeClass("toAnimate");
            $listToAnimate[i].addClass("animated");
        }
    }
    for (var i = 0; i < ($listToRotateAnimate.length); i++) {
        $listToRotateAnimate[i].addClass("toAnimate");
        if (isScrolledIntoView($listToRotateAnimate[i], $window)) {
            $listToRotateAnimate[i].removeClass("toAnimate");
            $listToRotateAnimate[i].addClass("rotated");
        }
    }
    for (var i = 0; i < ($listToSlideInLeft.length); i++) {
        $listToSlideInLeft[i].addClass("toAnimate");
        if (isScrolledIntoView($listToSlideInLeft[i], $window)) {
            $listToSlideInLeft[i].removeClass("toAnimate");
            $listToSlideInLeft[i].addClass("slidedL");
        }
    }

    for (var i = 0; i < ($listToSlideInRight.length); i++) {
        $listToSlideInRight[i].addClass("toAnimate");
        if (isScrolledIntoView($listToSlideInRight[i], $window)) {
            $listToSlideInRight[i].removeClass("toAnimate");
            $listToSlideInRight[i].addClass("slidedR");
        }
    }
});

/* Ak nastane scrollovanie tak prejde vsetky objekty na animovanie, ci uz nahodou nie su viditelne */
$(document).on("scroll", function () {

    if(window.pageYOffset>$arrowTriggerPoint){
        if (window.getComputedStyle(arrowObejct).display === "none") {
            arrowObejct.style.display = "block";     }
    }else{
        $(arrowObejct).fadeOut( 600, function() {
            arrowObejct.style.display = "none";
          });

    }

    for (var i = 0; i < ($listToAnimate.length); i++) {
        if (isScrolledIntoView($listToAnimate[i], $window)) {
            $listToAnimate[i].removeClass("toAnimate");
            $listToAnimate[i].addClass("animated");
        }
    }
    for (var i = 0; i < ($listToRotateAnimate.length); i++) {
        if (isScrolledIntoView($listToRotateAnimate[i], $window)) {
            $listToRotateAnimate[i].removeClass("toAnimate");
            $listToRotateAnimate[i].addClass("rotated");
        }
    }

    for (var i = 0; i < ($listToSlideInLeft.length); i++) {
        if (isScrolledIntoView($listToSlideInLeft[i], $window)) {
            $listToSlideInLeft[i].removeClass("toAnimate");
            $listToSlideInLeft[i].addClass("slidedL");
        }
    }

    for (var i = 0; i < ($listToSlideInRight.length); i++) {
        if (isScrolledIntoView($listToSlideInRight[i], $window)) {
            $listToSlideInRight[i].removeClass("toAnimate");
            $listToSlideInRight[i].addClass("slidedR");
        }
    }
});

$('body').bind('touchmove', function (e) {

    if(window.pageYOffset>$arrowTriggerPoint){
        if (window.getComputedStyle(arrowObejct).display === "none") {
            arrowObejct.style.display = "block";     }
    }else{
        $(arrowObejct).fadeOut( 600, function() {
            arrowObejct.style.display = "none";
          });

    }

    for (var i = 0; i < ($listToAnimate.length); i++) {
        if (isScrolledIntoView($listToAnimate[i], $window)) {
            $listToAnimate[i].removeClass("toAnimate");
            $listToAnimate[i].addClass("animated");
        }
    }
    for (var i = 0; i < ($listToRotateAnimate.length); i++) {
        if (isScrolledIntoView($listToRotateAnimate[i], $window)) {
            $listToRotateAnimate[i].removeClass("toAnimate");
            $listToRotateAnimate[i].addClass("rotated");
        }
    }

    for (var i = 0; i < ($listToSlideInLeft.length); i++) {
        if (isScrolledIntoView($listToSlideInLeft[i], $window)) {
            $listToSlideInLeft[i].removeClass("toAnimate");
            $listToSlideInLeft[i].addClass("slidedL");
        }
    }

    for (var i = 0; i < ($listToSlideInRight.length); i++) {
        if (isScrolledIntoView($listToSlideInRight[i], $window)) {
            $listToSlideInRight[i].removeClass("toAnimate");
            $listToSlideInRight[i].addClass("slidedR");
        }
    }
});

/* Ovladanie menu / menu tlacidla na mobilnej verzii */
document.getElementById("burgerMenu").addEventListener("click", function () {
    var burgerMenuObject = document.getElementById("mobileMenu");
    if (window.getComputedStyle(burgerMenuObject).display === "none") {
        burgerMenuObject.style.display = "flex";
    } else {
        burgerMenuObject.style.display = "none";;
    }
});


/* Ovladanie sipky na scroll */

$("#arrow").on("click", function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
});

