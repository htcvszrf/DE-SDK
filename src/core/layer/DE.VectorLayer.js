/*
 * @Author: Caven
 * @Date: 2020-01-02 16:42:03
 * @Last Modified by: Caven
 * @Last Modified time: 2020-01-03 12:17:27
 */

import Cesium from '../../namespace'
import Layer from './Layer'

DE.VectorLayer = class extends Layer {
  constructor(id) {
    super(id)
    this._delegate = new Cesium.CustomDataSource(id)
    this._state = DE.LayerState.INITIALIZED
    this.type = DE.LayerType.VECTOR
  }

  _addCallback(viewer) {
    console.log(1)
    this._viewer = viewer
    if (this._state !== DE.LayerState.ADDED) {
      this._viewer.delegate.entities.add(this._delegate)
      this._state = DE.LayerState.ADDED
    }
  }

  _removeCallback() {
    if (this._viewer) {
      this._viewer.delegate.entities.remove(this._delegate)
      this._state = DE.LayerState.REMOVED
    }
  }

  clear() {
    this._delegate.removeAll()
    this._state = DE.LayerState.CLEARED
  }
}
