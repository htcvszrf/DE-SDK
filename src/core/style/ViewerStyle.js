/*
 * @Author: Caven
 * @Date: 2019-12-30 09:24:37
 * @Last Modified by: Caven
 * @Last Modified time: 2020-01-03 10:27:33
 */

import Cesium from '../../namespace'

class ViewerStyle {
  constructor(viewer) {
    this._viewer = viewer
    this._init()
  }

  _init() {
    this._viewer.delegate._cesiumWidget._creditContainer.style.display = 'none'
  }
}

export default ViewerStyle
