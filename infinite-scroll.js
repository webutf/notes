+function ($) {
    'use strict';

    function handleInfiniteScroll() {
        var scroller = $(this);
        var scrollTop = scroller.scrollTop();
        var scrollHeight = scroller.scrollHeight();
        var height = scroller[0].offsetHeight;
        var distance = scroller[0].getAttribute('data-distance');
        if (!distance) distance = 50;
        if (typeof distance === 'string' && distance.indexOf('%') >= 0) {
            distance = parseInt(distance, 10) / 100 * height;
        }

        if (scrollTop + height >= scrollHeight - distance) {
          scroller.trigger('infinite');
        }
    }

    $.attachInfiniteScroll = function (infiniteContent) {
      infiniteContent.on('scroll', handleInfiniteScroll);
    };
    $.detachInfiniteScroll = function (infiniteContent) {
      infiniteContent.off('scroll', handleInfiniteScroll);
    };

    $.initInfiniteScroll = function (pageContainer) {
        $.attachInfiniteScroll($(pageContainer));
    };
}(jQuery);
