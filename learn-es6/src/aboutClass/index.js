console.log('======Class======');
{
    console.log('===class用法===');
    function Person(name,age){
        this.name = name;
        this.age = age;
        this.sayName = function(){
            console.log('this.name',this.name);
        }
    }
    let person1 = new Person('Sam',12);
    person1.sayName();
    console.log('Person1',Object.keys(person1));
    console.log('prototype',person1.constructor == Person.prototype.constructor);

    class PersonClass{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        sayName(){
            console.log('this.name',this.name);
        }
    }
    let person2 = new PersonClass('Jim',13);
    person2.sayName();
    console.log('person2',Object.keys(person2));
    console.log('prototype',person2.constructor == PersonClass.prototype.constructor);
}

{
    console.log('===私有方法 _下划线+移除模块+symbol===');
    let symbolKey = Symbol.for('getNameAge');
    class Person{
        constructor(name,age){
            this.name = name;
            this.age =age;
        }
        _getName(){
            return this.name;
        }
        getAge(){
            return getAgeCall.call(this);
        }
        [symbolKey](){
            return 'name ' + this.name + ' and age' + this.age;
        }
    }
    function getAgeCall(){
        return this.age;
    }
    let person1 = new Person('Sam',12);
    console.log('person1._getName',person1._getName());
    console.log('person1.getAge',person1.getAge());
    console.log('person1.getAgeAndAge',person1[symbolKey]());
    console.log('person1',person1);
}

{
    console.log('===this---单独使用方法时需注意===');
    class Person{
        constructor(name,age){
            this.name = name;
            this.age = age;
            this.printName2 = this.print.bind(this);
            this.printName3 = (text)=>{
                this.print(text);
            }
        }
        printName1(text){
            this.print(text);
        }
        print(text){
            console.log(`${text}`);
        }
    }
    let person = new Person('Sam',12);
    let { printName1,printName2,printName3 } = person;
    // printName1('print');
    printName2('printName2');
    printName3('printName3');
}

{
    console.log('===类的静态方法和属性===');
    class Person{
        static hight = 100;
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        static print(text){
            console.log(`${text}`);
        }
    }
    Person.blood = 'B';
    Person.print('static');
    console.log('Person.blood',Person.blood);
    console.log('Person.hight',Person.hight);
}
