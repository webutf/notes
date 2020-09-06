+function ($) {
    "use strict";
    //安卓微信中使用scrollfix会有问题，因此只在ios中使用，安卓机器按照原来的逻辑

    if ($.device.ios) {
        var ScrollFix = function (elem) {
            var startTopScroll;
            elem = elem || document.querySelector(elem);
            // If there is no element, then do nothing
            if (!elem) return;

            // Handle the start of interactions
            elem.addEventListener('touchstart', function() {
                startTopScroll = elem.scrollTop;

                if (startTopScroll <= 0) elem.scrollTop = 1;

                if (startTopScroll + elem.offsetHeight >= elem.scrollHeight)
                    elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
            });
        };

        var initScrollFix = function () {
            var scrollable = $(".content");
            new ScrollFix(scrollable[0]);
        };

        $(document).on("touchmove", ".page-current .bar", function () {
            event.preventDefault();
        });
        initScrollFix();
    }
}(jQuery);
