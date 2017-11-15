
/**
 * 
 * @param {time} time 
 */
export function transTime(time) {
    var transTime = time;
    // var transTime = '2017/10/17 19:33:22'; var transTime = "2016-10-16 10:27:00";
    var date1 = transTime.replace(/\-/g, "/");
    var d1 = new Date(date1);
    //var d1 = new Date(transTime);
    var d2 = new Date();
    var secondsCount = (parseInt(d2 - d1) / 1000); //两个时间相差的秒数

    if (secondsCount < 60) {
        return parseInt(secondsCount) + "秒前";
    } else if (secondsCount < 60 * 60) {
        return parseInt(secondsCount / 60) + "分前";
    } else if (secondsCount < 60 * 60 * 24) {
        return parseInt(secondsCount / (60 * 60)) + "小时前";
    } else if (secondsCount < 60 * 60 * 24 * 30) {
        return parseInt(secondsCount / (60 * 60 * 24)) + "天前";
    } else if (secondsCount < 60 * 60 * 24 * 30 * 12) {
        return parseInt(secondsCount / (60 * 60 * 24 * 30)) + "月前";
    } else {
        return parseInt(secondsCount / (60 * 60 * 24 * 30 * 12)) + "年前";
    }

}