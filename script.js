// let click=document.getElementById("ham");
// let hamopt=document.getElementById('hammenu');

// let c=0;

// console.log("before click "+c);
// function clicked(){
//     if(c==0){
//         hamopt.style.display="block";
//         c=1;
//     }
//     else{
//         hamopt.style.display="none";
//         c=0;
//     }

//     console.log("after click "+c);
// }


let hamButton = document.getElementById("ham");

let c=false;

console.log("before click "+c);
function clicked(){
    c?document.getElementById("hammenu").classList.remove("hammenuOpen"):document.getElementById("hammenu").classList.add("hammenuOpen");
    c=!c;
}





