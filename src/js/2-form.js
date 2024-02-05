const formRef = document.querySelector('.feedback-form');
const emailRef = formRef.elements['email'];
const messageRef = formRef.elements['message'];

formRef.addEventListener('input', onFormInput);

function onFormInput() {
  const userData = {
    email: emailRef.value.trim(),
    message: messageRef.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

if (localStorage.length) {
  const userDataStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (
    userDataStorage.hasOwnProperty('email') &&
    userDataStorage.hasOwnProperty('message')
  ) {
    emailRef.value = userDataStorage.email;
    messageRef.value = userDataStorage.message;
  }
}

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const trimmedEmail = emailRef.value.trim();
  const trimmedMessage = messageRef.value.trim();

  if (trimmedEmail && trimmedMessage) {
    console.log({
      email: trimmedEmail,
      message: trimmedMessage,
    });
    localStorage.removeItem('feedback-form-state');
    emailRef.value = '';
    messageRef.value = '';
  } else {
    alert('All form fields must be filled in');
  }
}
