console.log('======Generator的异步用法======');
import axios from 'axios';
import Thunkify from 'thunkify';
import co from 'co';
{
    console.log('===promise===');
    function gene(searchString){
        return new Promise((resolve,reject)=>{
            axios.get('/s?wd='+searchString).then((res)=>{
                return resolve(res);
            }).catch((e)=>{
                return reject(e);
            })
        });
    }
    gene('我').then((res1)=>{
        console.log('res1',res1,+new Date());
        return gene('你');
    }).then((res2)=>{
        console.log('res2',res2,+new Date());
       return gene('他');
    }).then((res3)=>{
        console.log('res3',res3,+new Date());
    }).catch((e)=>{
        console.log('promiseError',e);
    });

    Promise.all([gene('我'),gene('他'),gene('你')]).then((res)=>{
        console.log('all-res',res);
    });
    Promise.race([gene('我'),gene('他'),gene('你')]).then(res=>{
        console.log('race-res',res);
    });
}

// {
//     console.log('===Generator+Promise===');
//     function promise(searchString){
//         return new Promise((resolve,reject)=>{
//             axios.get('/s?wd='+searchString).then((res)=>{
//                 return resolve(res);
//             }).catch((e)=>{
//                 return reject(e);
//             })
//         });
//     }
//     function* gene(){
//         let g1 = yield promise('我');
//         let g2 = yield promise('他');
//         let g3 = yield promise('你');
//         console.log('done',g1,g2,g3);
//     }
//     let g = gene();
//     g.next().value.then((res1)=>{
//         console.log('res1',res1);
//         return g.next(res1).value;
//     }).then(res2=>{
//         console.log('res2',res2);
//         return g.next(res2).value;
//     }).then(res3=>{
//         console.log('res3',res3);
//         return g.next(res3);
//     }).catch((e)=>{
//         console.log('eee',e);
//     });
// }

// {
//     console.log('===Thunk===');
//     function Thunk(fn){
//         return function(...args){
//             return function(callback){
//                 return fn.call(this,...args,callback);
//             }
//         }
//     }
//
//     let fun = function(a,b,cb){
//         cb(a+b);
//     };
//     Thunk(fun)(1,2)(function(res){console.log('a+b',res)});
// }

// {
//     console.log('===Thunkify===');
//     let fun = function(a,b,cb){
//         cb(a,b,a+b);
//     };
//     Thunkify(fun)(1,2)(function(a,b,res){console.log('a,b,res',a,b,res)});
// }

// {
//     console.log('===基于Thunk的自动管理流机制===');
//     let promiseFun = function(searchStr){
//         return function(cb){
//             setTimeout(()=>{
//                 cb(searchStr);
//             },1000);
//         }
//     };
//
//     function* gen(){
//         let g1 = yield promiseFun('你');
//         let g2 = yield promiseFun('我');
//         let g3 = yield promiseFun('他');
//         console.log('g1+g2+g3',g1,g2,g3);
//     }
//     console.log('---手动---');
//     let g = gen();
//     g.next().value(function(data1){
//         console.log('data1',data1);
//         g.next(data1).value(function(data2){
//             console.log('data2',data2);
//             g.next(data2).value(function(data3){
//                 console.log('data3',data3);
//                 g.next(data3);
//             })
//         })
//     });
//
//     console.log('---自动函数---');
//     function run(gene){
//         let g = gene();
//         function next(d){
//             let gNext = g.next(d);
//             if(gNext.done){ return }
//             gNext.value(next)
//         }
//         next();
//     }
//     run(gen);
// }

// {
//     console.log('===co===');
//     function promise(searchString){
//         return new Promise((resolve,reject)=>{
//             axios.get('/s?wd='+searchString).then((res)=>{
//                 return resolve(res);
//             }).catch((e)=>{
//                 return reject(e);
//             })
//         });
//     }
//
//     function* gene(){
//         let g1 = yield promise('我');
//         let g2 = yield promise('他');
//         let g3 = yield promise('你');
//         return [g1,g2,g3];
//     }
//
//     co(gene).then((res)=>{
//         console.log('res',res)
//     });
// }



