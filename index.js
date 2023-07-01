document.addEventListener("DOMContentLoaded", function() {
    // Enable Day.js plugins
    dayjs.extend(dayjs_plugin_utc);
    dayjs.extend(dayjs_plugin_timezone);

    // Store the selected timezone
    var selectedTimezone = null;

    // Function to update the time and date
    function updateTimeAndDate() {
        // Get the current timezone using Day.js
        var currentTimezone = selectedTimezone || dayjs.tz.guess();
        var currentTime = dayjs().tz(currentTimezone).format('h:mm:ss A');
        var currentDate = dayjs().tz(currentTimezone).format('dddd, MMMM D YYYY');

        // Update the HTML elements with the current timezone, time, and date
        document.getElementById('timezone').textContent = currentTimezone;
        document.getElementById('time').textContent = currentTime;
        document.getElementById('date').textContent = currentDate;
    }

    // Initial update
    updateTimeAndDate();

    // Update the time and date every second (1000 milliseconds)
    setInterval(updateTimeAndDate, 1000);

    MicroModal.init();

    document.getElementById('timezone').addEventListener('click', function() {
        MicroModal.show('modal-1');
    });

    // Get the necessary elements
    var timezoneElement = document.getElementById("timezone");
    var timeElement = document.getElementById("time");
    var dateElement = document.getElementById("date");
    var selectElement = document.getElementById("timezoneSelect");

    // Update timezone, time, and date based on the selected option
    selectElement.addEventListener("change", function() {
        var selectedOption = selectElement.value;
        selectedTimezone = selectedOption;

        timezoneElement.textContent = selectedOption;
        timeElement.textContent = dayjs().tz(selectedOption).format("HH:mm:ss");
        dateElement.textContent = dayjs().tz(selectedOption).format("dddd, MMMM D, YYYY");

        // Close the modal
        MicroModal.close("modal-1");
    });  
});
