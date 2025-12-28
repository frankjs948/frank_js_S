
// 抓取 JSON 資料 轉成物件
// fetch("./db.json", { method: 'GET' }).then(function (res) {
//     return res.json()   ;
// }).then(function (data) {
//     console.log(data);
// });
// ----------------------------------------------------------------

// 抓取 JSON 資料 轉成物件 - 使用 async await
// async function fetchData() {
//     const res = await fetch("./db.json", { method: 'GET' });
//     const data = await res.json();
//     console.log(data);
// }
// fetchData();
// ----------------------------------------------------------------

//全域變數宣告區 任何的初始變數與套件宣告都放在此
let
    nationalHolidays = [], //國定假日資料
    pallet = {}, //價格方案資料
    booked = []; //已預訂日期資料



//初次執行項目 任何第一次執行的工作



//服務區 所有的方法一起執行
function calendarService() {
    const today = dayjs();
    console.log("今天日期:", today.format('YYYY-MM-DD'));
}


