/*
 * @Author: Caven
 * @Date: 2020-01-03 09:38:21
 * @Last Modified by: Caven
 * @Last Modified time: 2020-01-03 12:08:56
 */
import LayerEvent from '../event/LayerEvent'

class Layer {
  constructor(id) {
    this._id = id || DE.Util.uuid()
    this._layerEvent = new LayerEvent()
    this._layerEvent.on(DE.LayerEventType.ADD, this._addCallback, this)
    this._layerEvent.on(DE.LayerEventType.REMOVE, this._removeCallback, this)
    this._delegate = undefined
    this._viewer = undefined
    this.type = undefined
    this._state = undefined
    this._show = true
    this._cache = {}
    this._attr = {}
  }

  set show(show) {
    this._delegate && (this._delegate.show = show)
  }

  get show() {
    return this._show
  }

  get layerEvent() {
    return this._layerEvent
  }

  set attr(attr) {
    this._attr = attr
  }

  get attr() {
    return this._attr
  }

  get id() {
    return this._id
  }

  _addCallback(veiwer) {}

  _removeCallback() {}

  addOverlay(overlay) {}

  removeOverlay(overlay) {}

  eachOverlay(callback) {}

  clear() {}

  remove() {}
}

export default Layer
