console.log('===Reflect===');
{
    console.log('---1.Reflect-get---');
    let obj = {
        name:'Sam',
        age:12,
        get getName() {
            return this.name;
        }
    };
    let objReceiver = {
        name:'Jim',
        age:11
    };
    console.log('Reflect.get',Reflect.get(obj,'getName',objReceiver));
}
{
    console.log('---2.Reflect-set---');
    let obj = {
        // name:'Sam',
        age:12,
        set setName(value) {
            console.log('set');
            return this.name = value;
        }
    };
    // obj['name'] = 'Sam';
    Reflect.set(obj,'setName','Sam');
    console.log('Reflect-set-name',obj['name']);

    let targetObj = {};
    let proxy = new Proxy(targetObj,{
        set:function(target,propName,value,receiver){
            console.log('set1');
            Reflect.set(target,propName,value,receiver);
            console.log('out',receiver.name); //已完成赋值
            console.log('set2');
            return true;
        },
        defineProperty(target,prop,attributes){
            console.log('defineProperty');
            Reflect.defineProperty(...arguments);
        }
    });
    proxy.name = 'Sam';
    console.log('proxy.name',proxy.name);
}

{
    console.log('---3.Reflect.deleteProperty---');
    let obj = {
        name:'Sam',
        age:12
    };
    console.log(Reflect.deleteProperty(obj,'name'));
    console.log('name',obj['name']);
}
{
    console.log('---4.Reflect.construct---');
    function Person(name){
        this.name = name || 'Sam';
    }
    let person = Reflect.construct(Person,['Jim']);
    console.log('construct',person.name);
}
{
    console.log('---5.Reflect.defineProperty---');
    let obj = {};
    Reflect.defineProperty(obj,'name',{
        value:'Sam',
        enumerable:true
    });
    Reflect.defineProperty(obj,'blood',{
        value:'B',
        enumerable:false
    });
    console.log('obj',obj);
}
{
    console.log('---6.Reflect.getOwnPropertyDescriptor---');
    let obj = {};
    Reflect.defineProperty(obj,'name',{
        value:'Sam',
        enumerable:true
    });
    Reflect.defineProperty(obj,'blood',{
        value:'B',
        enumerable:false
    });
    console.log('getOwnPropertyDescriptor',Reflect.getOwnPropertyDescriptor(obj,'blood'));
}
{
    console.log('---7.Reflect.setPrototypeOf---');
    let obj = {
        age:12
    };
    let objPro = {
        name:'Jim',
        age:11
    };
    Reflect.setPrototypeOf(obj,objPro);
    console.log('obj',obj);
}
{
    console.log('---8.Reflect.getPrototypeOf---');
    let obj = {
        age:12
    };
    let objPro = {
        name:'Jim',
        age:11
    };
    Reflect.setPrototypeOf(obj,objPro);
    console.log('objPro',Reflect.getPrototypeOf(obj));
}
{
    console.log('---9.Reflect.ownKeys()---');
    let obj = {
        age:11
    };
    Reflect.defineProperty(obj,'name',{
        value:'Sam',
        enumerable:true
    });
    Reflect.defineProperty(obj,'blood',{
        value:'B',
        enumerable:false
    });
    let symbol = Symbol('foo');
    obj[symbol] = 'symbol';
    console.log('ownKeys',Reflect.ownKeys(obj));
}
{
    console.log('---10.Reflect.isExtensible---');
    let obj = {
        name:'Sam',
        age:12
    };
    console.log('isExtensible',Reflect.isExtensible(obj));
}
{
    console.log('---11.Reflect.defaultExtensions---');
    let obj = {
        name:'Sam',
        age:11
    };
    Reflect.preventExtensions(obj);
    console.log('preventExtensions',Reflect.isExtensible(obj));
}
{
    console.log('---12.Reflect.has---');
    let obj = {
        name:'Sam',
        age:12
    };
    console.log('has',Reflect.has(obj,'name'));
}
{
    console.log('---13.Reflect.apply---');
    let arr = [2,34,5,76,0];
    let max = Reflect.apply(Math.max,Math,arr);
    console.log('max',max);
}


