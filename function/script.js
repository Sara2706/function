// javascript here

// Submit button
const submitbtn = document.querySelector("#submit");
const input = document.querySelector(".input input");

// here the function will execute
submitbtn.addEventListener("click",()=>{
    checkName();
})

// function for check name
function checkName(){
    let userName = input.value.trim(); 
    if (!userName) {
        alert("Name must be filledout");
    } else {
        alert("Hi" +" "+ userName);
    };
}