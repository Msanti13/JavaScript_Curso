package mipaquete;

public class main {

    public static void main(String[] args) {

        Persona persona1 = new Persona("Chispin", 30, "asdfdsf@.com", "123456", "calle 123");
        Persona persona2 = new Persona("Oscar", 35, "as@.com", "123456", "calle 123");
       
        persona1.saludar();
        persona2.saludar();
        persona1.edad = 40;

        Wokr trabajo1 = new Wokr("Diurna", 1000);
        trabajo1.trabajar();



        
        
        
    }

}
