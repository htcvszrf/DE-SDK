/*
 * @Author: Caven
 * @Date: 2019-12-31 17:32:01
 * @Last Modified by: Caven
 * @Last Modified time: 2020-01-03 11:05:39
 */
import Cesium from '../../namespace'

DE.ContextMenu = class {
  constructor() {
    this._viewer = undefined
    this._position = undefined
    this._wapper = DE.DomUtil.create('div', 'de-context-menu')
  }

  _updatePosition(windowCoord) {}

  _handleRightclick(movement) {}

  _handleclick(movement) {
    this.hide()
  }

  install(viewer) {
    this._viewer = viewer
    this._viewer.deContainer.appendChild(this._wapper)
  }

  setPosition(position) {
    this._position = position
    if (this._viewer) {
      let self = this
      let scene = this._viewer.scene
      scene.preRender.addEventListener(() => {
        let windowCoord = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
          scene,
          self._position
        )
        this._updatePosition(windowCoord)
      })
    }
  }

  show(movement) {}

  hide() {}

  setContent(content) {}
}
