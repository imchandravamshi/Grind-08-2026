public class Primitive{
    public static void main(String args[]){
        int x = 24;
        int y = x; // x and y has seperate memory allocation
        y = 14; // So value of x not changes 
        System.out.println(x);
        System.out.println(y);
    }
}