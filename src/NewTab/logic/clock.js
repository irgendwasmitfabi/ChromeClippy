function updateTime(){
    var timeDiv = document.getElementById("clock-container")
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    timeDiv.textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000);
updateTime();