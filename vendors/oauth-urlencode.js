/**
 *  @license
 *  jsOAuth version 1.3.6
 *  Copyright (c) 2010, 2011 Rob Griffiths (http://bytespider.eu)
 *  jsOAuth is freely distributable under the terms of an MIT-style license.
 */

/**
 * rfc3986 compatable encode of a string
 *
 * @param {String} string
 */
function oAuthUrlEncode(string) {
    function hex(code) {
        var hex = code.toString(16).toUpperCase();
        if (hex.length < 2) {
            hex = 0 + hex;
        }
        return '%' + hex;
    }

    if (!string) {
        return '';
    }

    string = string + '';
    var reserved_chars = /[ \r\n!*"'();:@&=+$,\/?%#\[\]<>{}|`^\\\u0080-\uffff]/,
        str_len = string.length, i, string_arr = string.split(''), c;

    for (i = 0; i < str_len; i++) {
        if (c = string_arr[i].match(reserved_chars)) {
            c = c[0].charCodeAt(0);

            if (c < 128) {
                string_arr[i] = hex(c);
            } else if (c < 2048) {
                string_arr[i] = hex(192+(c>>6)) + hex(128+(c&63));
            } else if (c < 65536) {
                string_arr[i] = hex(224+(c>>12)) + hex(128+((c>>6)&63)) + hex(128+(c&63));
            } else if (c < 2097152) {
                string_arr[i] = hex(240+(c>>18)) + hex(128+((c>>12)&63)) + hex(128+((c>>6)&63)) + hex(128+(c&63));
            }
        }
    }

    return string_arr.join('');
};
