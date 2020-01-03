/*
 * @Author: Caven
 * @Date: 2020-01-02 14:26:35
 * @Last Modified by: Caven
 * @Last Modified time: 2020-01-03 12:15:49
 */
import Cesium from '../../namespace'

import Event from './Event'

class LayerEvent extends Event {
  constructor() {
    super()
    this._registerEvent()
  }

  _registerEvent() {
    for (let key in DE.LayerEventType) {
      let type = DE.LayerEventType[key]
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

export default LayerEvent
