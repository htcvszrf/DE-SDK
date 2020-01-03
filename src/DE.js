/*
 * @Author: Caven
 * @Date: 2019-09-07 23:13:56
 * @Last Modified by: Caven
 * @Last Modified time: 2019-11-20 13:05:55
 */
;(function() {
  let DE = {
    VERSION: '1.0.0',
    config: {},
    Http: undefined
  }

  window.DE = DE

  function loadCesium() {
    return new Promise((resolve, reject) => {
      let Cesium = require('cesium/Cesium')
      window.Cesium = Cesium
      resolve()
    })
  }

  DE.ready = function(callback) {
    DE.init(callback)
  }

  DE.init = function(callback) {
    try {
      loadCesium().then(() => {
        require('./DE.Loader')
        delete window.Cesium
        callback && callback()
      })
    } catch (error) {
      delete window.Cesium
    }
  }
})()

export default DE
