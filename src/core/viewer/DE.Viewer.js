/*
 * @Author: Caven
 * @Date: 2019-12-27 17:13:24
 * @Last Modified by: Caven
 * @Last Modified time: 2020-01-03 12:29:18
 */

import Cesium from '../../namespace'
import ViewerStyle from '../style/ViewerStyle'
import MouseEvent from '../event/MouseEvent'
import ViewerEvent from '../event/ViewerEvent'

const DEF_OPTS = {
  animation: false, //是否创建动画小器件，左下角仪表
  baseLayerPicker: false, //是否显示图层选择器
  fullscreenButton: false, //是否显示全屏按钮
  geocoder: false, //是否显示geocoder小器件，右上角查询按钮
  homeButton: false, //是否显示Home按钮
  infoBox: false, //是否显示信息框
  sceneModePicker: false, //是否显示3D/2D选择器
  selectionIndicator: false, //是否显示选取指示器组件
  timeline: false, //是否显示时间轴
  navigationHelpButton: false //是否显示右上角的帮助按钮
}

DE.Viewer = class {
  constructor(id, options = {}) {
    if (!id) {
      throw Error('the id empty')
    }
    this._delegate = new Cesium.Viewer(id, {
      ...options,
      ...DEF_OPTS
    }) // 初始化 viewer
    new MouseEvent(this) // 注册全局鼠标事件
    this._style = new ViewerStyle(this) // 设置viewer样式
    this._viewerEvent = new ViewerEvent() //注册viewer事件
    this._deContainer = DE.DomUtil.create(
      'div',
      'de-container',
      document.getElementById(id)
    ) //添加自定义容器
    this._layerCache = {}
    this.on(
      DE.ViewerEventType.ADD_IMAGERY_LAYER,
      this._addImageryLayerCallback,
      this
    )
    this.on(
      DE.ViewerEventType.CHANGE_IMAGERY_LAYER,
      this._changeImageryLayerCallback,
      this
    )
    this.on(DE.ViewerEventType.ADD_LAYER, this._addLayerCallback, this) //添加图层事件监听
    this.on(DE.ViewerEventType.REMOVE_LAYER, this._removeLayerCallback, this) //移除图层事件监听
  }

  get delegate() {
    return this._delegate
  }

  getDeContainer() {
    return this._deContainer
  }

  get scene() {
    return this._delegate.scene
  }

  get canvas() {
    return this._delegate.scene.canvas
  }

  get viewerEvent() {
    return this._viewerEvent
  }

  _addImageryLayerCallback(imagerLayer) {}

  _changeImageryLayerCallback(index) {}

  _addLayerCallback(layer) {
    if (layer && layer.layerEvent) {
      !this._layerCache[layer.type] && (this._layerCache[layer.type] = {})
      layer.layerEvent.fire(DE.LayerEventType.ADD, this)
      this._layerCache[layer.type][layer.id] = layer
    }
  }

  _removeLayerCallback(layer) {
    if (layer && layer.layerEvent) {
      layer.layerEvent.fire(DE.LayerEventType.REMOVE, this)
      if (
        this._layerCache[layer.type] &&
        this._layerCache[layer.type][layer.id]
      ) {
        delete this._layerCache[layer.type][layer.id]
      }
    }
  }

  setStyle(style = {}) {}

  addLayer(layer) {
    this._viewerEvent.fire(DE.ViewerEventType.ADD_LAYER, layer)
    return this
  }

  removeLayer(layer) {
    this._viewerEvent.fire(DE.ViewerEventType.ADD_LAYER, layer)
    return this
  }

  getLayer(id) {
    let layer = undefined
    for (let type in this._layerCache) {
      let cache = this._layerCache[type]
      for (let layerId in cache) {
        if (layerId === id) {
          layer = cache[layerId]
          break
        }
      }
      if (layer) {
        break
      }
    }
    return layer
  }

  on(type, callback, context) {
    this._viewerEvent.on(type, callback, context)
    return this
  }

  off(type, callback, context) {
    this._viewerEvent.off(type, callback, context)
    return this
  }

  use(plugin) {
    if (plugin && plugin.install) {
      plugin.install(this)
    }
    return this
  }
}
