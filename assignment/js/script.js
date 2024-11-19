// ex sum array and average
let num = [1,2,3,4,5,6,7,8,9,10]
//reduce func contain prev and currant so Iam use 
let sum= num.reduce((p,c)=>{
    return p+c;
}) //the strategy 1+2=3+3=6+4=10...
let average = sum/num.length; //length to index the array 
console.log("sum the arr: "+sum);
console.log("average the arr: "+average); 

//ex unique values
let name =["sobhi","sami","rami","sobhi","sobhi","sami"]
let unName=[...new Set(name)] //set remove the string similar
console.log(unName); //print new arr ["sobhi","sami","rami"]