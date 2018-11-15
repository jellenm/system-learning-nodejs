{
    console.log('===Object.is===');
    console.log('Object.is(NaN,NaN)',Object.is(NaN,NaN));
    console.log('Object.is(+0,-0)',Object.is(+0,-0));
}

{
    console.log('===Object.assign()==');
    let obj = {
        name:'Sam',
        age:12
    };
    let objPro = {
        getAge() {
            return this.age;
        }
    };
    Object.setPrototypeOf(obj,objPro);
    console.log('---不改变原对象,原型没有继承---');
    let obj2 = Object.assign({},obj,{x:0,y:0});
    console.log('obj2',obj2);
    // console.log('obj2.getAge()',obj2.getAge());

    console.log('---不改变原对象,有原型继承---');
    let obj3 = Object.assign(Object.create(Object.getPrototypeOf(obj)),obj,{x:0,y:0});
    console.log('obj',obj);
    console.log('obj3',obj3);
    console.log('objPro',objPro);
    // objPro.getAge = function(){ return 1 }; //引用类型
    console.log('obj3.getAge()',obj3.getAge());

    // console.log('---改变原对象，有原型继承---');
    // let obj1 = Object.assign(obj,{x:0,y:0});
    // console.log('obj1',obj1);
    // console.log('obj1.getAge()',obj.getAge());
}

{
    console.log('===Object.getOwnPropertyDescriptors()===');
    let obj = {
        name:'Sam',
        age:12,
        get train() {},
        set train(v) {}
    };
    Object.defineProperty(obj,'blood',{
        enumerable:false,
        value:'B'
    });
    let objPro = {
        getAge() {
            return this.age;
        }
    };
    Object.setPrototypeOf(obj,objPro);

    let obj1 = Object.assign(Object.create(Object.getPrototypeOf(obj)),obj,{x:0,y:0});
    console.log('obj1--set--enumerable',obj1);
    let obj2 = Object.assign(Object.create(Object.getPrototypeOf(obj)),Object.getOwnPropertyDescriptors(obj),{x:0,y:0});
    console.log('obj2--has set -- has enumerable',obj2);
}

{
    console.log('===Object.keys()、Object.values()、Object.entries()===');
    let obj ={
        name:'Sam',
        age:12,
        [Symbol('des')]:'des'
    };
    let objPro = {
        getAge() { return this.age}
    };
    Object.defineProperty(obj,'blood',{
        enumerable:false,
        value:'B'
    });
    const {keys,values,entries} = Object;

    console.log('keys',keys(obj));
    console.log('values',values(obj));
    console.log('entries',entries(obj));
}

{
    console.log('===Object.fromEntries()===');
    let arr = [
        ["name","Sam"],
        ['age',12]
    ];
    // console.log('entriesFrom',Object.fromEntries(arr)); 暂不支持
}
