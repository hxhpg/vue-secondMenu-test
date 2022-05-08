export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return
  let i = -1
  let len = arr.length
  while (++i < len) {
    let item = arr[i]
    fn(item, i, arr)
  }
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arr1, arr2) => {
  let len = Math.min(arr1.length, arr2.length)
  let i = -1
  let res = []
  while (++i < len) {
    const item = arr2[i]
    if (arr1.indexOf(item) > -1) res.push(item)
  }
  return res
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]))
}

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1)
}

/**
 * @param {String|Number} value 要验证的字符串或数值
 * @param {*} validList 用来验证的列表
 */
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

/**
 * @param {Number} timeStamp 判断时间戳格式是否是毫秒
 * @returns {Boolean}
 */
const isMillisecond = timeStamp => {
  const timeStr = String(timeStamp)
  return timeStr.length > 10
}

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} currentTime 当前时间时间戳
 * @returns {Boolean} 传入的时间戳是否早于当前时间戳
 */
const isEarly = (timeStamp, currentTime) => {
  return timeStamp < currentTime
}

/**
 * @param {Number} num 数值
 * @returns {String} 处理后的字符串
 * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
 */
const getHandledValue = num => {
  return num < 10 ? '0' + num : num
}

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} startType 要返回的时间字符串的格式类型，传入'year'则返回年开头的完整时间
 */
const getDate = (timeStamp, startType) => {
  const d = new Date(timeStamp * 1000)
  const year = d.getFullYear()
  const month = getHandledValue(d.getMonth() + 1)
  const date = getHandledValue(d.getDate())
  const hours = getHandledValue(d.getHours())
  const minutes = getHandledValue(d.getMinutes())
  const second = getHandledValue(d.getSeconds())
  let resStr = ''
  if (startType === 'year') resStr = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + second
  else resStr = month + '-' + date + ' ' + hours + ':' + minutes
  return resStr
}

/**
 * @param {String|Number} timeStamp 时间戳
 * @returns {String} 相对时间字符串
 */
export const getRelativeTime = timeStamp => {
  // 判断当前传入的时间戳是秒格式还是毫秒
  const IS_MILLISECOND = isMillisecond(timeStamp)
  // 如果是毫秒格式则转为秒格式
  if (IS_MILLISECOND) Math.floor(timeStamp /= 1000)
  // 传入的时间戳可以是数值或字符串类型，这里统一转为数值类型
  timeStamp = Number(timeStamp)
  // 获取当前时间时间戳
  const currentTime = Math.floor(Date.parse(new Date()) / 1000)
  // 判断传入时间戳是否早于当前时间戳
  const IS_EARLY = isEarly(timeStamp, currentTime)
  // 获取两个时间戳差值
  let diff = currentTime - timeStamp
  // 如果IS_EARLY为false则差值取反
  if (!IS_EARLY) diff = -diff
  let resStr = ''
  const dirStr = IS_EARLY ? '前' : '后'
  // 少于等于59秒
  if (diff <= 59) resStr = diff + '秒' + dirStr
  // 多于59秒，少于等于59分钟59秒
  else if (diff > 59 && diff <= 3599) resStr = Math.floor(diff / 60) + '分钟' + dirStr
  // 多于59分钟59秒，少于等于23小时59分钟59秒
  else if (diff > 3599 && diff <= 86399) resStr = Math.floor(diff / 3600) + '小时' + dirStr
  // 多于23小时59分钟59秒，少于等于29天59分钟59秒
  else if (diff > 86399 && diff <= 2623859) resStr = Math.floor(diff / 86400) + '天' + dirStr
  // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前
  else if (diff > 2623859 && diff <= 31567859 && IS_EARLY) resStr = getDate(timeStamp)
  else resStr = getDate(timeStamp, 'year')
  return resStr
}

/**
 * @returns {String} 当前浏览器名称
 */
export const getExplorer = () => {
  const ua = window.navigator.userAgent
  const isExplorer = (exp) => {
    return ua.indexOf(exp) > -1
  }
  if (isExplorer('MSIE')) return 'IE'
  else if (isExplorer('Firefox')) return 'Firefox'
  else if (isExplorer('Chrome')) return 'Chrome'
  else if (isExplorer('Opera')) return 'Opera'
  else if (isExplorer('Safari')) return 'Safari'
}

/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
 * 如果没有传入key这个参数，则判断obj对象是否有键值对
 */
export const hasKey = (obj, key) => {
  if (key) return key in obj
  else {
    let keysArr = Object.keys(obj)
    return keysArr.length
  }
}

/**
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
export const objEqual = (obj1, obj2) => {
  const keysArr1 = Object.keys(obj1)
  const keysArr2 = Object.keys(obj2)
  if (keysArr1.length !== keysArr2.length) return false
  else if (keysArr1.length === 0 && keysArr2.length === 0) return true
  /* eslint-disable-next-line */
  else return !keysArr1.some(key => obj1[key] != obj2[key])
}

/**
 * @param {*} date1 开始日期
 * @param {*} date2 结束日期
 * @description 计算两个日期相差天数
 */
export const getDaysBetween = (date1, date2) => {
  var startDate = Date.parse(date1)
  var endDate = Date.parse(date2)
  var days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000)
  return days
}

/**
 * @param {*} date1 日期1
 * @param {*} date2 日期2
 * @description 判断日期是否同一周内
 */
export const isSameWeek = (date1, date2) => {
  var oneDayTime = 1000 * 60 * 60 * 24
  var oldCount = parseInt(date1.getTime() / oneDayTime)
  var nowOther = parseInt(date2.getTime() / oneDayTime)
  return parseInt((oldCount + 4) / 7) === parseInt((nowOther + 4) / 7)
}

// 秒数(ss) 转 d天h小时m分钟s秒 的时间格式表示
export function formatSeconds(value) {
  var secondTime = parseInt(value) // 秒
  var minuteTime = 0 // 分
  var hourTime = 0 // 小时
  var dayTime = 0 // 天
  var result = ''
  if (value < 60) {
    result = secondTime + ' 秒 '
  } else {
    if (secondTime >= 60) { // 如果秒数大于60，将秒数转换成整数
      // 获取分钟，除以60取整数，得到整数分钟
      minuteTime = parseInt(secondTime / 60)
      // 获取秒数，秒数取佘，得到整数秒数
      secondTime = parseInt(secondTime % 60)
      // 如果分钟大于60，将分钟转换成小时
      if (minuteTime >= 60) {
        // 获取小时，获取分钟除以60，得到整数小时
        hourTime = parseInt(minuteTime / 60)
        // 获取小时后取佘的分，获取分钟除以60取佘的分
        minuteTime = parseInt(minuteTime % 60)
        if (hourTime >= 24) {
          // 获取天数， 获取小时除以24，得到整数天
          dayTime = parseInt(hourTime / 24)
          // 获取小时后取余小时，获取分钟除以24取余的分；
          hourTime = parseInt(hourTime % 24)
        }
      }
    }
    if (secondTime > 0) {
      // secondTime = parseInt(secondTime) >= 10 ? secondTime : '0' + secondTime  // 用于个位数时前面补0
      result = '' + secondTime + ' 秒 '
    }
    if (minuteTime > 0) {
      // minuteTime = parseInt(minuteTime) >= 10 ? minuteTime : '0' + minuteTime  // 用于个位数时前面补0
      result = '' + minuteTime + ' 分钟 ' + result
    }
    if (hourTime > 0) {
      result = '' + parseInt(hourTime) + ' 小时 ' + result
    }
    if (dayTime > 0) {
      result = '' + parseInt(dayTime) + ' 天 ' + result
    }
  }
  return result
}

// 秒数(ss)转 hh:mm:ss 时间格式
export function secToTime(data) {
  var time = Number(data)
  var h = Math.floor(time / 3600)
  var m = Math.floor((time % 3600) / 60)
  var s = parseInt(time % 3600) % 60
  var hh = h < 10 ? "0" + h : h
  var mm = m < 10 ? "0" + m : m
  var ss = s < 10 ? "0" + s : s
  return hh + ":" + mm + ":" + ss
}

// hh:mm:ss 时间格式转秒数(ss)
export function timeToSec(time) {
  if (time !== null) {
    var s = ""
    var hour = time.split(":")[0]
    var min = time.split(":")[1]
    var sec = time.split(":")[2]
    s = Number(hour * 3600) + Number(min * 60) + Number(sec)
    return s
  }
}

// 获取 URL 上的参数
export function getUrlParams(name) {
  if (name == null || name === 'undefined') { 
    return null 
  }
  var searchStr = decodeURI(window.location.href).replace('?', '&')
  var infoIndex = searchStr.indexOf(name + '=')
  if (infoIndex === -1) { return null }
  var searchInfo = searchStr.substring(infoIndex + name.length + 1)
  var tagIndex = searchInfo.indexOf('&')
  if (tagIndex !== -1) { searchInfo = searchInfo.substring(0, tagIndex) }
  return searchInfo
}