package mipaquete;

public class Wokr {

    String jornada;
    int salario;

    //Constructor
    public Wokr(String jornada, int salario){
        this.jornada = jornada;
        this.salario = salario;
    }

    

    public int cobrar(int salario) //usando return para devolver un valor
    {
        return salario * 12;
    }

    public void trabajar(){
        System.out.println("Estoy trabajando en la jornada "+jornada+ " y añ al año mi salario es "+cobrar(salario));
    }
}
