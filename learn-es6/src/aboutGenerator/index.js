console.log('====== Generator ======');
{
    console.log('===Generator简介===');
    function* G(){
        console.log('1');
        yield console.log('2');
        yield console.log('3');
        console.log('4');
        return 5;
    }
    let g = G();
    console.log('第一次执行',g.next());
    console.log('第二次执行',g.next());
    console.log('第三次执行',g.next());
}

{
    console.log('===throw===');

    console.log('===throw方法===');
    function* G1(){
        try{
            while (true){
                yield ;
            }
        }catch (e) {
            console.log('内',e)
        }
    }
    let g1 = G1();
    g1.next();
    g1.throw('内部错误');


    function* G2(){
        while (true){
            yield ;
        }
    }
    let g2 = G2();
    g2.next();
    // g2.throw('test');
    console.log('内外都无catch',g2.next());


    console.log('===throw命令===');
    function* G3(){
        while (true){
            yield ;
            throw new Error('内部错误，外部捕获')
        }
    }
    let g3 = G3();
    try {
        g3.next();
        g3.next();
        // g3.throw('外部有catch');
    }catch(e){
        console.log('外',e)
    }

    console.log('===throw方法会执行下一条yield===');
    function* G4(){
        let i=1;
        try {
            while(i){
                yield i;
                console.log('iii',i);
                i++;
            }
        }catch(e){
            console.log('e',e);
        }
    }
    let g4 = G4();
    console.log('1',g4.next());
    console.log('2',g4.next());
    console.log('3',g4.next());
    console.log('4',g4.throw('xxx'));
    console.log('5',g4.next());
}
{
    console.log('===return===');
    function* G1(){
        while (true){
            yield ;
        }
    }
    let g1 = G1();
    console.log('1',g1.next());
    console.log('2',g1.return());
    console.log('3',g1.next());


    function* G2(){
        try{
            yield 1;
            yield 2;
            yield 3;
        } finally{
            yield 4;
        }
        return 6;
    }
    let g2 = G2();
    console.log('1',g2.next());
    console.log('2',g2.next());
    console.log('3',g2.return());
    console.log('4',g2.next());
    console.log('5',g2.next());
}

{
    console.log('===yield*===');
    function* G1(){
        yield 2;
        yield 3;
        return 4;
    }
    function* G2(){
        yield 1;
        let g1 = yield* G1();
        console.log('g1',g1);
        yield 5;
    }
    let g2 = G2();
    console.log('1',g2.next());
    console.log('2',g2.next());
    console.log('3',g2.next());
    console.log('4',g2.next());
    console.log('5',g2.next());
}

{
    console.log('===Generator this===');
    let obj1 = {};
    function* G1(){
        yield this.a = 1;
    }
    let g1 = G1.call(obj1);
    console.log('1',g1.next());
    console.log('g1.a',g1.a);
    console.log('obj1.a',obj1.a);

    let obj2 = {};
    function* G2(){
        yield this.a = 1;
    }
    let g2 = G2.call(G2.prototype);
    console.log('1',g2.next());
    console.log('g2.a',g2.a);
}
