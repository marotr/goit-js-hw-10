import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
const button = document.querySelector('button');
const daysElement =document.querySelector('[data-days]');
const hoursElement =document.querySelector('[data-hours]');
const minutesElement =document.querySelector('[data-minutes]');
const secondsElement =document.querySelector('[data-seconds]');


button.addEventListener('click', () => {
    const currentDate = Date.now();
    const selectedDate = userSelectedDate.getTime();
    const ms = selectedDate - currentDate;
    startCountdown(ms);
});

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor((ms % hour) / minute);
    const seconds = Math.floor((ms % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    const { days, hours, minutes, seconds } = value;
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

function startCountdown(ms) {
    const countDown = setInterval(() => {
        const { days, hours, minutes, seconds } = convertMs(ms);
        addLeadingZero({ days, hours, minutes, seconds });
        ms -= 1000;
        if (ms < 0) {
            clearInterval(countDown);
        }
    }, 1000);
}

function checkDate(selectedDate) {
    if (!selectedDate) {
        return;
    }

   
    if (selectedDate.getTime() < Date.now) {
        iziToast.show({
            message: "Please choose a date in the future",
            messageColor: ' #fff',
            backgroundColor: '#ef4040',
            position: 'topCenter',
            messageSize: '16px',
            messageLineHeight: '150%',
        });
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        checkDate(userSelectedDate);
        console.log(userSelectedDate);

        const ms = userSelectedDate.getTime() - Date.now();
        const countDown = setTimeout(() => { }, ms);
    },
});




console.log(convertMs(2000));
console.log(convertMs(140000));
console.log(convertMs(24140000));
