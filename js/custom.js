
var customScripts = {
    profile: function () {
        var portfolio = $('#portfolio');
        var items = $('.items', portfolio);
        // alert(JSON.stringify(items))
        var filters = $('.filters li a', portfolio);
        // alert(JSON.stringify(filters))

        items.imagesLoaded(function () {
            items.isotope({
                filter: '.photography',
                layoutMode: 'fitRows',
                transitionDuration: '0.7s'
            });

        });

        filters.click(function () {
            var el = $(this);
            filters.removeClass('active');
            el.addClass('active');
            var selector = el.attr('data-filter');
            items.isotope({ filter: selector });
            return false;
        });
    },
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 500,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                //I get fired when the animation is ending
                if (!$('#main-nav ul li:first-child').hasClass('active')) {
                    $('.header').addClass('addBg');
                } else {
                    $('.header').removeClass('addBg');
                }
                // if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                //     $('#menu-center ul li a').removeClass("active");
                //     currLink.addClass("active");
                // }
                // else{
                //     currLink.removeClass("active");
                // }
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
                if (!$('#main-nav ul li:first-child').hasClass('active')) {
                    $('.header').addClass('addBg');
                } else {
                    $('.header').removeClass('addBg');
                }
            }
        });

        $("a[href='#top']").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
        $("a[href='#basics']").click(function () {
            $("html, body").animate({ scrollTop: $('#services').offset().top - 75 }, "slow");
            return false;
        });
    },
    owlSlider: function () {
        var owl = $("#owl-demo");
        owl.owlCarousel();
        // Custom Navigation Events
        $(".next").click(function () {
            owl.trigger('owl.next');
        })
        $(".prev").click(function () {
            owl.trigger('owl.prev');
        })
    },
    bannerHeight: function () {
        var bHeight = $(".banner-container").height();
        $('#da-slider').height(bHeight);
        $(window).resize(function () {
            var bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
    },
    waySlide: function () {
        /* Waypoints Animations
   ------------------------------------------------------ */


    },
    fitText: function () {
        setTimeout(function () {
            $('h1.responsive-headline').fitText(1.2, { minFontSize: '16px', maxFontSize: '30px' });
        }, 100);
    },
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox();
        customScripts.owlSlider();
        customScripts.waySlide();
        customScripts.fitText();
        customScripts.bannerHeight();
    }
}
$('document').ready(function () {
    customScripts.init();
    $('.carousel').carousel();
});
window.onload = function () {
    var ball = document.getElementById('ball')
    ball.style.marginLeft = "25px";
};
jQuery(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");


    jQuery('.btn[href^=#]').click(function (e) {
        e.preventDefault();
        var href = jQuery(this).attr('href');
        jQuery(href).modal('toggle');
    });



});


$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
})

var mymap = L.map('mapid').setView([25.591386, 91.880590], 12);
var marker = L.marker([25.591386, 91.880590]);
marker.addTo(mymap);
this.marker.bindPopup("Sacred Heart Boys' Higher Secondary School");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
}).addTo(mymap);


