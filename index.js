var isstaus = document.querySelector('h5');
var btn = document.querySelector('#add');
var check =0;
/*var romove= document.querySelector('#remove');
add.addEventListener("click",function(){
    isstaus.innerHTML="Friends";
    isstaus.style.color="green";
    isstaus.style.backgroundColor="black";
    isstaus.style.width="70px";
    isstaus.style.textAlign="center";
    isstaus.style.alignItems="center";

})

remove.addEventListener("click",function(){
    isstaus.innerHTML="Stranger"
    isstaus.style.color="red";
})*/
btn.addEventListener("click",function(){
    if(check===0){
        isstaus.innerHTML="Friends";
        isstaus.style.color="red"
        btn.innerHTML="Remove"
        check=1
    }
    else{
        isstaus.innerHTML="Stranger";
        isstaus.style.color="red"
        btn.innerHTML="Add Friends"
        check=0

    }
})