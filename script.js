let click=document.getElementById("ham");
let hamopt=document.getElementById('hammenu');

let c=0;

console.log("before click "+c);
function clicked(){
    if(c==0){
        hamopt.style.display="block";
        c=1;
    }
    else{
        hamopt.style.display="none";
        c=0;
    }

    console.log("after click "+c);
}


