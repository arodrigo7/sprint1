class Usuarios {
    constructor( usuario, nombre,email,telefono,direccion,contrasena){
        this.usuario=usuario;
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
        this.direccion=direccion;
        this.contrasena=contrasena;
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
 //////////////////////////////////////DECLARO VARIABLES Y CARGO USUARIOS ADMIN////////////////////////////// 
    var autentificacion = false
    var usuarioAdmin
    var usuarioNuevo;
    listaUsuario=[];

    usuarioAdmin=new Usuarios("rodrigo77","Asencio Alberto","rodrigo_tdf77@hotmail.com",2964405918,"goytisolo821","pepe77");
    listaUsuario.push(usuarioAdmin);
    usuarioAdmin=new Usuarios("caro","Musa Carolina","musa_tdf77@hotmail.com",2964408818,"goytisolo821","caro77");
    listaUsuario.push(usuarioAdmin);
    console.log(listaUsuario);
    console.log(usuarioAdmin);
    console.log(listaUsuario[0].email);

///////////////////////////valido correo que tenga un formato correcto, en formularuio onblur/////////////////////////
function validarCorreo(){
    correo=document.getElementById("correo").value
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido=expReg.test(correo);
    if (esValido==true){
       
    }else{alert("Colocar un correo válido");      
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////valido contraseña en formulario onblur//////////////////////////////////////////////
function validarContraseña(){
    
    let contra1=document.getElementById("pass").value;
    let contra2=document.getElementById("pass2").value;
    if (contra1===contra2){
         
    }else{
        alert("Las contraseñas no son iguales");
        
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////// Crear Cuenta //////////////////////////////////////////////////////////

function registrarUsuario(){
    autentificacion=false;
    let user=document.getElementById("usuario").value;
    let nombre=document.getElementById("nombreCompleto").value;    
    let email=document.getElementById("correo").value;
    let telefono=document.getElementById("telefono").value;
    let direccion=document.getElementById("direccion").value;
    let contrasena=document.getElementById("pass").value;
    let contrasena2=document.getElementById("pass2").value;
    console.log(contrasena);
    console.log(user);    
 
    /////////valido mail///////////////
    listaUsuario.forEach(function (elemento){
        console.log(elemento.email);
        if (email===elemento.email){
        autentificacion= true;
        console.log(autentificacion);    
        }
    })
   ///////////////////////////////////

   if (user =="" || nombre =="" || email =="" || direccion =="" || contrasena =="" || contrasena2==""){
    alert("Cuidado tiene campos sin completar"); 
   }else  if(contrasena!==contrasena2){
            alert (" las contraseñas no son iguales");
            }else if(autentificacion==true){
                alert("el email ya existe");                      
                }else{
                alert("podemos guardar todo en un objeto");
                document.getElementById("texto").innerHTML = "Usuario grabado con éxito";
                usuarioNuevo=new Usuarios(user,nombre,email,telefono,direccion,contrasena);
                listaUsuario.push(usuarioNuevo);
                console.log(listaUsuario);
                console.log(usuarioNuevo);
                } 
                   
}        