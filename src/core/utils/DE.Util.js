/*
 * @Author: Caven
 * @Date: 2019-12-31 17:58:01
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-31 18:11:29
 */

const CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
  ''
)
DE.Util = class {
  static uuid(prefix = 'D') {
    let uuid = []
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'
    let r
    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = CHARS[i == 19 ? (r & 0x3) | 0x8 : r]
      }
    }
    return prefix + '-' + uuid.join('')
  }
  /**
   *
   * @param {*} str
   * Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
   */
  static trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '')
  }

  /**
   *
   * @param {*} str
   *  Trims and splits the string on whitespace and returns the array of parts.
   */
  static splitWords(str) {
    return this.trim(str).split(/\s+/)
  }
}
