var t1 = {};
var t2 = {'a': 22};
var t3 = {'d':function (d) {
    return d;
    }}

function isEmpy(obj){
    for(var i in obj){
        return false;
    }
    return true;
}
console.log(isEmpy(t1));
console.log(isEmpy(t2));
console.log(isEmpy(t3));
