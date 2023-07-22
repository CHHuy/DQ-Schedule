/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && window.innerWidth <= 767) {
  //alert('Touch Screen');
} else {
}

(function () {
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
    const listCD = [
      'Hoàng Huy, Đăng Quang',
      'A2',
      'Hoàng Tuấn, Thanh Hoàng',
      'A2',
      'Quảng Long, Thanh Bình',
      'A2'
    ]

    let todayMoment = moment().format('M/D/Y')
    let startDate = moment().startOf('year').format('M/D/Y')

    let firstDOY = new Date(startDate)
    let today = new Date(todayMoment)

    let index = 5
    while (firstDOY.getTime() < today.getTime()) {
      index++
      // tăng thêm FDOY + 1 để dừng loop khi nó tăng === ngày hôm nay;
      firstDOY.setDate(firstDOY.getDate() + 1)
    }

    let CDArray = []
    // cập nhật thứ tự element Array CĐ hằng ngày
    for (let i = 0; i <= listCD.length; i++) {
      CDArray.push(listCD[(index + i) % listCD.length])
    }

    let shiftSection = document.getElementById('shiftSection')
    for (let i = 0; i <= 4; i++) {
        let newElement = document.createElement('p')
        newElement.style.width = "100%"
        let date = moment().add(i, 'days').format('DD/MM/YYYY')
        newElement.innerHTML = "<br>" + `Trực ngày ${date}`+ "<br>" + ` ${CDArray[i]}`;
        shiftSection.append(newElement)
    }
  }

  // function shift() {
  //   let todayMoment = moment().format('M/D/Y')
  //   let startDate = moment().startOf('year').format('M/D/Y')

  //   let firstDOY = new Date(startDate)
  //   let today = new Date(todayMoment)

  //   const listCD = [
  //     'Hoàng Huy, Đăng Quang',
  //     'Hoàng Tuấn, Thanh Hoàng',
  //     'Quang Long, Thanh Bình'
  //   ]
  //   let index = 3

  //   while (firstDOY.getTime() < today.getTime()) {
  //     index++
  //     firstDOY.setDate(firstDOY.getDate() + 1)
  //   }

  //   let CDArray = []

  //   for (let i = 0; i <= 7; i++) {
  //     CDArray.push(listCD[(index + i) % listCD.length])
  //   }

  //   let shiftSection = document.getElementById('shiftSection')
  //   for (let i = 0; i <= 7; i++) {
  //     let newElement = document.createElement('p')
  //     let date = moment().add(i, 'days').format('DD/MM/YYYY')
  //     newElement.innerHTML = `Trực ngày ${date}, ${CDArray[i]}`
  //     shiftSection.append(newElement)
  //   }
  // }

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
