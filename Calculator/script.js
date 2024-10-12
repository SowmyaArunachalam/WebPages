function clr(){
    document.querySelector(".inputField").value=""
}

function display(val){
    document.querySelector(".inputField").value+=val;

}

function equate(){
    let x= document.querySelector(".inputField").value;
    let y=eval(x);
    document.querySelector(".inputField").value =y;

}