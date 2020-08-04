// 实现 trim
function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "");
    
}


// const trim = (str) => {
//     return str.replace(/^(\s)+(.+)(\s)+$/, '$2')
// }

// '    1   '   =>. '1'
// console.log(trim(' dkosd fds '))



// 输入：


// 写一个日期格式化函数
const dateFormat = (dateInput, format)=>{
  // todo
    let year = dateInput.getFullYear()
    let month = dateInput.getMonth() + 1;
    let day = dateInput.getDate()
    let reg = /yyyy(.){1}MM(.){1}dd(.?)/
    // console.log(reg.exec(format))
    let arr = []
    for(let i = 0;i<3;i++){
        arr.push(reg.exec(format)[i+1]) 
    }
    // console.log(year,month,day);
    return `${year}${arr[0]}${month}${arr[1]}${day}${arr[2]}`
}

// const dateFormat = (dateInput, format) => {
//     // todo
//     let y = dateInput.getFullYear();
//     let m = dateInput.getMonth() + 1;
//     let d = dateInput.getDate();
//     return format
//         .replace(/(y|Y){4}/, y)
//         .replace(/(m|M){2}/, m >= 10 ? m : "0" + m)
//         .replace(/(d|D){2}/, d >= 10 ? d : "0" + d)
// }


// console.log(dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd')) 
// 2020/12/01
// console.log(dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd'))
 // 2020/04/01
 console.log(dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日'))
 // 2020年04月01日