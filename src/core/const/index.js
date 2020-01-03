/*
 * @Author: Caven
 * @Date: 2020-01-03 10:09:19
 * @Last Modified by: Caven
 * @Last Modified time: 2020-01-03 12:23:09
 */
import Cesium from '../../namespace'

const MouseEventType = {
  CLICK: Cesium.ScreenSpaceEventType.LEFT_CLICK,
  RIGHT_CLICK: Cesium.ScreenSpaceEventType.RIGHT_CLICK,
  DB_CLICK: Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK,
  MOUSE_MOVE: Cesium.ScreenSpaceEventType.MOUSE_MOVE,
  WHEEL: Cesium.ScreenSpaceEventType.WHEEL
}

const ViewerEventType = {
  ADD_LAYER: 'addLayer',
  REMOVE_LAYER: 'removeLayer',
  ADD_IMAGERY_LAYER: 'addImageryLayer',
  CHANGE_IMAGERY_LAYER: 'changeImageryLayer'
}

const LayerState = {
  INITIALIZED: 'initialized',
  ADDED: 'added',
  REMOVED: 'removed',
  CLEARED: 'claered'
}

const LayerType = {
  VECTOR: 'vector',
  TILESET: 'tileset',
  KML: 'kml',
  CZML: 'czml',
  GEOJSON: 'geojson'
}

const LayerEventType = {
  ADD: 'add',
  CLEAR: 'clear',
  REMOVE: 'remove'
}

const OverlayState = {
  INITIALIZED: 'initialized',
  ADDED: 'added',
  REMOVED: 'removed'
}

const OverlayEventType = {
  ADD: 'add',
  REMOVE: 'remove'
}

DE.MouseEventType = MouseEventType

DE.ViewerEventType = ViewerEventType

DE.LayerType = LayerType

DE.LayerState = LayerState

DE.LayerEventType = LayerEventType

DE.OverlayState = OverlayState

DE.OverlayEventType = OverlayEventType
