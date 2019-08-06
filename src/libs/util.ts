// @ts-ignore
import Cookies from 'js-cookie'
// @ts-ignore
import {version} from '../../package.json'

/**
 * @description
 * 设置app名称，所有cookie的操作都基于app名称和版本执行
 */
const appName = 'screenDemo';

let util = {
    cookies: {
        set: () => {
        },
        get: () => {
        },
        getAll: () => {
        },
        remove: () => {
        }
    },
    getWeekByNum: {},
    formatDateTime: {}
};

// @ts-ignore
// @ts-ignore
/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 */
util.cookies.set = function (name: any = 'default', value: any = '', setting: any = {}) {
    let cookieSetting = {
        expires: 1
    };
    Object.assign(cookieSetting, setting);
    Cookies.set(`${appName}-${version}-${name}`, value, cookieSetting)
};

/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 */
util.cookies.get = function (name: any = 'default') {
    return Cookies.get(`${appName}-${version}-${name}`)
};

/**
 * @description 拿到 cookie 全部的值
 */
util.cookies.getAll = function () {
    return Cookies.get()
};

// @ts-ignore
/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
util.cookies.remove = function (name: any = 'default') {
    return Cookies.remove(`${appName}-${version}-${name}`)
};

export default util
