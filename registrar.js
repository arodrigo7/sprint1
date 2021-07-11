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

function validarCorreo(){
    correo=document.getElementById("correo").value
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido=expReg.test(correo);
    if (esValido==true){
        return esValido= true;
    }else{
        alert("Colocar un correo válido");
        return esValido= false;
    }
}

function validarContraseña(){
    
    let contra1=document.getElementById("pass").value;
    let contra2=document.getElementById("pass2").value;
    if (contra1===contra2){
        return passigual=true;
    }else{
        alert("Las contraseñas no son iguales");
        return passigual=false;
    }

}

function registrarUsuario(){    
    validarCorreo();
    validarContraseña();
    var usuarioNuevo;
    listaUsuario=[];
    let user=document.getElementById("usuario").value;
    let nombre=document.getElementById("nombreCompleto").value;
    console.log(nombre);
    let email=document.getElementById("correo").value;
    let telefono=document.getElementById("telefono").value;
    let direccion=document.getElementById("direccion").value;
    let contrasena=document.getElementById("pass").value;
    console.log(contrasena);
    console.log(user);
    if(user =="" || nombre =="" || email =="" || telefono=="" || direccion =="" || contrasena==""){
        alert("Cuidado tiene campos sin completar");
    }if(esValido==false){
        //alert("Colocar un correo válido");       
    }if(passigual==false){
        //alert("Las contraseñas no son iguales");
    }else{
        alert("podemos guardar todo en un objeto");
        document.getElementById("texto").innerHTML = "Usuario grabado con éxito";
        usuarioNuevo=new Usuarios(user,nombre,email,telefono,direccion,contrasena);
        listaUsuario.push(usuarioNuevo);
        console.log(listaUsuario);
        console.log(usuarioNuevo);
    }
       
        
}

function emailDucplicado(){
    usuarios.forEach(function(nuevo){
        if (email==nuevo[2]){
            autentificacion = true;                      
        } 
    })
}