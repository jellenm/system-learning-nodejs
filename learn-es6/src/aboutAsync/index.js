console.log('======Async======');
import axios from 'axios';
function searchBaidu(searchStr){
    return new Promise((resolve,reject)=>{
        axios.get('/s?wd='+searchStr)
            .then(res=>resolve(res))
            .catch(e=>reject(e));
    });
}
{
    let time ;
    console.log('===继发===');
    async function searchGe(){
        time = +new Date();
        let g1 = await searchBaidu('你');
        console.log('g1',g1,+new Date());
        let g2 = await searchBaidu('我');
        console.log('g2',g2,+new Date());
        let g3 = await searchBaidu('他');
        console.log('g3',g3,+new Date());
        return [g1,g2,g3]
    }
    searchGe().then(res=>{
        console.log('继发时长+++',+new Date()-time);
        console.log('继发res',res);
    }).catch(e=>{
        console.log('继发出错',e);
    });
}
{
    console.log('===并发===');
    let time1,time2,time3;
    async function searchGe(){
        time1 = +new Date();
        return await Promise.all([searchBaidu('你'),searchBaidu('我'),searchBaidu('他')]);
    }
    searchGe().then(res=>{
        console.log('并发1时长+++',+new Date() - time1);
        console.log('并发1res',res);
    }).catch(e=>{
        console.log('并发1出错',e);
    });

    async function searchGen(){
        time2 = +new Date();
        let promises = [searchBaidu('你'),searchBaidu('我'),searchBaidu('他')];
        let res = [];
        for(let promise of promises){
            res.push(await promise);
        }
        return res;
    }

    searchGen().then(res=>{
        console.log('并发2时长+++',+new Date() -time2);
        console.log('并发2res',res);
    }).catch(e=>{
        console.log('并发2出错',e);
    });


    console.log('===异步遍历器===');
    async function searchGenAwait(){
        time3 = +new Date();
        let promises = [searchBaidu('你'),searchBaidu('我'),searchBaidu('他')];
        let res = [];
        for await (let promise of promises){
            res.push(promise);
        }
        return res;
    }

    searchGenAwait().then(res=>{
        console.log('异步遍历器时长+++',+new Date() -time2);
        console.log('异步遍历器res',res);
    }).catch(e=>{
        console.log('异步遍历器出错',e);
    })


}

