{
    console.log('===函数参数默认值===');
    function func1({x=0,y=0}){
        return [x,y];
    }
    function func2({x=0,y=0} = {}){
        return [x,y];
    }
    function func3({x=0,y=0} = {x:0,y:0}){
        return [x,y];
    }
    function func4({x,y} = {x:0,y:0}){
        return [x,y];
    }

    try {
        console.log('func1()',func1());
    }catch(e){

    }
    console.log('func2()',func2());
    console.log('func3()',func3());
    console.log('func4()',func4());
    console.log('func1({})',func1({}));
    console.log('func2({})',func2({}));
    console.log('func3({})',func3({}));
    console.log('func4({})',func4({}));
    console.log('func1({x:1})',func1({x:1}));
    console.log('func2({x:1})',func2({x:1}));
    console.log('func3({x:1})',func3({x:1}));
    console.log('func4({x:1})',func4({x:1}));
    console.log('func1({y:1})',func1({y:1}));
    console.log('func2({y:1})',func2({y:1}));
    console.log('func3({y:1})',func3({y:1}));
    console.log('func4({y:1})',func4({y:1}));
    console.log('func1({x:1,y:1})',func1({x:1,y:1}));
    console.log('func2({x:1,y:1})',func2({x:1,y:1}));
    console.log('func3({x:1,y:1})',func3({x:1,y:1}));
    console.log('func4({x:1,y:1})',func4({x:1,y:1}));
}

{
    console.log('===函数参数undefined和null ===');
    function func(x=1){
        return x;
    }
    console.log('func(undefined)',func(undefined));
    console.log('func(null)',func(null));
}

{
    console.log('===函数的name属性===');
    const func1 = function(){};
    const func2 = function baz(){};
    function func3(){}
    const func4 = new Function();
    const func5 = (function(){}).bind({});

    console.log('func1',func1.name); //_func
    console.log('func2',func2.name); // baz
    console.log('func3',func3.name); //_func3
    console.log('func4',func4.name); //anonymous
    console.log('func5',func5.name); //bound
}

{
    console.log('===函数的length属性===');
    function func1(x,y){}
    function func2(x=0,y){}
    function func3(x,y=0){}
    function func4(...rest){}
    console.log("func1",func1.length);
    console.log("func2",func2.length);
    console.log("func3",func3.length);
    console.log("func4",func4.length);
}

{
    console.log('===箭头函数===');
    const func1 = ()=> 1;
    const func2 = x => x;
    const func3 = (x,y) => x+y;
    const func4 = (x,y) => { let m = x+y; return m*2; };
    const func5 = () => void func1();

    const testObj = {
        name:'Jim',
        getName:()=> this.name
    };
    try {
        console.log('testObj.getName',testObj.getName());
    }catch(e){
        //getName中的this为undefined
    }
}







