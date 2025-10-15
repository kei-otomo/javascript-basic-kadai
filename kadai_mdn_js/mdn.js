const timeNow = new Date()

let year = timeNow.getFullYear()
let month = timeNow.getMonth() + 1
let date = timeNow.getDate()

console.log(year + "年" + month + "月" + date + "日")
