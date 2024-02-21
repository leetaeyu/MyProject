window.onload = () => {
    const userName = document.getElementById('userName');
    const loginForm = document.getElementById('loginForm');
    const user = document.getElementById('user');
    const TAG_HIDDEN = 'none';
    
    onLoginSubmit = (event) => {
        event.preventDefault();
        const userNameValue = userName.value;
        loginForm.classList.add(TAG_HIDDEN);
        localStorage.setItem('userName', userNameValue);
        printGreetings(userNameValue);
    }

    printGreetings = (userName) => {
        user.innerText = `환영합니다 ${userName}님`
        user.classList.remove(TAG_HIDDEN);
    }
    
    const saveUserName = localStorage.getItem('userName');
    
    if(saveUserName === null) {
        loginForm.classList.remove(TAG_HIDDEN);
        loginForm.addEventListener('submit', onLoginSubmit);
    } else {
        printGreetings(saveUserName);
    }
}