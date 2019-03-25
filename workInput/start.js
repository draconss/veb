function cl() {
	var obj = {}
    var a = document.getElementsByClassName("in");
    for(var i = 0;i<a.length;i++){
		obj[i] = a[i].value;
    }
	console.log(obj);
}
document.getElementById("1").addEventListener("click",cl);
