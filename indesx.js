function myClock() {
  let nowData = new Date();
  let h = nowData.getHours();
  let m = nowData.getMinutes();
  let s = nowData.getSeconds();
  let type = "pm";

  if (h > 12) {
    h = h - 12;
    type = "am";
  }
  if (h == 0) {
    h = 12;
  }
  //add 00:00:00
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let clock = `${h} : ${m} : ${s} ${type}`;
  document.getElementById("myclock").textContent = clock;

  //Date
  var mS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let day = nowData.getDate();
  let days = nowData.getDay();
  let month = nowData.getMonth();
  let year = nowData.getFullYear();
  let date = `${day} ${mS[month]} ${year} ${daysInWeek[days]} `;
console.log(days);
  document.getElementById("Date").innerText = date;
}
//run every second
setInterval(myClock, 1000);
