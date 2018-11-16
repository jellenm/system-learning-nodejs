console.log('====SetAndMap===');
{
    console.log('===Set===');
    let arr = [1,2,3,4,4,3,2,1];
    let setArr = new Set(arr);
    console.log('setArr',setArr);
    console.log('setArrToArr',[...setArr]);

    let arr1 = [{name:'Sam'},2,3,4,3,2];
    let setArr1 = new Set(arr1);
    let setArr1ToArr = [...setArr1];
    console.log('arr1',arr1);
    console.log('setArr1',setArr1);
    console.log('setArr1ToArr',setArr1ToArr);
    console.log('===',arr1 === setArr1ToArr);
    console.log('property===',arr1[0] === setArr1ToArr[0]);

    setArr.add(8);
    console.log('add',setArr);
    setArr.delete(1);
    console.log('delete',setArr);
    console.log('has',setArr.has(2));
    console.log('size',setArr.size,arr);
    console.log('clear',setArr.clear());

    let keys = [];
    for(let i of setArr1.keys()){
        keys.push(i);
    }
    console.log('keys',keys);
    console.log('setArr1Keys',setArr1.keys());
    let values = [];
    for(let i of setArr1.values()){
        values.push(i);
    }
    console.log('values',values);
    console.log('setArr1Values',setArr1.values());
    let entries = [];
    for(let [key,value] of setArr1.entries()){
        entries.push([key,value]);
    }
    console.log('entries',entries);
    console.log('setArr1Entries',setArr1.entries());
}

{
    console.log('===WeakSet===');
    let weakSet = new WeakSet(document.querySelectorAll('.test'));
    console.log('weakSet',weakSet,weakSet.size);
    weakSet.add(document.querySelector('.add'));
    console.log('add',weakSet);
    weakSet.delete(document.querySelector('.add'));
    console.log('delete',weakSet);
    console.log('has',weakSet.has(document.querySelector('#delete')));
}

{
    console.log('===Map===');
    let map = new Map();
    let obj = {name:'Sam'};
    map.set(1,1);
    map.set(obj,obj['name']);
    obj['name'] = 'Jim';
    console.log('map',map,map.size);
    console.log('map.get',map.get(obj),map.get(1));
    map.delete(obj);
    console.log('map.delete',map,map.size);
    console.log('map.has',map.has(1));
    console.log('map.clear',map.clear(),map.size);


    let map1 = new Map([
        ['name','Sam'],
        ['age',12],
        [obj,obj['name']]
    ]);
    console.log('map1',map1,map1.size);
    console.log('map.keys',map1.keys());
    console.log('map.values',map1.values());
    console.log('map.entries',map1.entries());
    let forEach = [];
    map1.forEach(function(v,i){
        forEach.push([i,v]);
        forEach.push(this.name);
    },obj);
    console.log('map.forEach',forEach);
}

{
    console.log('===WeakMap===');
    let weakMap = new WeakMap();
    let obj = {name:'Sam'},
        obj1 = {age:12};
    weakMap.set(obj,obj['name']);
    weakMap.set(obj1,obj1['age']);
    console.log('has',weakMap.has(obj1));
    console.log('delete',weakMap.delete(obj1));
    console.log('get',weakMap.get(obj));
}












