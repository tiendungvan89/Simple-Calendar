function zeller(day, month, year) {
    var m;

    if (month > 2) {
        m = month;
    } else if (month < 3) {
        m = 12 + month;
        year--;
    }

    var y = year % 100;
    var c = y / 100;

    var w = (day + Math.floor((13 * (m + 1)) / 5) + y + Math.floor(y / 4) + Math.floor(c / 4) - 2 * c) % 7;
    return w;
}

function isLeap(year) {
    if ((year % 4) || ((year % 100 === 0) && (year % 400))) return 0;
    else return 1;
}

function daysIn(month, year) {
    return (month === 2) ? (28 + isLeap(year)) : 31 - (month - 1) % 7 % 2;
}

function calendar(month, year) {
    var startIndex = Math.trunc(zeller(1, month, year));
    var endIndex = daysIn(month, year);
    var result = Array.apply(0, Array(42)).map(function (i) { return 0; });
    for (var i = startIndex; i < endIndex + startIndex; i++) {
        result[i] = (i - startIndex) + 1;
    }
    return result;
}

function print(month, year) {
    var result = calendar(month, year);
    var ary = [];
    var hdr = "日 月 火 水 木 金 土";
    console.log(hdr);
    for (var i = 0; i < result.length; i++) {
        var item = "" + result[i];
        ary.push(item.padStart(2, ' '));

        if (ary.length == 7) {
            console.log(ary.join(' ', ary));
            ary = [];
        }
    }
}