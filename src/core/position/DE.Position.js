/*
 * @Author: Caven
 * @Date: 2019-09-08 00:21:34
 * @Last Modified by: Caven
 * @Last Modified time: 2019-09-08 00:27:19
 */
import Cesium from '@/namespace'

DE.Position = class {
  constructor(lng, lat, height, heading = 0, pitch = 0, roll = 0) {
    this._lng = lng
    this._lat = lat
    this._height = height
    this._heading = Cesium.Math.toRadians(heading)
    this._pitch = Cesium.Math.toRadians(pitch)
    this._roll = Cesium.Math.toRadians(roll)
  }

  set lng(lng) {
    this._lng = lng
  }

  get lng() {
    return this._lng
  }

  set lat(lat) {
    this._lat = lat
  }

  get lat() {
    return this._lat
  }

  set height(height) {
    this._height = height
  }

  get height() {
    return this._height
  }

  set heading(heading) {
    this._heading = Cesium.Math.toRadians(heading)
  }

  get heading() {
    return this._heading
  }

  set pitch(pitch) {
    this._pitch = Cesium.Math.toRadians(pitch)
  }

  get pitch() {
    return this._pitch
  }

  set roll(pitch) {
    this._roll = Cesium.Math.toRadians(roll)
  }

  get roll() {
    return this._roll
  }
}
