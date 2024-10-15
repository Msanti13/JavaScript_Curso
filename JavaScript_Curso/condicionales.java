public class condicionales {
    public static void main(String[] args) {
        int num1 = 2;
        int num2 = 5;

        //condicional if
        if (num1 > num2) {
            System.out.println("El numero 2 es mayor que el numero 5");
        } 
        else if (num1 == num2) {
            System.out.println("El numero 2 es igual que el numero 5");
        }

        else {
            System.out.println("El numero 2 no es mayor que el numero 5");
        }

        //condicional switch
        int dia = 6;
        System.out.println("uso de switch");

        switch (dia) {
            case 1:
                System.out.println("Lunes");
                break;
            case 2:
                System.out.println("Martes");
                break;

            case 3:
                System.out.println("Miercoles");
                break;
            case 4:
                System.out.println("Jueves");
                break;
            case 5:
                System.out.println("Viernes");
                break;
            default:
                System.out.println("No es un dia de la semana");
                break;
        }

        //bucles while, cuando es false no se ejecuta
        var sudo = 0;
        while (sudo < 5) {
            System.out.println("El valor de sudo usando while es: " + sudo);
            sudo++;
        }

        //bucle do while se ejecuta al menos una vez
        var sudo2 = 0;
        do{
            System.out.println("El valor de sudo2 usando do while es: " + sudo2);
            sudo2++;}
        while(sudo2 > 10);

        //bucle for
        for (int i = 0; i < 5; i++) //concentra todo en una sola linea
        {
            System.out.println("El valor de i usando for es: " + i);
        }
      
    }
    
}
