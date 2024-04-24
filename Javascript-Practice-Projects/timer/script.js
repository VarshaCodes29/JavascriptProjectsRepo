const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const countTimer = document.querySelector(".countTimer");
const heading = document.querySelector("h1");

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

const timerFunction = () => {
    // Generating current date in dd/mm/yyyy format
    let now = new Date();
    let dd = String(now.getDate()).padStart(2, "0");
    let mm = String(now.getMonth() + 1).padStart(2, "0");
    let yyyy = now.getFullYear();
    now = `${mm}/${dd}/${yyyy}`;
    
    // Taking target date from user
    const enterDay = prompt("Enter day").padStart(2, "0");
    const enterMonth = prompt("Enter month").padStart(2, "0");

    let targetDate = `${enterMonth}/${enterDay}/${yyyy}`;

    // Checking if target date is for next year
    if (now > targetDate) {
        targetDate = `${enterMonth}/${enterDay}/${yyyy + 1}`;
    }
    console.log(targetDate);

    const intervalId = setInterval(() => {
        // Convert target time into milliseconds
        const timer = new Date(targetDate).getTime();
        const today = new Date().getTime();
        const difference = timer - today;

        console.log(difference);

        const leftDay = Math.floor(difference / day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftMinute = Math.floor((difference % hour) / minute);
        const leftSecond = Math.floor((difference % minute) / second);

        console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);

        daysElement.innerText = leftDay;
        hoursElement.innerText = leftHour;
        minutesElement.innerText = leftMinute;
        secondsElement.innerText = leftSecond;

        if (difference < 0) {
            countTimer.style.display = "none";
            heading.innerText = "Time's up";
            clearInterval(intervalId); // Stop the interval
        }
    }, 1000); // Set interval delay to 1000 milliseconds (1 second)
};

timerFunction();
