
let arr = [1,2,3,4];
console.log([1,23,...arr]);


function setTimeoutText(text){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,5000);
    })
}


setTimeoutText('hello').then((r)=>{console.log('rrr',r)});



