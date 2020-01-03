/*
 * @Author: Caven
 * @Date: 2019-12-27 14:35:02
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-27 14:38:14
 */
DE.Position = class {
  constructor(lng, lat, alt, heading = 0, pitch = 0, roll = 0) {
    this._lng = lng
    this._lat = lat
    this._alt - alt
    this._heading = heading
    this._pitch = pitch
    this._roll = roll
  }
}
