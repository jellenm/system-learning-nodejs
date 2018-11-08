console.log('=====正则复习=====');
{
    console.log('===字符串正则===');
    let str = 'test1test2test3test4';
    console.log('str.match-has',str.match(/test(\d?)/g));
    console.log('str.match-none',str.match(/test123/g));
    console.log('str.search-has',str.search(/test(\d?)/));
    console.log('str.search-none',str.search(/test123/));
    console.log('str.replace',str.replace(/test(\d?)/g,'hello'));
    console.log('str.split',str.split(/\d/));
}

{
    console.log('===RegExp正则===');
    let str = 'test1test2test3test4';
    let reg = /test(d?)/;
    let reg2 = /test123/;
    console.log('RegExp exec-has',reg.exec(str));
    console.log('RegExp exec-none',reg2.exec(str));
    console.log('RegExp test',reg.test(str));
}

console.log('===ES6扩展===');
{
    console.log('RegExp1',new RegExp(/test/,'i'));
    console.log('RegExp2',new RegExp(/test/i));
    console.log('ES6扩展,新flags会替代旧的flags',new RegExp(/test/ig,'i'),new RegExp(/test/ig,'i').flags);
}

{
    console.log('matchAll');
    // let str = 'test1test2test3test4';
    // let reg = /test(\d?)/;
    // console.log('matchAll-has',str.matchAll(reg));
    // console.log('matchAll-none',str.matchAll(/test1234/));
}
