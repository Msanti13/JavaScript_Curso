package mipaquete;

public class Persona {
    //Atributos
    String nombre;
    int edad;
    String correo;
    String telefono;
    String direccion;
    
    

    //Constructor metodo especial que se ejecuta cuando se crea un objeto
    public Persona(String nombre, int edad, String correo, String telefono, String direccion){

        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
        
    }

    //Metodos
    public void saludar(){
        System.out.println("Hola soy "+nombre);
    }

    

}
