window.addEventListener('load', () => {
    getClock();
    setInterval(getClock, 1000);
})

getClock = () => {
    const clock = document.getElementById('clock');
    const date = new Date();
    let hours = String(date.getHours()).padStart("2", 0);
    let minutes = String(date.getMinutes()).padStart("2", 0);
    let seconds = String(date.getSeconds()).padStart("2", 0);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
