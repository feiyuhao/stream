export default function countTime () {
  // 获取当前时间
  let date = new Date()
  let now = date.getTime()
  // 设置截止时间
  let endDate = new Date(this.curStartTime) // this.curStartTime需要倒计时的日期
  let end = endDate.getTime()
  // 时间差
  let leftTime = end - now
  // 定义变量 d,h,m,s保存倒计时的时间
  if (leftTime >= 0) {
    // 天
    this.day = Math.floor(leftTime / 1000 / 60 / 60 / 24)
    // 时
    let h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
    this.hour = h < 10 ? '0' + h : h
    // 分
    let m = Math.floor(leftTime / 1000 / 60 % 60)
    this.min = m < 10 ? '0' + m : m
    // 秒
    let s = Math.floor(leftTime / 1000 % 60)
    this.second = s < 10 ? '0' + s : s
  } else {
    this.day = 0
    this.hour = '00'
    this.min = '00'
    this.second = '00'
  }
  // 等于0的时候不调用
  if (Number(this.hour) === 0 && Number(this.day) === 0 && Number(this.min) === 0 && Number(this.second) === 0) {
    return
  } else {
  // 递归每秒调用countTime方法，显示动态时间效果,
    setTimeout(this.countTime, 1000)
  }
}