package mipaquete;

public class jugador extends Persona //Hereda de la clase Persona
{

    int idjugador;

    public jugador(String nombre, int edad, String correo, String telefono, String direccion, int idjugador) {
        super(nombre, edad, correo, telefono, direccion);
        this.idjugador = idjugador;
    }

}
