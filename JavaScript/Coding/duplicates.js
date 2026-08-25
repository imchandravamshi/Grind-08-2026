function duplicates(arr){
    let temp = arr[0];
    let checker = [];
    for(let x =1; x<arr.length; x++){
       
       if(checker.at(-1)=== arr[x]){
        continue;
       }else if(temp === arr[x]){

            checker.push(temp);
        }
        temp = arr[x];
        
    }
    console.log(checker)
}
duplicates([1,1,2,3,3,4,5,5,5])