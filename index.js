// Access all span elements with class="bullet"
let list = document.querySelectorAll("span.bullet");

// Add a number to each span element
for(let i=0;i<=list.length; i++){
    if(i<10){
        list[i].innerHTML= "0"+(i+1);
    }else{
        list[i].innerText= i+1;
    }
}