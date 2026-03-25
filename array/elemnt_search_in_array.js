// search elemnent in array 

function searcharray(arr,x){
  for(let i=0;i<arr.length;i++){
    if(x===arr[i])
      return -1;
  }
   return "not found"
}
let arr = [1,3,4,6,7];
let x = 0;

let result = searcharray(arr,x);

console.log(result)