import java.util.*;
public class swapTwoNums {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println("Initially : a = "+a + " b = "+ b);
        a = a+b;
        b = a-b;
        a = a-b;
        System.out.println("After swap : a = "+a+ " b = "+b);
    }
    
}
