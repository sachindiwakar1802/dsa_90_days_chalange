function array_equal(arr1,arr2){
  let res = []
  if(arr1.length===arr2.length){
    for(let i = 0;i<arr1.length;i++){
      for(let j=0;j<arr2.length;j++){
        if(arr1[i]!==arr2[j]){
          //console.log(j)
        }
      }
    }
  return 1
  }
  return -1
}

let arr1 =[1,3,2];
let arr2 =[1,2,3];

let result = array_equal(arr1,arr2);
console.log(result)