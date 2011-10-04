//
// dotted.js
// ~~~~~~~~~
//
// Sphinx javascript -- dotted style theme.
//
// This theme was created by referring to Haiku.
//
//
// :copyright: Copyright 2011 by Sphinx-users.jp, see AUTHORS.
// :license: MIT, see LICENSE for details.
//
//
jQuery(function () {
    jQuery("div.topnav > p > a").click(function (event) {
        event.stopPropagation();
    });
    jQuery("div.topnav,div.header-middle").click(function () {
        jQuery("div.header-middle").slideToggle("slow");
    });
});
