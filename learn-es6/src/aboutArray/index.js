{
    console.log('===扩展运算符...===');
    let arr = [1,2,,4];
    console.log('...arr',...arr);

    function add(x,y){
        return x+y;
    }
    console.log('arr(x,y)',add(...arr));

    function add1(x,y,z,m,n){
        return x+y+z+m+n;
    }
    console.log('add1(x,y)',add1(...[1,2],3,...[4,5]));

    let maxArr = [1,2,3,4,5,6];
    console.log('最大值apply方法',Math.max.apply([],maxArr));
    console.log('最大值ES6方法',Math.max(...maxArr));
}

{
    console.log('===Array.from===');
    let spans = document.querySelectorAll('span');
    console.log('spans',spans);
    console.log('typeof spans',Object.prototype.toString.call(spans));
    console.log('Array.from()',Array.from(spans),Object.prototype.toString.call(Array.from(spans)));
}

{
    console.log('===Array.of===');
    console.log('Array.of(1,2,3)',Array.of(1,2,3));
    console.log('Array.of(3)',Array.of(3));
    console.log('new Array(3)',new Array(3));
}

{
    console.log('===find,findIndex===');
    let arr = [0,1,2,3,4,5,6,7,NaN];
    let obj = {age:4};
    console.log('find',arr.find((value)=>value===3));
    console.log('find',arr.find(function(value){return value>this.age},obj));
    console.log('findNaN',arr.find(v=>Object.is(NaN,v)));
    console.log('findIndex',arr.findIndex(v=>v>3));
    console.log('findIndex',arr.findIndex(function(v){ return v>this.age},obj));
}

{
    console.log('===copyWithin===');
    let arr = [0,1,2,3,4,5,6,7];
    console.log('arr.copyWithin(0,3)',arr.copyWithin(0,3));
    console.log('arr.copyWithin(0,3,5)',arr.copyWithin(0,3,5));
}

{
    console.log('===fill===');
    let arr = [0,1,2,3,4,5,6,7,8];
    let arr1 = [0,1,2,3,4,5,6,7,8];
    let arr2 = [0,1,2,3,4,5,6,7,8];
    console.log('arr.fill(3)',arr.fill(3));
    console.log('arr.fill(3,2)',arr1.fill(3,2));
    console.log('arr.fill(3,2,5)',arr2.fill(3,2,5));
}

{
    console.log('===flat,flatMap 暂时版本不支持===');
    let arr1 = [[0],[1],2,3,[4,5,6,[7]]];
    // console.log('arr.flat()',arr1.flat());
}

{
    console.log('===includes===');
    let arr1 = [0,1,2,3,4,5,5,6];
    console.log('includes',arr1.includes(6,2));
    console.log('includes',arr1.includes(0,3));
    console.log('includes',arr1.includes(4,-3));
    console.log('includes',arr1.includes(4,-4));
}

{
    console.log('===数组空位===');
    let arr1 = [1,,1,2];
    console.log('every--略过',arr1.every(v=>v>0));
    console.log('map--返回',arr1.map(v=>v*2));
    console.log('join',arr1.join('#'));
    console.log('toString',arr1.toString());

    console.log('...',...arr1);
    console.log('findIndex',arr1.findIndex(v=>v===undefined))
}

