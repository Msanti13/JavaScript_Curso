
public class main {
    public static void main(String[] args) {
        byte b = 127;
        short s = 32767;
        int a = 40000;
        long l = 1000000000; // 1 billion de datos
        float f = 3.1416f; //decimal
        double d = 3.1416; //decimal
        char c = 'a'; //caracter solo una letra
        boolean bo = true; //true or false
        b = 80;
        //Constantes con final
        final byte  M = 80; //diferencia con variable que no se puede moficar su valor
                
        System.out.println("esto es una vuiable: " + b);
        System.out.println("esto es una constante: "+ M);

        //Operadores
        int x = 5;
        int y = 2;
        int z = x + y;
        int w = x - y;
        int q = x * y;
        int r = x / y;
        System.out.println("Operadoes");
        System.out.println("La suma es: " + z);
        System.out.println("La resta es: " + w);
        System.out.println("La multiplicacion es: " + q);
        System.out.println("La division es: " + r);
        System.out.println("Mayo o no: "+ (x>y));
        System.out.println("Menor o no: "+ (x<y));
        System.out.println("Igual o no: "+ (x==y));
        System.out.println("Diferente o no: "+ (x!=y));


    }
    
}   