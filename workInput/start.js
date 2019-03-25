var but = document.getElementById("1");

function cl() {
    var a = document.getElementsByClassName("in");
    for(var i = 0;i<a.length;i++){
        console.log(a[i].value);
    }
}
but.addEventListener("click",cl);
