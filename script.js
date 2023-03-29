days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let time = 1679032800;

let date = new Date(time * 1000); // convert to milliseconds
let month = date.getMonth();
let day = days[date.getDay()];
let theDate = date.getDate();
let year = date.getFullYear();

document.getElementById("day").innerText = day;
longDate = months[month] + " " + theDate + ", " + year;
document.getElementById("longDate").innerText = longDate;
