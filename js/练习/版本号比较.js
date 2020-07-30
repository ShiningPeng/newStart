// function compareVersion(str1, str2) {
//     let arr1 = str1.split('.')
//     let arr2 = str2.split('.')
//     let l = arr1.length > arr2.length ? arr1.length:arr2.length
//     if(arr1.length <= 4 ){
//         for(let i = 0;i<=4-arr1.length;i++){
//             arr1.push(0)
//         }
//     }
//     if(arr2.length <= 4 ){
//         for(let i = 0;i<=4-arr2.length;i++){
//             arr2.push(0)
//         }
//     }
//     for(let i = 0; i < l;i++){

//         if(arr1[i]>arr2[i]){
//             return 1
//         }else if(arr1[i]<arr2[i]){
//             return -1
//         }else{
//             continue
//         }

//     }
//     return 0

// }

function compareVersion(version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    let len = Math.max(v1.length, v2.length);
    for (let i = 0; i < len; i++) {
        let a = v1[i] ? v1[i] : '0';
        let b = v2[i] ? v2[i] : '0';
        a = +a;
        b = +b;
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        }
    }
    return 0;
}

console.log(compareVersion('7.5.4.3', '7.5.4.3'))
// 版本号排序
// ['7.4.5','1.5.4','7.5.3.1'].sort(compareVersion)