function right(arr){
  for(let i=0;i<arr.length;i++){
    let max = arr[i+1];
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]>max){
        max = arr[j]
            }
    }
     arr[i] = max;
    if(i==arr.length-1){
      arr[i]=-1;
    }
  }
  return arr
}
let arr = [2, 3, 1, 9]



let result = right(arr);
console.log(result);
