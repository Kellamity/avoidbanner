/***********************************************************************************************
    jQuery Avoid Header Plugin - v1
    When called checks the element is not hidden and shifts the scroll to adjust if nessesary
    headerId - element id attribute of the area to avoid being behind
    headerHeight - height of header banner if hard coding
    buffer - additional pixels to shift scroll by to improve visibility
    Kelly Starr
    14/12/2015
***********************************************************************************************/
(function ($) {
    $.fn.avoidheader = function (options) {
        var settings = $.extend({}, $.fn.avoidheader.defaults, options);
        var posTop = this.get(0).getBoundingClientRect().top;
        var header = document.getElementById(settings.headerId);
        //headersize can be determined by passing either a fixed height, or the id of the header region to calculate it dynamically
        //if the header id does not exist then the headerHeight value is used instead
        var headerSize = header ? header.scrollHeight : settings.headerHeight;
        //if behind header area or off the top of the window
        if (posTop < headerSize) {
            $(window).scrollTop(($(window).scrollTop() - (headerSize - posTop)) - settings.buffer);
        }
        return this;
    };

    $.fn.avoidheader.defaults = {
        headerId: "",
        headerHeight: 0,
        buffer: 0
    };

}(jQuery));
