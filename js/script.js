document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorBanner = document.getElementById('errorBanner');
    let successBanner = document.getElementById('successBanner');
    
    if (username === "test" && password === "password") {
        errorBanner.style.display = 'none'; // Hide error banner
        successBanner.style.display = 'block'; // Show success banner
    } else {
        successBanner.style.display = 'none'; // Hide success banner if credentials are wrong
        errorBanner.style.display = 'block'; // Show error banner
    }
});
