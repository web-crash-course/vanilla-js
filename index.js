class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const formElement = document.querySelector('form');
formElement.addEventListener('submit', event => {
   event.preventDefault();
   const formElement = event.target;
   const firstNameInputElement = formElement && event.target.querySelector('#firstName');
   const lastNameInputElement = formElement && event.target.querySelector('#lastName');
   if (firstNameInputElement && firstNameInputElement.value
       && lastNameInputElement && lastNameInputElement.value) {
       console.log(new Employee(firstNameInputElement.value, lastNameInputElement.value));
   } else {
       console.error('Input values wrong...');
   }
});
