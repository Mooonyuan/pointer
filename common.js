/**
 * 将带有转移的字符串转成字符实体
 * @param 目标时间
 * @returns {*}
 */
export function escape2Html(str) {
  var arrEntities = {
    lt: '<',
    gt: '>',
    nbsp: ' ',
    amp: '&',
    quot: '"'
  };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function(all, t) {
    return arrEntities[t];
  })
}
/**
 * 将时间转换成周期
 * @param time 时间(00:00:00)
 */
export function formatDate(time) {
  let s;
  let date = new Date(time).getTime(); // 转换时间
  let curDate = new Date().getTime(); // 当前时间
  let dur = curDate - date;
  // 一分钟前
  if (dur < 60) {
    s = '刚刚';
  } else if (dur < 60 * 60) {
    // 一小时内显示“xx分钟前”
    s = Math.ceil(dur / 60) + '分钟前'; // 向上取整
  } else if (dur < 60 * 60 * 24) {
    // 24小时内显示“xx小时前”
    s = Math.ceil(dur / (60 * 60)) + '小时前'; // 向上取整
  } else if (dur < 60 * 60 * 24 * 7) {
    // 一周内显示“XX天前”
    s = Math.ceil(dur / (60 * 60 * 24)) + '天前'; // 向上取整
  } else if (dur > 60 * 60 * 24 * 7) {
    // 其他显示动态产生具体日期，如2017-01-29；
    s = time;
  }
  return s;
}

/**
 * 防抖函数
 * @param fn 高频函数
 * @param wait 等待时间
 * @returns {Function}
 */
export function debounce(fn, wait) {
  let context = this,
    args = arguments,
    timer = null;
  return function() {
    context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, wait || 250);
  };
}
