function StrMethod(num){
    let Str = num.toString()
    let reverse = Str.split("").reverse().join("");
    if(Str === reverse){
        console.log(`${num} is Palindrome`);
    }else{
        console.log(`${num} is not a Palindorme`);
    }
}

StrMethod(11211211);

function divison(num){
    let Number = num;
    let reverse = 0;
    while(num>0){
        let char = num%10;
        reverse = reverse*10+char;
        num = Math.round(num/10);
    }
    if(reverse === Number){
        console.log(`${Number} is palindrome`);
    }else{
        console.log(`${Number} is not a palindrome`)
    }
}

divison(12121)