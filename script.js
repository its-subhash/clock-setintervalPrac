      let hour = document.getElementById("hour");
      let minute = document.getElementById("minutes");
      let seconds = document.getElementById("seconds");

      const now = new Date();
      let hourval = now.getHours();
      let minval = now.getMinutes();
      let secval = now.getSeconds();

      function renderTime() {
        if (hourval <= 9) {
          hour.innerHTML = `<p>0${hourval}</p>`;
        } else {
          hour.innerHTML = `<p>${hourval}</p>`;
        }

        if (minval <= 9) {
          minute.innerHTML = `<p>0${minval}</p>`;
        } else {
          minute.innerHTML = `<p>${minval}</p>`;
        }

        if (secval <= 9) {
          seconds.innerHTML = `<p>0${secval}</p>`;
        } else {
          seconds.innerHTML = `<p>${secval}</p>`;
        }
      }

      /*
      // for indipendent time

      //for second
      setInterval(function () {
        secval++;
        if (secval >= 60) {
          secval = 0;
        }
        renderTime();
      }, 1000);

      //for minutes
      setInterval(function () {
        minval++;
        if (minval >= 60) {
          minval = 0;
        }
        renderTime();
      }, 60000);

      //for hour
      setInterval(function () {
        hourval++;
        if (hourval >= 24) {
          hourval = 0;
        }
        renderTime();
      }, 600000);
      */

      //for getting current time
      setInterval(function () {
        secval++;
        if (secval >= 60) {
          minval++;
          secval = 0;
        }
        if (minval >= 60) {
          hourval++;
          minval = 0;
        }
        if (hourval >= 24) {
          hourval = 0;
        }
        renderTime();
      }, 1000);