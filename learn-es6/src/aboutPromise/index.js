console.log('===Promise===');
// {
//     console.log('---Promise-1---');
//     console.log('111');
//     let p1 = new Promise(function(resolve,reject){
//         console.log('p1',+new Date());
//         setTimeout(()=>{
//             resolve('resolve-p1');
//         },3000);
//     });
//     let p2 = new Promise(function(resolve,reject){
//         console.log('p2',+new Date());
//         setTimeout(()=>{
//             resolve(p1);
//         },1000);
//     });
//     console.log('222');
//     p2.then(
//         res=>console.log('res',res,+new Date()),
//         err=>console.log('err',err)
//     );
//     console.log('333');
// }
// {
//     console.log('---Promise.prototype.then---');
//     function getUrl(type){
//         return new Promise(function(resolve,reject){
//             if(type === 1){
//                 setTimeout(()=>{resolve(1)},500);
//             }else{
//                 setTimeout(()=>{reject(2)},1000);
//             }
//         });
//     }
//     getUrl(1).then(
//         res=>{
//             console.log('res1',res,+new Date());
//             return getUrl(2);
//         },
//         err=>console.log('err1',err,+new Date())
//     ).then(
//         res=>console.log('res2',res,+new Date()),
//         err=>console.log('err2',err,+new Date())
//     );
// }
// {
//     console.log('---Promise.prototype.catch---');
//     function getUrl(type){
//         return new Promise(function(resolve,reject){
//             if(type === 1){
//                 setTimeout(()=>{resolve(1)},1000);
//             }else{
//                 // setTimeout(()=>{reject(2)},2000);
//                 // setTimeout(()=>reject(new Error('oh error')),2000);
//                 throw new Error('oh error')
//             }
//         });
//     }
//     getUrl(1).then(
//         res=>{
//             console.log('catch-res1',res,+new Date());
//             return getUrl(2);
//         }
//     ).then(
//         res=>console.log('catch-res2',res,+new Date())
//     ).catch((err)=>{
//         console.log('catch-err',err);
//         console.log('error-after');
//     });
//     setTimeout(function(){console.log('break?no')},1200);
// }
// {
//     console.log('---Promise.all() Promise.race()---');
//     let promise = function(time){
//         return new Promise(function(resolve,reject){
//             setTimeout(()=>{
//                 resolve(time);
//             },time);
//         })
//     };
//     let promiseErr = function(time){
//         return new Promise(function(resolve,reject){
//             setTimeout(()=>{
//                 reject(time);
//             },time);
//         })
//     };
//     Promise.all([promise(100),promise(200),promise(300)])
//         .then((res)=>console.log('res',res));
//     Promise.all([promiseErr(100),promiseErr(200),promiseErr(300)])
//         .then(res=>console.log('resErr',res))
//         .catch(err=>console.log('errErr',err));
//
//     console.log('---Promise.race()---');
//     Promise.race([promise(500),promise(400),promise(600)])
//         .then(res=>console.log('race-res',res))
//         .catch(err=>console.log('race-err',err));
// }

