function prime(num){
    let temp =0;
    let flag;
    if(num<1){
        flag = 1;
    }
    if(num === 2 ){
        flag = 0; 
    }
    for(let x = 2; x<num; x++){
        temp = num%x;
        if(temp === 0){
            flag = 1;
            break;
        }
    }
    if(flag === 1){
        console.log("Not a prime number");
        
    }else{
        console.log("Prime number");
        
    }
}
prime(9)