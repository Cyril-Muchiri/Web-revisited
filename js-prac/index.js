const disp=document.querySelector(".display")



localStorage.setItem("message","hello world !!");

const result = localStorage.getItem("message");

// console.log(result);

const mess=document.createElement("h1");
mess.innerHTML=result;

disp.appendChild(mess);



