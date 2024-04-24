const clock = document.querySelector(".clock");
let sec = 0, min = 0, hr=0, intervalId;


const startStopWatch = () =>{
    intervalId = setInterval(() => {
        if(sec < 59)
        {
            sec++;
        }
        else if(min > 59){
            hr++;
        }
        else{
            sec = 0;
             min++;
        }

        let hour = String(hr).padStart(2,"0");
        let minute = String(min).padStart(2,"0");
        let second = String(sec).padStart(2,"0");

        // console.log(`${hour}:${minute}:${second}`)
        clock.innerText = `${hour}:${minute}:${second}`;
    },1000)

};

const stopStopWatch = () => {
    clearInterval(intervalId);
};