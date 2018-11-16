console.log('===About Symbol===');

{
    console.log('===概述===');
    let a = Symbol();
    let b = Symbol();
    let c = Symbol('foo');
    console.log('a==b',a==b);
    console.log('c',c);
    console.log('typeof',typeof c);
    let obj = {c:'c'};
    let d = Symbol(obj);
    console.log('d',d);
    console.log('toString',d.toString());
    console.log('Boolean',Boolean(d));
    // console.log('Number',Number(d)); 报错
}


{
    console.log('===作为属性值===');
    let a = Symbol();
    let b = Symbol();
    let c = Symbol();
    let obj = {
        [a]:'aaa'
    };
    obj[b] = 'bbb';
    Object.defineProperty(obj,c,{value:'ccc'});
    console.log('obj[a]',a,obj[a]);
    console.log('obj[b]',b,obj[b]);
    console.log('obj[c]',c,obj[c]);
}

{
    console.log('===Symbol.for() Symbol.keyFor()===');
    let a = Symbol.for('a');
    let b = Symbol.for('a');
    console.log('a',a);
    console.log('b',b);
    console.log('a==b',a==b);
    console.log('keyFor',Symbol.keyFor(a));
}
console.log('===内置Symbol值===');
{
    console.log('---Symbol.hasInstance---');
    class Even {
        static [Symbol.hasInstance](obj) {
            return Number(obj) % 2 === 0;
        }
    }
    console.log(12345 instanceof Even);
    console.log(2 instanceof Even);
}
{
    console.log('---Symbol.isConcatSpreadable---');
    let obj = {0:0,1:1,length:2};
    let arr = [0,1,2,3];
    console.log('obj',[].concat(obj));
    console.log('arr',[].concat(arr));

    obj[Symbol.isConcatSpreadable] = true;
    console.log('obj-isConcatSpreadable-true',[].concat(obj));
    arr[Symbol.isConcatSpreadable] = false;
    console.log('arr-isConcatSpreadable-false',[].concat(arr));
}
{
    console.log('---Symbol.species---表现不一致，暂时不能使用');
    class MyClass extends Array{

    }
    class MyClassSpecies extends Array{
        static get [Symbol.species](){
            return Array;
        }
    }
    let myClass = new MyClass(1,2,3);
    let myClassSpecies = new MyClassSpecies(1,2,3);

    console.log('myClass',myClass instanceof MyClass);
    console.log('myClassSpecies',myClassSpecies instanceof MyClassSpecies);

    let myClassMap = myClass.map(x=>x);
    let myClassSpeciesMap = myClassSpecies.map(x=>x);
    console.log('myClassMap',myClassMap instanceof MyClass);
    console.log('myClassSpeciesMap',myClassSpeciesMap instanceof MyClassSpecies);
}

{
    console.log('---Symbol.match,Symbol.search,Symbol.replace,Symbol.split---');
    let obj = {
        name:'Jim',
        age:12,
        [Symbol.match]() {
            return 'match';
        },
        [Symbol.replace]() {
            return 'replace';
        },
        [Symbol.search]() {
            return 'search';
        },
        [Symbol.split](){
            return 'split';
        }
    };
    console.log('match','123'.match(obj));
    console.log('replace','123'.replace(obj));
    console.log('search','123'.search(obj));
    console.log('split','123'.split(obj));
}
{
    console.log('---Symbol.toPrimitive---');
    let obj = {
        [Symbol.toPrimitive](type) {
            switch (type) {
                case 'number':return 2;break;
                case 'string': return 'string';break;
                case 'default':return 'default';break;
            }
        }
    };
    console.log('String',String(obj));
    console.log('toString',obj.toString());
    console.log('toNumber',2*obj);
    console.log('toDefault',12+obj);
}
{
    console.log('---Symbol.toStingTag---');
    let obj = {
        // get [Symbol.toStringTag]() {
        //     return 'ooo';
        // },
        [Symbol.toStringTag]:'ooo'
    };
    console.log('toString',obj.toString());
    console.log('toString',Object.prototype.toString.call(obj));
}
{
    console.log('---Symbol.interator---');
    console.log('---Symbol.unscopables---');
}










