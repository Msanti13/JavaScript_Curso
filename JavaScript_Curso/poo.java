class Usuario{
    //Atributos
    String nombre;
    int edad;
    String correo;
    String telefono;
    String direccion;

    //Constructor metodo especial que se ejecuta cuando se crea un objeto
    public Usuario(String nombre, int edad, String correo, String telefono, String direccion){

        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
        System.out.println("Hola soy un objeto");
    }

    //Metodos
    public void saludar(){
        System.out.println("Hola soy "+nombre);
    }
  
}

public class poo {
    
    public static void main(String[] args) {
        //Objetos
        //instanciar un objeto
        Usuario usa1 = new Usuario("Juan", 20, "as@.com", "123456", "calle 123");
      
        usa1.saludar();
        //nombre de la clase nombre del objeto = new nombre de la clase
        //clase objeto = new clase();

        //clase objeto = new clase(parametros);
    }
    
}
