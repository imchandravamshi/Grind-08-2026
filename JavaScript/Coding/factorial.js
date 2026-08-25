function factorial(num){
    let fact = 1;
    for(let x =1; x<=num;x++){
        fact = fact * x;
    }
    console.log(fact);
    
}
factorial(5)