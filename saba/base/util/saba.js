
/**
 * 判断是不是微信浏览器
 */
export function isWeiXin() {
    let search = getBrowser().match(/MicroMessenger/i);
    if (!search) {
        return false;
    }

    if ( search[0] === 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

/**
 * 获取浏览器标识符
 */
export function getBrowser() {
    return window.navigator.userAgent.toLowerCase();
}

export function log(msg, msg2, msg3) {
    if (msg3) {
        console.log("%c" + logTime() + " " + msg, "color:green;font-weight:600", msg2, msg3);
        return
    } else if (msg2) {
        console.log("%c" + logTime() + " " + msg, "color:green;font-weight:600", msg2);
        return
    } else {
        console.log("%c" + logTime(), "color:green;font-weight:600", msg);
    }
};

export function logTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    m = addZero(m);
    s = addZero(s);
    ms = ms < 100 ? '0' + ms : ms;

    function addZero(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i
    }

    return h + ":" + m + ":" + s + ":" + ms;
};

export function slog(msg, msg2, msg3) {
    if (msg3) {
        console.log("%c" + logTime() + " " + JSON.stringify(msg), "color:blue;font-weight:600",
            JSON.stringify(msg2), JSON.stringify(msg3));
        return
    } else if (msg2) {
        console.log("%c" + logTime() + " " + JSON.stringify(msg), "color:blue;font-weight:600", JSON.stringify(msg2));
        return
    } else {
        console.log("%c" + logTime(), "color:blue;font-weight:600",
            JSON.stringify(msg));
    }
};