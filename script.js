document.addEventListener('DOMContentLoaded', function () {
    const mail = document.getElementById('email');
    const subscribe = document.getElementById('subscribe');
    const success = document.querySelector('.successmessgae');
    const error = document.getElementById('errormessage');
    const main = document.getElementById('main');
    const userId = document.getElementById('userId');
    const Dismiss = document.getElementById('Dismiss');
  
    Dismiss.addEventListener('click',()=>{
      success.style.display = 'none';
      main.style.display = 'flex'; 
    })  
    subscribe.addEventListener('click', () => {
      
      const emailValue = mail.value.trim();
       const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
       


      if (emailPattern.test(emailValue)) {
        success.style.display = 'block'; // Display the success message
        error.innerText = ''; // Clear any previous error message
        // success.style.display = 'none'; 
        main.style.display = 'none'; 
        userId.innerHTML = emailValue;
      } else {
        success.style.display = 'none'; // Hide the success message
        error.innerText = 'enter valid email address'; // Show an error message
            userId.innerHTML = "ajeet";
      }
    });
  });
  