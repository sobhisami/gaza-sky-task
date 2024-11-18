let num = [1,2,3,4,5,6,7,8,9,10]

let sum= num.reduce((p,c)=>{
    return p+c;
})
let average = sum/num.length;
console.log("sum the arr: "+sum);
console.log("average the arr: "+average);