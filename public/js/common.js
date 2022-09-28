/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && window.innerWidth <= 767) {
  //alert('Touch Screen');
} else {
}

(function () {
  'use strict'

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
    let todayMoment = moment().format('M/D/Y');

    function isWeekend(date = new Date()) {
      return date.getDay() === 6 || date.getDay() === 0;
    }

    let startDate = moment().startOf('year').format('M/D/Y');

    let firstDOY = new Date(startDate);
    let today = new Date(todayMoment);

    const listCD = ['Hoàng Huy', 'Đăng Quang', 'Tấn Phát', 'Trọng Ân']
    let index = 3

    while (firstDOY.getTime() < today.getTime()) {
      index++
      firstDOY.setDate(firstDOY.getDate() + 1)
    }
    /*    let dateString =
          firstDOY.getDate() +
          '/' +
          (firstDOY.getMonth() + 1) +
          '/' +
          firstDOY.getFullYear();*/

    // let CD = listCD[index % listCD.length];

    let CDArray = [];

    for (let i = 0; i <= 7; i++) {
      CDArray.push(listCD[(index + i) % listCD.length]);
    }
    // console.log(CDArray);


    /*    let shiftSection = document.getElementById('shiftCD');

        if(isWeekend(today)){
          shiftSection.innerHTML = 'Trực ngày ' + dateString + ', ' + 'Hoàng Tuấn';
          shiftSection.style.color = "#ff7e38";
        }else{
          shiftSection.innerHTML = 'Trực ngày ' + dateString + ', ' + CD;
        }*/

    let shiftSection = document.getElementById('shiftSection');
    for (let i = 0; i <= 7; i++) {
      let newElement = document.createElement('p');
      let date = moment().add(i, 'days').format('DD/MM/YYYY');

      let checkDate = new Date(moment().add(i, 'days').format('M/D/Y'));

      newElement.innerHTML = `Trực ngày ${date}, ${CDArray[i]}`;

      if (isWeekend(checkDate)) {
        newElement.innerHTML = `Trực ngày ${date}, Hoàng Tuấn`;
        newElement.style.color = "#cf0eeb";
      }

      shiftSection.append(newElement);
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
