function convertStringToNumber(str, type) {
    if (arguments.length < 2) {
        type = 10;
    }
    let chars = str.split('');
    let number = 0;
    let i = 0;
    if (type <= 10) {
        while (i < chars.length && chars[i] != '.') {
            number *= type;
            number += chars[i].codePointAt(0) - '0'.codePointAt(0);
            i++
        }
        if (chars[i] == '.') {
            i++
        }
        let fraction = 1;
        while (i < chars.length) {
            fraction /= type;
            number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
            i++
        }
    } else if (type <= 16) {
        let tempStr = {
            '0': 0,
            '1': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            'a': 10,
            'b': 11,
            'c': 12,
            'd': 13,
            'e': 14,
            'f': 15,
        };
        while (i < chars.length) {
            number *= type;
            number += tempStr[chars[i].toLowerCase()];
            i++
        }
    }
    return number;
}

function convertNumberToString(number, type) {
    if (arguments.length < 2) {
        type = 10;
    }
    let integer = Math.floor(number);
    let fracPos = ('' + number).indexOf('.');
    let fracLen = ('' + number).length - fracPos - 1;
    let fraction = (number - integer).toFixed(fracLen);
    let str = '';
    while (integer > 0) {
        str = integer % type + str;
        integer = Math.floor(integer / type);
    }
    if (fracPos > -1) {
        str += '.';
        while (fracLen > 0) {
            fraction *= type;
            str += Math.floor(fraction % type);
            fracLen--;
        }
    }
    return str;
}

