class Usuarios {
    constructor( usuario, nombre,email,telefono,direccion,contraseña){
        this.usuario=usuario;
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
        this.raza=direccion;
        this.contraseña=contraseña;
    }
    //set modificar el estado de adopcion
    ModificarEstadoAdopcion(estado){
        return this.estadoAdopcion = estado 
    }

    //get informar el estado de adopcion
    informarEstadoAdopcion(){
        return this.estadoAdopcion
    }
}