console.log('=======Iterator======');
{
    console.log('===模拟Iterator接口===');
    function IteratorArr(arr){
        let index = 0;
        return {
            next() {
                if(index < arr.length){
                    return { done:false,value:arr[index++]};
                }else{
                    return {done:true};
                }
            }
        }
    }
    let iteratorArr = new IteratorArr([1,2,3]);
    console.log(iteratorArr.next());
    console.log(iteratorArr.next());
    console.log(iteratorArr.next());
    console.log(iteratorArr.next());
}

{
    console.log('===含有Iterator接口===');
    class IteratorClass{
        constructor(start,stop) {
            this.start = start;
            this.stop = stop;
        }

        [Symbol.iterator]() {
            return this;
        }

        next() {
            let returnObj = {};
            if(this.start <= this.stop){
                returnObj =  {done:false,value:this.start++}
            }else{
                returnObj =  {done:true};
            }
            return returnObj
        }
    }

    let iterator = new IteratorClass(1,3);
    console.log('iterator',iterator);
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

{
    console.log('===对象部署Iterator===');
    let iteratorObj = {
        data:[1,2,3],
        [Symbol.iterator]() {
            let index = 0;
            let self = this;
            return {
                next() {
                    let returnObj = {};
                    if(index < self.data.length){
                        returnObj = {done:false,value:self.data[index++]}
                    }else{
                        returnObj = {done:true}
                    }
                    return returnObj;
                }
            }
        }
    };
    console.log('iteratorObj',...iteratorObj);
}

{
    console.log('===return和throw===');
    class IteratorClass{
        constructor(value){
            this.data = value;
            this.index = 0;
        }
        [Symbol.iterator]() { return this}
        next() {
            let returnObj = {};
            if(this.index <= this.data.length){
                returnObj = { done:false,value:this.data[this.index++]}
            }else{
                returnObj = {done:true}
            }
            return returnObj;
        }
        return() {
            return { done:true}
        }
    }
    let iteratorClass = new IteratorClass(['h','e','m','i','j']);
    for(let i of iteratorClass){
        if(i === 'e'){
            break;
        }
        console.log('iii',i);
    }
    // for(let i of iteratorClass){
    //     if(i === 'i'){
    //         throw new Error('error');
    //     }
    //     console.log('ttt',i)
    // }
}

{
    let spanLists = document.querySelectorAll('.test');
    for(let i of spanLists){
        console.log('test',i);
    }
}





