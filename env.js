(()=>{
    const origin_log = console.log;;
    console_log = function(){
        // return origin_log(...arguments)
    }
})();;;



!(function () {
    watch = function (obj, name) {
        return new Proxy(obj, {
            get(target, p, receiver) {
                // 过滤没用的信息，不进行打印
                if (name)
                    if (p === "Math" || p === "Symbol" || p === "Proxy" || p === "Promise" || p === "Array" || p === "isNaN" || p === "encodeURI" || p === "Uint8Array" || p.toString().indexOf("Symbol(") != -1) {
                        var val = Reflect.get(...arguments);
                        return val
                    }

                    else {
                        var val = Reflect.get(...arguments);

                        if (typeof val === 'function') {
                            console_log(`取值:`, name, '.', p, ` =>`, 'function');
                        }
                        else {
                            console_log(`取值:`, name, '.', p, ` =>`, val);
                        }

                        return val
                    }
            },
            set(target, p, value, receiver) {
                var val = Reflect.set(...arguments)
                if (typeof value === 'function') {
                    console_log(`设置值:${name}.${p}=>function `,);
                }
                else {
                    console_log(`设置值:${name}.${p}=> `, value);
                }
                return val
            },
            has(target, key) {
                value = key in target;
                if(!value){
                    console_log(`检查属性存在性: ${name}.${key.toString()}==> undefined`);
                }else{
                    console_log(`检查属性存在性: ${name}.${key.toString()}==> true`);
                }

                return value;
            },
            ownKeys(target) {
                console_log(`ownKeys检测: ${name}`);
                return Reflect.ownKeys(...arguments)
            }
        })
    }
})()
function makeFunction(name,isget=false) {
    // 动态创建一个函数
    var func = new Function(`
        return function ${name}() {
            console_log('函数传参.${name}',arguments)
        }
    `)();
    safeFunction(func,isget)
    func.prototype = watch(func.prototype, `方法原型:${name}.prototype`)
    func = watch(func, `方法本身:${name}`)
    return func;
};

(() => {
    Function.prototype.$call = Function.prototype.call
    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('', ')_'));
    const myToString = function toString() {
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.$call(this);
    };

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,
            "configurable": true,
            "writable": true,
            "value": value
        })
    }

    delete Function.prototype['toString'];

    set_native(Function.prototype, "toString", myToString);

    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }");

    safeFunction = (func) => {
        set_native(func, myFunction_toString_symbol, `function ${func.name}() { [native code] }`);
    };
})();;;


window = globalThis;
addEventListener = function () {
}
HTMLElement = function () {
}
insight = {}
dssts = 0
xsecappid = 'ugc'
loadts = '1779714864731'
chrome = {
    "app": {
        "isInstalled": false,
        "InstallState": {
            "DISABLED": "disabled",
            "INSTALLED": "installed",
            "NOT_INSTALLED": "not_installed"
        },
        "RunningState": {
            "CANNOT_RUN": "cannot_run",
            "READY_TO_RUN": "ready_to_run",
            "RUNNING": "running"
        }
    }
}
DeviceOrientationEvent = function (parm0) {
    // console.log('window.DeviceOrientationEvent传入参数:', parm0)
}
DeviceMotionEvent = function (parm0) {
    // console.log('window.DeviceMotionEvent传入参数:', parm0)
}
WebGLRenderingContext = function () {
}
Navigator = function () {
}
Screen = function () {
}
MouseEvent = function () {
}
document = {
    addEventListener: function (parm0, parm1) {
        // console.log('document.addEventListener传入参数：', parm0, parm1)
    },
    documentElement: watch({
        getAttribute: function (parm0) {
            // console.log('document.documentElement.getAttribute传入参数：', parm0)
            if (parm0 === 'selenium') {
                return null
            }
        }
    }, 'document.documentElement'),
    cookie: 'ets=1779248466627; a1=19e43790b7azlts8ep2a7k9ik0tn2m48uu80vuish50000402738; webId=0a43d266f04b0e107aefd40283b4e052; gid=yjd4qWjyiD7dyjd4qWj8D773W0u19MYdUJ0WYMxTj3T89828IJ64Yh88848JWqY8J8YW0dW4; abRequestId=0a43d266f04b0e107aefd40283b4e052; xsecappid=ugc; loadts=1779713273031; websectiga=2845367ec3848418062e761c09db7caf0e8b79d132ccdd1a4f8e64a11d0cac0d; sec_poison_id=f384b216-dea6-4451-82c9-02782433659a',
    getElementsByTagName: function (tagname) {
        // console.log('方法：getElementsByTagName', '参数:', tagname)
        if (tagname === '*') {
            return []
        }
    },
    all: [],
    body: watch({
        removeChild: function (parm0) {
            // console.log('document.body.removeChild传入参数：', parm0)
        }
    }, 'document.body'),
    documentMode: undefined,
    evaluate: function (parm0, parm1, parm2, parm3, parm4) {
        // console.log('document.evaluate传入参数：', parm0, parm1, parm2, parm3, parm4)
    },
    querySelectorAll: function (parm0) {
        // console.log('document.querySelectorAll传入参数：', parm0)
    },
    querySelector: function (parm0) {
        // console.log('document.querySelector传入参数：', parm0)
    },
    getElementById: function (parm0) {
        // console.log('document.getElementById传入参数：', parm0)
    },
}
navigator = {
    permissions: watch({
        query: function (parm0) {
            // console.log('navigator.permissions.query传入参数：', parm0)
        }
    }, 'navigator.permissions'),
    webdriver: false,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36',
    userAgentData: {
        "brands": [
            {
                "brand": "Chromium",
                "version": "148"
            },
            {
                "brand": "Google Chrome",
                "version": "148"
            },
            {
                "brand": "Not/A)Brand",
                "version": "99"
            }
        ],
        "mobile": false,
        "platform": "Windows"
    }
}
localStorage = {
    getItem: function (parm0) {
        // console.log('localStorage.getItem传入参数：', parm0)
    }
}
location = {
    host: 'creator.xiaohongshu.com'
}
screen = {}
history = {}

// window = watch(window, 'window')
// document = watch(document, 'document')
// navigator = watch(navigator, 'navigator')
// localStorage = watch(localStorage, 'localStorage')
// location = watch(location, 'location')
// screen = watch(screen, 'screen')
// history = watch(history, 'history')

;
;
;

setInterval = function () {
}
setTimeout = function () {
}

