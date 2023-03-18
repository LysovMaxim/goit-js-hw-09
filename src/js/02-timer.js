import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datetimeEl = document.querySelector('#datetime-picker');
console.log(datetimeEl);
const startEl = document.querySelector('button[data-start]');
console.log(startEl);

flatpickr(
  datetimeEl,
   options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] <= new Date()) {
        window.alert('Please choose a date in the future');
        startEl.disabled = true;
          selectDate = null;
      } else {
        startEl.disabled = false;
        selectDate = selectedDates[0];
        console.log(selectDate);
      }
    }
  })


