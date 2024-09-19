
const sideMenu = document.querySelector('aside');
const menuButton = document.querySelector('#menu_bar');
const closeButton = document.querySelector('#close_button');
const themeToggler = document.querySelector('.theme-toggler');

menuButton.addEventListener('click',()=>{
    sideMenu.style.display="block"
})

closeButton.addEventListener('click',()=>{
    closeButton.style.display="block"
})

themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables')
    themeToggler.querySelector('spam:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('spam:nth-child(2)').classList.toggle('active')
})


//fill in the details in the table
Orders.array.forEach(order => {
    const tr=document.createElement('tr');
    const trContent='
                    <td>${data.CompanyName}</td>
                    <td>${data.ChallengeName}</td>
                    <td>${data.ChallengeName}</td>
                    <td class="warning">Pending</td>
                    <td class="primary">Details</td> 
                    ';
})

// js for login form

document.addEventListener('DOMContentLoaded', () => {
    // Form switching logic
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });

    // Fixed credentials
    const fixedUserId = "user@idex.com";
    const fixedPassword = "Password123!";

    // Form submission and validation
    const signInForm = document.querySelector('.sign-in-form');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const userIdInput = signInForm.querySelector('input[type="text"]');
        const passwordInput = signInForm.querySelector('input[type="password"]');
        const userId = userIdInput.value;
        const password = passwordInput.value;

        // Validate credentials
        if (userId === fixedUserId && password === fixedPassword) {
            alert('Login successful!');
            window.location.href = "index.html"; 
            // Here you could redirect the user or take another action
        } else {
            alert('Invalid User ID or Password.');
        }
    });
});
