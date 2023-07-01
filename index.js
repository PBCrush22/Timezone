document.addEventListener("DOMContentLoaded", function() {
    dayjs.extend(dayjs_plugin_utc);
    dayjs.extend(dayjs_plugin_timezone);
    
    // Get the current timezone using Day.js
    const currentTimezone = dayjs.tz.guess();
    const currentTime = dayjs().format('h:mm:ss A')
    const currentDate = dayjs().format('dddd, MMMM D YYYY')
  
    // Update the HTML element with the current timezone
    document.getElementById('timezone').textContent = currentTimezone;
    document.getElementById('time').textContent = currentTime;
    document.getElementById('date').textContent = currentDate;
  });
  