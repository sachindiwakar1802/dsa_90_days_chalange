function roate_left(arr){
        let first = arr[0];
        for(let i=0;i<arr.length;i++){
            arr[i]=arr[i+1];
        }
        arr[arr.length-1]=first;
        return arr;
        }

        let arr = [1,2,3,4];
        let result = roate_left(arr);
        console.log(result);