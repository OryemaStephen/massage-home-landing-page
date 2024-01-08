let list = document.querySelectorAll("span.bullet");

for(let i=0;i<=list.length; i++){
    if(i<10){
        list[i].innerHTML= "0"+(i+1);
    }else{
        list[i].innerText= i+1;
    }
}