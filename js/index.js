        // let email = 'winnie@gmail.com';
        // // alert(email);
        // console.log(typeof (email));
        // console.log(email[0]);
        // console.log(email.length);
        // console.log(email.toLocaleUpperCase());
        // console.log(email.toLocaleLowerCase);
        // console.log(email.substring(0, 7));
        // console.log(email.indexOf('@'));
        // console.log(email.indexOf('B'));
        // console.log(email.replace('winnie', 'jerry'));
        // console.log(email.includes('winnie'));
        // console.log(email[email.length - 1]);
        // console.log(email[email.length]);

        // for (let i = 0; i < email.length; i++) {
        //     console.log(i + 1, email[i]);
        // }
        // let a = 10;
        // let b = 2;
        // console.log(a / b);
        // console.log(++a, b++);
        // console.log(a, b);
        // console.log(--a, b--);
        // console.log(a, b);

        // console.log('A' > 'a');
        // console.log(25 == '25');
        // console.log(25 === '25');

        // x = 10;
        // y = 20;
        // z = 30;
        // if (x > y && x < z) {
        //     console.log('1');
        // }
        // if (x > y || x < z) {
        //     console.log('2');
        // }
        // if (!(x > y) && x < z) {
        //     console.log('3');
        // }

        // x = '';
        // if (!x) {
        //     console.log('4')
        // }

        // console.log(Math);
        // console.log(Math.PI);
        // console.log(Math.E);
        // x = 7.7;
        // console.log(x);
        // console.log(Math.abs(x));
        // console.log(Math.ceil(x));
        // console.log(Math.floor(x));
        // console.log(Math.round(x));
        // console.log(Math.random());
        // console.log(Math.random() * 10);
        // 1~9 之間 
        // console.log(Math.floor(Math.random() * 10));
        // // 1~10 之間
        // console.log(Math.floor(Math.random() * 10) + 1);
        // // 1~100 之間
        // console.log(Math.floor(Math.random() * 100) + 1);
        // 10~100 之間
        // for (let i = 0; i < 100; i++) {
        //     let number = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        //     console.log(number);
        //     if (number == 100) {
        //         break;
        //     }
        // }

        // while (true) {
        //     let number = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        //     console.log(number);
        //     if (number == 100) {
        //         break;
        //     }
        // }

        // const start = 1;
        // const end = 49;
        // let lotto = '';
        // for (let i = 0; i < 6; i++) {
        //     // console.log(Math.floor(Math.random() * (end - start + 1)) + start);
        //     number = Math.floor(Math.random() * (end - start + 1)) + start;
        //     console.log('第' + (i + 1) + '個號碼:' + number);
        //     console.log(`第${i + 1}個號碼:${number}`);
        //     lotto += number + ' ';
        // }
        // console.log(lotto);
        // document.write(`<h1>${lotto}</h1>`);

        // const start = 1;
        // const end = 49;
        // let lotto = '';
        // for (let i = 0; i < 6; i++) {
        //     // console.log(Math.floor(Math.random() * (end - start + 1)) + start);
        //     number = Math.floor(Math.random() * (end - start + 1)) + start;
        //     // console.log('第' + (i + 1) + '個號碼:' + number);
        //     console.log(`第${i + 1}個號碼:${number}`);
        //     document.write(`<h1>${number}</h1>`);
        //     lotto += number + ' ';
        // }
        // console.log(lotto);
        // document.write(`<h1>${lotto}</h1>`);


        // const start1 = 1;
        // const end1 = 49;

        // for (let j = 0; j < 10; j++) {
        //     let lotto1 = '';
        //     document.write(`<h1>第${j+1}組號碼:</h1>`);
        //     console.log(`第${j+1}組號碼:`);
        //     for (let i = 0; i < 6; i++) {              
        //         // console.log(Math.floor(Math.random() * (end - start + 1)) + start);
        //         number1 = Math.floor(Math.random() * (end1 - start1 + 1)) + start1;              
        //         // console.log('第' + (i + 1) + '個號碼:' + number1);
        //         console.log(`第${i + 1}個抽出的號碼:${number1}`);                
        //         document.write(`第${i + 1}個抽出的號碼:${number1}</h1><br>`);
        //         lotto1 += number1 + ' ';
        //     }
        //     console.log(lotto1);
        //     document.write(`<h1>${lotto1}</h1>`);
        //     document.write(`<h1>-------------</h1>`);
        // }

        // 2021-12-29
        // const start = 1;
        // const end = 49;
        // for (let j = 0; j < 5; j++){
        // let lotto = '';
        // for (let i = 0; i < 6; i++) {
        //         // console.log(Math.floor(Math.random() * (end - start + 1)) + start);
        //         number = Math.floor(Math.random() * (end - start + 1)) + start;
        //         // console.log('第' + (i + 1) + '個號碼:' + number);
        //         // console.log(`第${i + 1}個號碼:${number}`);
        //         lotto += number + ' ';
        //     }
        //     console.log(lotto);
        //     document.write(`<h1>${lotto}</h1>`);
        // }
    // 產生出五組號碼的清單       
    //     const start = 1;
    //     const end = 49;
    //     lottoEl='<ul>';
    //     for (let j = 0; j < 5; j++) {
    //     let lotto = '';
    //         for (let i = 0; i < 6; i++) {
    //             number = Math.floor(Math.random() * (end - start + 1)) + start;
    //             lotto += number + '&nbsp&nbsp&nbsp&nbsp&nbsp';
    //         }
    //         lottoEl+=`<li>${lotto}</li>`;
    // }
    //     lottoEl+='</ul>';
    //     console.log(lottoEl);
    //     document.write(`<h1>${lottoEl}</h1>`);
    
    // 寫成function
    // console.log(getLottoNumber(1,49,6,true));
    // function getLottoNumber(start,end,numbers,special=false){
    //     let lotto=[];
    //     // 一般號碼
    //     for (let i = 0; i < numbers; i++) {
    //     number = Math.floor(Math.random() * (end - start + 1)) + start;
    //     lotto.push(number);
    //     }
    //     // 特殊號碼
    //     if (special){
    //         number = Math.floor(Math.random() * (end - start + 1)) + start;
    //         lotto.push(number);
    //     }
    //     return lotto;
    // }
    //     const start = 1;
    //     const end = 49;
    //     const count = 5;
    //     // const start = prompt('輸入起始號碼:');
    //     // const end = prompt('輸入結束號碼:');
    //     // const count = prompt('輸入需要產生几組號碼:');
    //     lottoEl='<ul>';
    //     for (let j = 0; j < count; j++) {
    //     let lotto = getLottoNumber(start,end,6,true);
    //     // let lotto = getLottoNumber(Number(start),Number(end),Number(count),true);
    //     lotto = lotto.join('  ');
    //     lottoEl+=`<li>${lotto}</li>`;
    // }
    //     lottoEl+='</ul>';
    //     console.log(lottoEl);
    //     document.write(`<h1>${lottoEl}</h1>`);

// // // 寫成函數
// const get_ramdom_number=(start,end) => {
//     return Math.floor(Math.random() * (end - start + 1)) + start;
// }
// function getLottoNumber(start,end,numbers,special=false){
//     let lotto=[];
//     let count=0;
//     do {
//         number = get_ramdom_number(start,end);
//         if (!lotto.includes(number)){
//             lotto.push(number);
//             count++;
//         }
//     // } while (lotto.length != numbers);
//     } while (count != numbers);
//     // 一般號碼
//     // for (let i = 0; i < numbers; i++) {
//     // number = Math.floor(Math.random() * (end - start + 1)) + start;
//     // lotto.push(number);
    
//     lotto.sort((a,b)=>{
//         return a-b;
//     });

//     // 特殊號碼
//     if (special){
//         number = get_ramdom_number(start,end);
//         if (!lotto.includes(number)) lotto.push(number) ;
//     }
//     return lotto;
// }

//     const start = 1;
//     const end = 49;
//     const count = 5;
//     lottoEl='<ul>';
//     for (let j = 0; j < count; j++) {
//     let lotto = getLottoNumber(start,end,6,true);
//     lotto = lotto.join('  ');
//     lottoEl+=`<li>${lotto}</li>`;
// }
//     lottoEl+='</ul>';
//     console.log(lottoEl);
//     document.write(`<h1>${lottoEl}</h1>`);
// #--------
// const title = document.querySelector('h1');
// const subtitle = document.querySelector('h3');
// const startBtn = document.querySelector('#start');
// const lottoEl = document.querySelector('.lotto-number');

// console.log(startBtn,lottoEl);

// startBtn.addEventListener('click', () => {
//     console.log('click!');
// });

// console.log(title);
// console.log(subtitle);
// title.innerText='大樂透號碼:';
// title.style.textAlign='center';
// subtitle.innerHTML=`<h2><i>${subtitle.innerText}</i></h2>`;
// subtitle.style.backgroundColor='red';
// subtitle.style.color='white';
// const titles=document.querySelectorAll('h1');
// console.log(titles);
// console.log(titles.length);
// #-------

// // 寫成函數
const get_ramdom_number=(start,end) => {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
function getLottoNumber(start,end,numbers,special=false){
    let lotto=[];
    let count=0;
    do {
        number = get_ramdom_number(start,end);
        if (!lotto.includes(number)){
            lotto.push(number);
            count++;
        }
    // } while (lotto.length != numbers);
    } while (count != numbers);
    // 一般號碼
    // for (let i = 0; i < numbers; i++) {
    // number = Math.floor(Math.random() * (end - start + 1)) + start;
    // lotto.push(number);
    
    lotto.sort((a,b)=>{
        return a-b;
    });

    // 特殊號碼
    if (special){
        number = get_ramdom_number(start,end);
        if (!lotto.includes(number)) lotto.push(number) ;
    }
    return lotto;
}

    const start = 1;
    const end = 49;
    const count = 5;
//     lottoEl='<ul>';
//     for (let j = 0; j < count; j++) {
//     let lotto = getLottoNumber(start,end,6,true);
//     lotto = lotto.join('  ');
//     lottoEl+=`<li>${lotto}</li>`;
// }
//     lottoEl+='</ul>';
//     console.log(lottoEl);
//     document.write(`<h1>${lottoEl}</h1>`);

const title = document.querySelector('h1');
const subtitle = document.querySelector('h3');
const startBtn = document.querySelector('#start');
const lottoEl = document.querySelector('.lotto-number');

console.log(startBtn,lottoEl);

startBtn.addEventListener('click', () => {
    console.log('click!');
    lottoEl.innerHTML='<ul>';
    for (let j = 0; j < count; j++) {
    let lotto = getLottoNumber(start,end,6,true);
    lotto = lotto.join('&nbsp;&nbsp');
    lottoEl.innerHTML+=`<li>${lotto}</li>`;
}
    lottoEl.innerHTML+='</ul>';

});



console.log(title);
console.log(subtitle);
title.innerText='大樂透號碼:';
title.style.textAlign='center';
subtitle.innerHTML=`<h2><i>${subtitle.innerText}請安按鈕開始!</i></h2>`;
subtitle.style.backgroundColor='red';
subtitle.style.color='white';
const titles=document.querySelectorAll('h1');
console.log(titles);
console.log(titles.length);

    // //全域變數
    // let x = 10;
    // {
    //     //區域變數
    //     x = 50
    //     let y = 20;
    //     console.log(x);
    //     console.log(x + y);
    // }
    // console.log(x);

    // const PI = 3.1415926;
    // let radius = prompt('輸入半徑:');
    // let radius = Number(prompt('輸入半徑:'));
    // console.log(radius + 10);
    // console.log(radius - 10);
    // let aera = radius * radius * PI;
    // console.log(radius, aera);
    // console.log(typeof (radius), aera);
    // document.write(typeof (radius), aera)
    // document.write('<h1>' + aera + '</h1>')