public class NonPrimitive {
    int x;
    int y;
    public static void main(String[] args) {
        NonPrimitive a1 = new NonPrimitive();
        a1.x = 29;
        a1.y = 12;
        NonPrimitive a2 = a1;
        a2.y = 29;
        System.out.println("a2.x = " + a2.x + " "+ "a1.y =" + a1.x);

    }
}