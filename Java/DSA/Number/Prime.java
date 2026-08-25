import java.util.*;
public class Prime {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int flag =0;
        int mark = 0;
        if(num <= 1){
            flag = 1;
        }
        if(num == 2 ){
            flag =0;
        }
        for(int x=2; x<num; x++){
         mark = num%x;
         if(mark == 0){
            flag = 1;
            break;
         }
         }   
         if(flag == 1){
            System.out.println("Not a prime");
         }else{
            System.out.println("Prime number");
         }
        }
    }


