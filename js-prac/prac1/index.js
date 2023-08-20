// const disp=document.querySelector(".display")



// localStorage.setItem("message","hello world !!");

// const result = localStorage.getItem("message");

// // console.log(result);

// const mess=document.createElement("h1");
// mess.innerHTML=result;

// disp.appendChild(mess);

//Rose – unit price: 8 , quantity: 70 , value: 560
// Lily – unit price: 10 , quantity: 50 , value: 500
// Tulip – unit price: 2 , quantity: 120 , value: 240
// Total: 1300

// let age = 32;
// age = age + 1;
// console.log(age);
//price
let rose=8;
let lily=10;
let tulip=2;




function totalPrice(flower,quantity){
let total =flower*quantity;

return total;

}


console.log("This is the total price for roses: ",totalPrice(rose,70));
console.log("This is the total price for lily: ",totalPrice(lily,50));
console.log("This is the total price for tulip: ",totalPrice(tulip,120));
console.log("Totals = ",totalPrice(rose,70)+totalPrice(lily,50)+totalPrice(tulip,120));


let contacts = [
    {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, 
    {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, 
    
    {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    
    console.log(contacts.length)
    
    
    console.log(contacts[0]);
    console.log(contacts[2])




