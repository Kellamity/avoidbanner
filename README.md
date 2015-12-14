# avoidheader
Checks position of focused elements and shifts scroll of window if elements are offscreen, or behind a fixed static header banner

> Licence: GPL2

> Version: 1

> Requires: jQuery


#Introduction

The jQuery Avoid Header plugin was developed to easily determine the location of an element, and move it into view it if is hidden by a header or banner that is fixed in position at the top of the window.

#Author

> Kellamity

> darksidepoints@gmail.com

#Setup

Copy jquery.avoidheader into your project and add reference to the file path.  The jQuery library must also be present and loaded.

Then the jQuery.fn.avoidheader method can be called by any element.

> $(#elementId).avoidheader();

#Usage

Avoid Header can be used in several scenarios.

##Preventing focused elements from being hidden behind a fixed header/banner

The avoidheader plugin can be called by the element you wish to check the position of.  A useful place to do this is after a call to the .focus() method, as this will shift the scroll to being the emelent into view, and in some browsers this means the top of the window, which will be hidden behind the fixed header.

> $(#elementId).focus().avoidheader();

After elements are dynamically removed from the page, the document may become shorter, and elements with focus may be moved up out of the visible window, or behind a header.  After an event that removes elements from the DOM, the element that has current focus can be checked for position.

> $(document.activeElement).avoidheader();

If there is no fixed header, by default the plugin will use a 0 value.  This means it can be used to make sure focused elements are not in the area above the visible window.

#Options

The plugin is designed to dynamically get the size of the header banner.  This is so that header elements that are set with 'em' values will be accurately converted into pixels even if the user has changed the browser font size.  The header height value is found by passing in the id attribute of the header area.

The plugin takes three optional parameterss

Name | Default values | Description
--- | --- | ---
headerId | "" | Used to find the header DIV and get it's height
headerSize | 0 | Used if there is no headerId
buffer | 0 | Offset the scroll position by an extra number of pixels

The default settings can be overwritten

> <DIV id="header" height=">text</DIV> 

> $.fn.avoidheader.defaults.headerId = "header";


#Demo

Index.html contains a demo of a webpage with a fixed header and focusable elements.  .avoidheader() is called after focus to reposition any hidden elements back into the visible window.

Why can't I see this line?
