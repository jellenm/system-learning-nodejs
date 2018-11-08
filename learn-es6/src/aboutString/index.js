
console.log('===includes() startsWidth() endsWidth()===');
{
    let str = 'hello world!';
    console.log('includes',str.includes('wor'));
    console.log('startsWidth',str.startsWith('o',4));
    console.log('endsWidth',str.endsWith('l',10));
}

console.log('===repeat()===');
{
    let str = 'hi';
    console.log('repeat',str.repeat(3));
    console.log('repeat = NaN,0,-0.3',str.repeat(NaN),str.repeat(0),str.repeat(-0.3));
    try {
        console.log('-3',str.repeat(-3));
    }catch (e) {
        // throw new Error('repeat(-3)')
    }
    console.log('str abc',str.repeat('abc'));
    console.log('boolean true',str.repeat(true));
}

console.log('===padStart() padEnd()===');
{
    let str = 'x';
    console.log('padStart',str.padStart(3,'n'));
    console.log('padEnd',str.padEnd(3,'n'));
    console.log('n=0',str.padStart(0));
}

console.log('===模板字符串===');
{
    let tempStr = `hello a dreaming
        world`;
    console.log('模板字符串',tempStr);

    let a = 3,b=10;
    let tempVar = '${a} + ${b} =  ${a + b }';
    console.log('模板中加入变量',tempVar);

    console.log('模板中输出$符号',`\${a} + \${b} = ${a+b} `);

    let students = [
        {name:'Jim',age:'12'},
        {name:'Sam',age:'12'}
    ];
    let tempStudents = `
        <ul>
            ${students.map(item=>
                `<li>${item['name']} is ${item['age']}</li>`    
            ).join('')}
        </ul>
    `;
    console.log('模板中嵌套模板',tempStudents);

    tempStudents = `
        <ul>
            ${students.map(item=>
        `<li>${item['name']} is ${item['age']}</li>`
    )}
        </ul>
    `;
    console.log('模板中嵌套模板(没有join,会出现，)',tempStudents);

    tempStudents = `
        <ul>
            ${students.map(item=>
        {`<li>${item['name']} is ${item['age']}</li>`}
    )}
        </ul>
    `;
    console.log('模板中嵌套模板(函数中间不能拥有大括号)',tempStudents);
}

console.log('===模板编译===');








