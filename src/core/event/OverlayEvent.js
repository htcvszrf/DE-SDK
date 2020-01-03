/*
 * @Author: Caven
 * @Date: 2020-01-02 14:26:35
 * @Last Modified by: Caven
 * @Last Modified time: 2020-01-03 12:17:18
 */
import Cesium from '../../namespace'

import Event from './Event'

class OverlayEvent extends Event {
  constructor() {
    super()
    this._registerEvent()
  }

  _registerEvent() {
    // mouse event
    for (let key in DE.MouseEventType) {
      let type = DE.MouseEventType[key]
      this._eventCache[type] = new Cesium.Event()
    }
    //
    for (let key in DE.OverlayEventType) {
      let type = DE.OverlayEventType[key]
      this._eventCache[type] = new Cesium.Event()
    }
  }

  /**
   *
   * @param {} type
   */
  getEvent(type) {
    return this._eventCache[type] || undefined
  }
}

export default OverlayEvent
