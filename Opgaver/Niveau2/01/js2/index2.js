// const buttoncheck = document.getElementById('buttons');
// buttoncheck.addEventListener("click", () => {
// console.log(buttoncheck);

// })


// function buttoncheck(event) { 
//     let text = event.target.nodeName;
//     document.getElementById("buttons").innerHTML = text;
//   }

// function buttoncheck(event) {
//     document.getElementById(event.target.id).innerHTML = "X";
//   }


// const buttoncheck = document.querySelector("#buttons")


// buttoncheck.addEventListener('click', function(event){
 

//     if (event.target.tagName === "BUTTON") {
     
    
//    document.querySelectorAll("#buttons button").forEach(btn => {

//     btn.style.backgroundColor = "green";
//    });
   

//     event.target.style.backgroundColor = "green";
    

    

// }}
// );


document.querySelector("#buttons").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      // Reset all buttons to grey
      document.querySelectorAll("#buttons button").forEach(btn => {
        btn.style.backgroundColor = "grey";
      });
  
      // Change only the clicked button to green
      event.target.style.backgroundColor = "green";
    }
  });