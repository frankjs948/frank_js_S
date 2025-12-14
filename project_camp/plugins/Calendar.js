
// 抓取 JSON 資料 轉成物件
fetch("./db.json", { method: 'GET' }).then(function (res) {
    return res.json()   ;
}).then(function (data) {
    console.log(data);
});
