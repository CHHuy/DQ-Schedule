/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && window.innerWidth <= 767) {
  //alert('Touch Screen');
} else {
}

;(function () {
  ;('use strict')

  /* ==================================================
  # Get scroll bar width
  ===================================================*/
  function getBarwidth() {
    // Create the measurement node
    let scrollDiv = document.createElement('div')
    scrollDiv.className = 'scrollbar-measure'
    document.body.appendChild(scrollDiv)

    // Get the scrollbar width
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    //console.warn(scrollbarWidth); // Mac:  15

    // Delete the DIV
    document.body.removeChild(scrollDiv)
    // console.log(scrollbarWidth);
    return scrollbarWidth
  }


  function shift() {
    let today = new Date()

    function formatString(str) {
      return str < 10 ? '0' + str : str
    }

    // ngày 1/1/2022 00:00:00;
    let startDate = new Date(new Date().getFullYear(), 0, 1)
    const listCD = ['Hoàng Huy', 'Đăng Quang', 'Tấn Phát', 'Trọng Ân']
    let index = 3

    // ngày hôm nay nè
    let todayToCompare = new Date(
      today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear()
    )

    // so sánh thời gian nếu ngày hôm nay lớn hơn ngày đầu của năm thì array dân quân +1 và set startDate là ngày mai (đk luôn đúng)
    while (startDate.getTime() < todayToCompare.getTime()) {
      index++
      startDate.setDate(startDate.getDate() + 1)
    }

    function isWeekend(date = new Date()) {
      return date.getDay() === 6 || date.getDay() === 0;
    }

    const shiftSection = document.getElementById('shiftSection');

    for (let i = 0; i < 7; i++) {
      let div = document.createElement("p");
      div.className = "shiftCD";

      let date = new Date(`${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate() + i}`);

      let CD = listCD[i % listCD.length]

      if (isWeekend(date)) {
        div.innerHTML = (date.toLocaleDateString() + ' - ' + ' Hoàng Tuấn')
        div.style.color = "#ff7e38";
      } else {
        div.innerHTML = (date.toLocaleDateString() + ' - ' + CD)
      }
      shiftSection.appendChild(div);
    }
  }


  /*  clock */
  const hours = document.querySelector('.hours')
  const minutes = document.querySelector('.minutes')
  const seconds = document.querySelector('.seconds')
  let clock = () => {
    let today = new Date()
    let h = (today.getHours() % 12) + today.getMinutes() / 59 // 22 % 12 = 10pm
    let m = today.getMinutes() // 0 - 59
    let s = today.getSeconds() // 0 - 59

    h *= 30 // 12 * 30 = 360deg
    m *= 6
    s *= 6 // 60 * 6 = 360deg

    rotation(hours, h)
    rotation(minutes, m)
    rotation(seconds, s)

    // call every second
    setTimeout(clock, 500)
  }

  let rotation = (target, val) => {
    target.style.transform = `rotate(${val}deg)`
  }

  function init() {
    getBarwidth()
    shift()
  }

  init()
  window.onload = function () {
    clock()
  }
})()
