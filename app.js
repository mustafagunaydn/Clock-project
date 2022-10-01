console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());


// const time = `${hour} : ${minutes} :${seconds}`;
// console.log(time);

setInterval(()=>{
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const time = `${hour} : ${minutes} : ${seconds}`;
    // console.log(time); 
    const container=document.querySelector(".container");
    container.innerHTML=`<p>${time}</p>`;
},1000);