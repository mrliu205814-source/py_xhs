debugger;

const CryptoJS = require("crypto-js");


require('./env.js')
require('./hunxiao.js')

function md5_encrypt(text) {
    return CryptoJS.MD5(String(text)).toString();
}

//函数x
let a=[
    "Z",
    "m",
    "s",
    "e",
    "r",
    "b",
    "B",
    "o",
    "H",
    "Q",
    "t",
    "N",
    "P",
    "+",
    "w",
    "O",
    "c",
    "z",
    "a",
    "/",
    "L",
    "p",
    "n",
    "g",
    "G",
    "8",
    "y",
    "J",
    "q",
    "4",
    "2",
    "K",
    "W",
    "Y",
    "j",
    "0",
    "D",
    "S",
    "f",
    "d",
    "i",
    "k",
    "x",
    "3",
    "V",
    "T",
    "1",
    "6",
    "I",
    "l",
    "U",
    "A",
    "F",
    "M",
    "9",
    "7",
    "h",
    "E",
    "C",
    "v",
    "u",
    "R",
    "X",
    "5"
];

function i(e) {
    return a[e >> 18 & 63] + a[e >> 12 & 63] + a[e >> 6 & 63] + a[63 & e]
}

function o(e, f, c) {
    for (var a = [], t = f; t < c; t += 3)
        a.push(i((e[t] << 16 & 0xff0000) + (e[t + 1] << 8 & 65280) + (255 & e[t + 2])));
    return a.join("")
}

function x(e) {
    for (var f, c = e.length, t = c % 3, n = [], d = 16383, r = 0, i = c - t; r < i; r += d)
        n.push(o(e, r, r + d > i ? i : r + d));
    return 1 === t ? n.push(a[(f = e[c - 1]) >> 2] + a[f << 4 & 63] + "==") : 2 === t && n.push(a[(f = (e[c - 2] << 8) + e[c - 1]) >> 10] + a[f >> 4 & 63] + a[f << 2 & 63] + "="),
        n.join("")
}

//函数b
function b(e) {
    for (var f = encodeURIComponent(e), c = [], a = 0; a < f.length; a++) {
        var t = f.charAt(a);
        if ("%" === t) {
            var n = parseInt(f.charAt(a + 1) + f.charAt(a + 2), 16);
            c.push(n),
                a += 2
        } else
            c.push(t.charCodeAt(0))
    }
    return c
}


function get_xs(y, z) {
    let a = y + JSON.stringify(z);
    let t = md5_encrypt([a].join(""));
    let n = md5_encrypt(y);
    let C = window.mnsv2(a, t, n);
    let i = {
        "x0": "4.3.5",
        "x1": "ugc",
        "x2": "Windows",
        "x3": C,
        "x4": "object"
    };
    return "XYS_" + x(b(JSON.stringify(i)))
}

url='/api/galaxy/v2/creator/datacenter/account/base'
json_data = ''
xs=get_xs(url,json_data)
console.log(xs,xs.length)

globalThis.get_xs=get_xs;

debugger;

// nodemon --inspect-brk 'D:\pycharm\pythonproject\my_xhs\target.js'