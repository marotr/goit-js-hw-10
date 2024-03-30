
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const submit = document.querySelector('button');
const fulfilled = document.querySelector('input[value="fulfilled"]');
submit?.addEventListener('click', handleSubmit);
const input = document.querySelector('input[name="delay"')



function handleSubmit(event) {
    event.preventDefault();
    const delay = input.value
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
         if (fulfilled.checked) {
            resolve();
        } else { reject(); }

    }, delay)
       
        
    });

    promise.then(() => {
        showNotification(`✅ Fulfilled promise in ${delay}ms`, '#59a10d');
    })
        .catch(() => {
            showNotification(`❌ Rejected promise in ${delay}ms`, '#ef4040');
        });

}

function showNotification(message, backgroundColor) {
    iziToast.show({
        message: message,
        messageColor: ' #fff',
        backgroundColor: backgroundColor,
        position: 'topCenter',
        messageSize: '16px',
        messageLineHeight: '150%',
        iconColor: 'white'

    });
}
