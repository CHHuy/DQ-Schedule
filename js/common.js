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

    /*  function shift() {
      let today = new Date()
      let start = new Date('01/01/2022')
      let end = new Date('12/31/2022')
      let id = 0
      const listCD = ['HH', 'PH', 'Q', 'P', 'T']

      while (start <= end) {
        console.log(start)
        //name
        let name = listCD[id]

        if ((today = start)) {
          document.getElementById('shiftCD').innerHTML = name
        }

        console.log(name)

        id++

        //reset id
        if (id == listCD.length) {
          id = 0
        }

        // cộng thêm ngày
        let newDate = start.setDate(start.getDate() + 1)
        // set ngày mới vào start
        start = new Date(newDate)
      }
    } */

    function shift() {
        today = new Date()

        function formatString(str) {
            return str < 10 ? '0' + str : str
        }

        let startDate = new Date(new Date().getFullYear(), 0, 1)

        const listCD = ['Hoàng Huy', 'Đăng Quang', 'Tấn Phát']
        var index = 0
        var todayToCompare = new Date(
            today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear()
        )

        while (startDate.getTime() < todayToCompare.getTime()) {
            index++
            startDate.setDate(startDate.getDate() + 1)
        }
        var dateString =
            formatString(startDate.getDate()) +
            '/' +
            formatString(startDate.getMonth() + 1) +
            '/' +
            startDate.getFullYear()
        var CD = listCD[index % listCD.length]
        console.log(dateString + ' Đồng Chí ' + CD)
        document.getElementById('shiftCD').innerHTML =
            'Trực ngày ' + dateString + ', ' + CD
    }

    /*  clock */
    const hours = document.querySelector('.hours')
    const minutes = document.querySelector('.minutes')
    const seconds = document.querySelector('.seconds')
    clock = () => {
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

    rotation = (target, val) => {
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
