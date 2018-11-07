//数组的解构赋值
console.log('====数组的解构赋值====');
{
    let [a,b] = [1,2];
    console.log('a,b',a,b);
}



//对象的解构赋值
console.log('====对象的解构赋值====');
{
    let obj = {
        foo:'foo',
        baz:'baz'
    };
    let {foo,baz} = obj;
    console.log('foo,baz',foo,baz);
}
{
    let obj = {
        foo:'foo',
        baz:'baz'
    };
    let {foo:l,baz:y} = obj;
    console.log('l,y',l,y);
}
{
    let obj = {
        name:'Jim',
        age:12,
        relationship:{
            m:'Alice',
            f:'Sam',
            bra:['Will','Selina']
        },
    };
    let {name,age,relationship:{m,f,bra}} = obj;
    console.log('name,age,m,f,bra',name,age,m,f,bra);
    console.log('same',bra === obj['relationship']['bra']);

    bra.push('Apple');
    console.log('obj.bra',obj.relationship.bra);


    let arr = [1,2,3];
    let {0:first,[arr.length-1]:last} = arr;
    console.log('first,last',first,last);
}


//函数的解构赋值
console.log('====函数的解构赋值====');
{
    function argDestructuring({x=0,y=1}){
        x++;
        y++;
        return {x,y}
    }
    console.log('参数变量的默认值');
    console.log('1,2',argDestructuring({x:1,y:2}));
    console.log('1,undefined',argDestructuring({x:1}));
    console.log('undefined,undefined',argDestructuring({}));

    function argDestructuring1({x=0,y=1}={x:0,y:0}){
        x++;
        y++;
        return {x,y}
    }
    console.log('空参',argDestructuring1());
}

//字符串的解构赋值
console.log('====字符串的解构赋值====');
{
    let string = 'abcdefgh';
    let [a,b,c,d,e,f] = string;
    console.log('a,b,c,d,e,f',a,b,c,d,e,f);

    let {length:len} = string;
    console.log('string length',len);
}

//数字或者布尔值的结构赋值
console.log('====数字或者布尔值====');
{
    let varNum = 123;
    let varBoolean = true;
    let {toString:numToString} = varNum;
    let {toString:booleanToString} = varBoolean;
    console.log('numToString,booleanToString',(numToString === Number.prototype.toString),(booleanToString === Boolean.prototype.toString))
}

//用法
console.log('====解构赋值的用法====');
{

    //变量的替换
    let [x,y] = [1,2];
    [x,y] = [y,x];
    console.log('x,y',x,y);

    //函数参数和参数变量的默认值
    function destructuring({x=0,y=0} = {x:1,y:1}) {

    }

    //函数返回值的处理
    function func(){
        return {a:'a',b:'b',c:'c'}
    }
    let {a,b,c} = func();

}
