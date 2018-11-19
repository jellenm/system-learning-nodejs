console.log('===aboutProxy===');
{
    let proxy = new Proxy({name:'Sam'},{
        get:function(target,propertyName){
            return 12;
        }
    });
    console.log('proxy',proxy.name);
    let proxy1 = Object.create(proxy,Object.getOwnPropertyDescriptors({name:'Jim'}));
    console.log('proxy1',proxy1.name);
    let proxy2 = Object.create(proxy);
    console.log('proxy2',proxy2.name);
}
{
    console.log('===Proxy-get===');
    let arr = [1,2,3,4,5];
    console.log('arr.reduce',arr.reduce(function(prev,current,index,a){ return prev+current;},1));
    //reduce 当进行第二次循环的时候，pre是第一次循环里面返回的值
    console.log('arr.reduce',arr.reduce(function(prev,cur,curIndex,a){ return prev*cur}));

    let obj ={name:'Sam'};
    let proxy = new Proxy(obj,{
        get:function(target,propertyName,receiver){
            return receiver;
        }
    });
    console.log('proxy.a == proxy',proxy.a === proxy);
    let proxy1 = Object.create(proxy);
    console.log('proxy1.a === proxy',proxy1.a === proxy);
    console.log('proxy1.a === proxy',proxy1.a === proxy1);
    console.log('proxy1.name',proxy1.name);

    console.log('---生成链式结构---');
    let fn = {};
    fn['add'] = n=>n+1;
    fn['pow'] = n=>n*n;
    let proxy3 = function(value){
        let arr = [];
        let proxy = new Proxy({},{
            get:function(target,propertyName){
                if(propertyName === 'get'){
                    return arr.reduce(function(prev,cur){
                        return cur(prev);
                    },value);
                }
                arr.push(fn[propertyName]);
                return proxy;
            }
        });
        return proxy;
    };
    console.log('proxy3(2).add.pow.get',proxy3(3).add.pow.get);

    console.log('---生成dom通用函数---');
    let proxy4 = new Proxy({},{
        get:function(target,propertyName){
            return function(props,...children){
                let el = document.createElement(propertyName);
                for(let i of Object.keys(props)){
                    el.setAttribute(i,props[i]);
                }
                for(let child of children){
                    if(typeof child === 'string'){
                        child = document.createTextNode(child);
                    }
                    el.appendChild(child)
                }
                return el;
            }
        }
    });
    const el = proxy4.div({},
        'Hello, my name is ',
        proxy4.a({href: '//example.com'}, 'Mark'),
        '. I like:',
        proxy4.ul({},
            proxy4.li({}, 'The web'),
            proxy4.li({}, 'Food'),
            proxy4.li({}, '…actually that\'s it')
        )
    );
    console.log('proxy4',el);
}
{
    console.log('===Proxy-set===');
    let validateProperty = (propertyName)=>{
        if(propertyName.startsWith('_')){
            throw new Error('私有属性')
        }
    };
    let targetObj = {};
    let proxy = new Proxy(targetObj,{
        get:function(target,propertyName,receiver){
            validateProperty(propertyName);
            // return targetObj[propertyName];
            return Reflect.get(...arguments);
        },
        set:function(target,propertyName,value,receiver){
            validateProperty(propertyName);
            // targetObj[propertyName] = value;
            Reflect.set(...arguments);
            return true;
        }
    });
    proxy['name'] = 'Sam';
    console.log('get',proxy.name);
    // proxy['_name'] = 'sam';
    // console.log('get',proxy._name);
}

















