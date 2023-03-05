formSubmitBtn.disabled = true;
formSubmitBtn.innerHTML = 'Sending...';

fetch('/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(() => {
    formStatus.innerHTML = 'Message sent successfully!';
    formStatus.classList.remove('error');
    formStatus.classList.add('success');
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
})
.catch(() => {
    formStatus.innerHTML = 'Oops! Something went wrong. Please try again later.';
    formStatus.classList.remove('success');
    formStatus.classList.add('error');
})
.finally(() => {
    formSubmitBtn.disabled = false;
    formSubmitBtn.innerHTML = 'Send';
});
