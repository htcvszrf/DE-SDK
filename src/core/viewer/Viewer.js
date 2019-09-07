/*
 * @Author: Caven
 * @Date: 2019-09-07 23:25:51
 * @Last Modified by: Caven
 * @Last Modified time: 2019-09-08 00:31:24
 */
import Cesium from '@/namespace'

DE.Viewer = class extends Cesium.Viewer {
  constructor(id, options) {
    super(id, {
      ...options
    })
  }

  addImageryLayer() {}

  addLayer() {}

  removeLayer() {}

  hideLayer() {}

  eachLayer()

  on() {}

  off(){}
}
