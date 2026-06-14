
const CryptoJS = require("crypto-js");

function md5_encrypt(text) {
    return CryptoJS.MD5(String(text)).toString();
}


console.log(md5_encrypt("1"))
console.log(md5_encrypt(1))
console.log(md5_encrypt("123456"))
console.log(md5_encrypt(123456))