
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(localStorageKey));

if (savedState) {
    
    form.elements.email.value = savedState.email.trim() || "";
    form.elements.message.value = savedState.message.trim() || "";
}

form.addEventListener('input', () => {
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
})

form.addEventListener('submit', event => {
    event.preventDefault();

    if (form.elements.email.value.trim() === '' || form.elements.message.value.trim() === '') {
        alert("Please fill all fields in the form");
        return;
    }
  

   console.log("Data submitted:", JSON.parse(localStorage.getItem(localStorageKey)))
    form.reset();
     localStorage.removeItem(localStorageKey);
})


    