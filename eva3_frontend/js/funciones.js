var ordenes =[];
ordenes.push(new Servicios("11111","11.111.111-1","DANIEL","PERALTA","56912345678","DISEÑO JARDIN","COMPLETO","12","10","OCASION ESPECIAL","NO","CESPED TIPO ALFOMBRA"));
ordenes.push(new Servicios("22222","22.222.222-2","DANIELA","CID","56998765432","MANTENCION JARDIN","BASICO","122","100","MODERNO","SI","NO POSEE"));


function listarOrdenes(){
    var filas="";
    for(var i=0; i<ordenes.length;i++){
      var o = ordenes[i];
      filas = filas + "<tr>";
         filas = filas + "<td>" +o.orden.toUpperCase()+ "</td>";
         filas = filas + "<td>" +o.rut.toUpperCase()+ "</td>";
         filas = filas + "<td>" +o.nombre.toUpperCase()+ "</td>";
         filas = filas + "<td>" +o.apellido.toUpperCase()+ "</td>";
         filas = filas + "<td>" +o.telefono.toUpperCase()+ "</td>";
         filas = filas + "<td>" +o.servicio.toUpperCase()+ "</td>";
         filas = filas + "<td>" +o.tipoServicio.toUpperCase()+ "</td>";
         filas = filas + "<td>" +o.largo.toUpperCase()+ "</td>";
         filas = filas + "<td>" +o.ancho.toUpperCase()+ "</td>";
         filas = filas + "<td>" +o.tipoJardin.toUpperCase()+ "</td>";
         filas = filas + "<td>" +o.riego.toUpperCase()+ "</td>";
         filas = filas + "<td>" +o.tipoCesped.toUpperCase()+ "</td>";
      filas = filas + "</tr>" 
    }
    document.getElementById("tabladatos").innerHTML = filas;
}

function limpiarTabla(){
    document.getElementById("txtor").value = "";
    document.getElementById("txtrut").value = "";
    document.getElementById("txtnom").value = "";
    document.getElementById("txtape").value = "";
    document.getElementById("txttel").value = "";
    document.getElementById("opser").value = "";
    document.getElementById("optipc").checked = true;
    document.getElementById("txtlar").value = "";
    document.getElementById("txtan").value = "";
    document.getElementById("opjar").value = "";
    document.getElementById("opriesi").checked = true;
    document.getElementById("opces").value = "";
}

function agregarOrden(){
    var or = document.getElementById("txtor").value;
    var rut = document.getElementById("txtrut").value.toUpperCase();
    var nom = document.getElementById("txtnom").value.toUpperCase();
    var ape = document.getElementById("txtape").value.toUpperCase();
    var tel = document.getElementById("txttel").value;
    var ser = document.getElementById("opser").value.toUpperCase();

    var tip = "";
    if(document.getElementById("optipc").checked === true){
        tip = "Completo";
    }else if(document.getElementById("optipb").checked === true){
        tip = "Basico";
    }
    
    var lar = document.getElementById("txtlar").value;
    var an = document.getElementById("txtan").value;
    var jan = document.getElementById("opjar").value.toUpperCase()

    var rie = "";
    if(document.getElementById("opriesi").checked === true){
        rie = "Si";
    } else if(document.getElementById("oprieno").checked === true){
        rie = "No";
    }

    var ces = document.getElementById("opces").value.toUpperCase();

    var errores = "";

    if(or.trim().length<4 || or.trim().length>5){
      errores = errores + "El numero de orden debe tener entre 4 y 5 caracteres.\n";
    }else{
      for(var i=0; i<ordenes.length; i++){
        o = ordenes[i];
        if(or === o.orden){
          errores = errores + "El numero de orden ("+or+") ya existe. Ingrese uno diferente.\n";
        }
      }
    }

    if(rut.trim().length<11 || rut.length>12){ 
        errores = errores + "El rut debe contener entre 11 y 12 caracteres.\n";
    }

    if(nom.trim().length<1 || nom.trim().length>30){
        errores = errores +"El nombre debe tener entre 1 y 30 caracteres.\n";
    }
    if(ape.trim().length<1 || ape.trim().length>30){
        errores = errores +"El apellido debe tener entre 1 y 30 caracteres.\n";
    }

    if(tel.trim().length !==11){
        errores = errores +"El telefono debe tener 11 numeros.\n";
    }else{
        if(tel.substr(0,3) !== "569"){
            errores = errores + "El telefono debe contener '569'.\n";
        }
    }
    if(ser ===""){
        errores = errores +"Debe seleccionar un tipo de servicio.\n";
    }
    if(lar.trim().length<1 || lar.trim().length>3){
        errores = errores +"El largo del jardin debe tener entre 1 y 999mts.\n";
    }
    if(an.trim().length<1 || lar.trim().length>3){
        errores = errores +"El ancho del jardin debe tener entre 1 y 999mts.\n";
    }
    if(jan ===""){
        errores = errores +"Debe seleccionar un tipo de jardin.\n";
    }
    if(ces ===""){
        errores = errores +"Debe seleccionar un tipo de jardin.\n";
    }



    if(errores ===""){    

        var o = new Servicios(or,rut,nom,ape,tel,ser,tip,lar,an,jan,rie,ces);
        ordenes.push(o);
        listarOrdenes();
        limpiarTabla();

        var msg =   '<div class="alert alert-success alert-dismissible fade show" role="alert">';
        msg = msg + '<h5>Orden agregada con Exito</h5>';
        msg = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        msg = msg + '</div>';
        document.getElementById("mensajes").innerHTML =msg;
    }else{
        alert(errores);
    }

}

function consultar(){
    var orden = document.getElementById("txtor").value;
    if(orden.trim().length === 0){
        alert("Digite el numero de orden entre 4 y 5 caracteres");
    }else{
        var sw = 0;
        for(var i=0; i<ordenes.length; i++){
            var o = ordenes [i];
            if(orden === o.orden){
                sw =1;
                document.getElementById("txtrut").value = o.rut;
                document.getElementById("txtnom").value = o.nombre;
                document.getElementById("txtape").value = o.apellido;
                document.getElementById("txttel").value = o.telefono;
                document.getElementById("opser").value = o.servicio;
                
                
                if(o.tipoServicio === "COMPLETO"){
                    document.getElementById("optipc").checked = true;
                }else if(o.tipoServicio === "BASICO"){
                    document.getElementById("optipb").checked = true;
                }

                document.getElementById("txtlar").value = o.largo;
                document.getElementById("txtan").value = o.ancho;
                document.getElementById("opjar").value = o.tipoJardin;

                if(o.riego ==="SI"){
                    document.getElementById("opriesi").checked = true;
                }else if(o.riego === "NO"){
                    document.getElementById("oprieno").checked = true;
                }
                
                document.getElementById("opces").value = o.tipoCesped;
                break;
            }
        }
        var msg = '';
        if( sw === 0 ){
          msg = msg + '<div class="alert alert-success alert-dismissible fade show" role="alert">';
          msg = msg + '<h5>Orden ('+orden+') No encontrada. Ingrese una nueva o agregue.</h5>';
          msg = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
          msg = msg + '</div>';
        }else if( sw === 1 ){
          msg = msg + '<div class="alert alert-success alert-dismissible fade show" role="alert">';
          msg = msg + '<h5>Orden encontrada. Puede modificar o eliminar</h5>';
          msg = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
          msg = msg + '</div>';
        }
        document.getElementById("mensajes").innerHTML = msg;
    
    }
}



function EliminarOrden(){
    var orden = document.getElementById("txtor").value.toUpperCase()

    if(orden.trim().length<1 || orden.trim().length>5){
        alert("Para eliminar ingrese un numero de orden valido entre 4 y 5 caracteres");
    }else{
        var sw = 0;
        for(var i=0; i<ordenes.length; i++){
            var o = ordenes[i];
            if(orden === o.orden){
                var x = confirm("Seguro de querer eliminar la Orden ("+orden+")?");
                if(x === true){
                    sw = 1;
                    ordenes.splice(i, 1);
                    break;
                }else{
                    sw = 2;
                    break;
                }
            }
        }
        var msg = '';
        if( sw === 0 ){
          msg = msg + '<div class="alert alert-success alert-dismissible fade show" role="alert">';
          msg = msg + '<h5>Orden ('+orden+') No encontrada. Ingrese una nueva.</h5>';
          msg = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
          msg = msg + '</div>';
        }else if( sw === 1 ){
          msg = msg + '<div class="alert alert-success alert-dismissible fade show" role="alert">';
          msg = msg + '<h5>Orden eliminada con exito.</h5>';
          msg = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
          msg = msg + '</div>';
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarOrdenes();
        limpiarTabla();
    }
}



function modificarOrden(){

    var or = document.getElementById("txtor").value;
    var rut = document.getElementById("txtrut").value.toUpperCase();
    var nom = document.getElementById("txtnom").value.toUpperCase();
    var ape = document.getElementById("txtape").value.toUpperCase();
    var tel = document.getElementById("txttel").value;
    var ser = document.getElementById("opser").value.toUpperCase();

    if(or.trim().length<1 || or.trim().length>5){
        alert("Para modificar ingrese un numero de orden valido entre 4 y 5 caracteres.");
    }
    var tip = "";
    if(document.getElementById("optipc").checked === true){
        tip = "COMPLETO";
    }else if(document.getElementById("optipb").checked === true){
        tip = "BASICO";
    }

    var lar = document.getElementById("txtlar").value;
    var an = document.getElementById("txtan").value;
    var jan = document.getElementById("opjar").value.toUpperCase();

    var rie = "";
    if(document.getElementById("opriesi").checked === true){
        rie = "SI";
    } else if(document.getElementById("oprieno").checked === true){
        rie = "NO";
    }

    var ces = document.getElementById("opces").value.toUpperCase();

    var errores = "";

    if(rut.trim().length<11 || rut.length>12){ 
        errores = errores + "El rut debe contener entre 11 y 12 caracteres.\n";
    }

    if(nom.trim().length<1 || nom.trim().length>30){
        errores = errores +"El nombre debe tener entre 1 y 30 caracteres.\n";
    }
    if(ape.trim().length<1 || ape.trim().length>30){
        errores = errores +"El apellido debe tener entre 1 y 30 caracteres.\n";
    }

    if(tel.trim().length !==11){
        errores = errores +"El telefono debe tener 11 numeros.\n";
    }else{
        if(tel.substr(0,3) !== "569"){
            errores = errores + "El telefono debe contener '569'.\n";
        }
    }
    if(ser ===""){
        errores = errores +"Debe seleccionar un tipo de servicio.\n";
    }
    if(lar.trim().length<1 || lar.trim().length>3){
        errores = errores +"El largo del jardin debe tener entre 1 y 999mts.\n";
    }
    if(an.trim().length<1 || an.trim().length>3){
        errores = errores +"El ancho del jardin debe tener entre 1 y 999mts.\n";
    }
    if(jan ===""){
        errores = errores +"Debe seleccionar un tipo de jardin.\n";
    }
    if(ces ===""){
        errores = errores +"Debe seleccionar un tipo de jardin.\n";
    }
    
  
  
    if(errores ===""){    
        var sw=0;
        for(var i=0; i<ordenes.length;i++){
            var o = ordenes[i];
            if(or === o.orden){
                var x = confirm("Esta seguro de modificar los datos de la orden ("+or+") ?");
                if(x === true){
                    sw = 1;
                    ordenes[i].nombre = nom;
                    ordenes[i].apellido = ape;
                    ordenes[i].telefono = tel;
                    ordenes[i].servicio = ser;
                    ordenes[i].tipoServicio = tip;
                    ordenes[i].largo = lar;
                    ordenes[i].ancho = an;
                    ordenes[i].tipoJardin = jan;
                    ordenes[i].riego = rie;
                    ordenes[i].tipoCesped = ces;
            
                }
            }
        }
        var msg = '';
        if( sw === 1 ){
            msg = msg + '<div class="alert alert-success alert-dismissible fade show" role="alert">';
            msg = msg + '<h5>Orden modificada con exito.</h5>';
            msg = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg = msg + '</div>';
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarOrdenes();
        limpiarTabla();

    }else{
        alert(errores);
    }
}






















////////////////////////////////////////////////////////////////////////




// -----------------------------------------------
// --- FUNCIONES PARA VALIDAR EL CAMPO DEL RUT --- 
// -----------------------------------------------

// Capturando el DIV alerta y mensaje
var alerta = document.getElementById("alerta");
var mensaje = document.getElementById("mensaje");

// Permitir sólo números en el imput
function isNumber(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode === 75) return false;
  return true;
}


function checkRut(rut) {
  // Obtiene el valor ingresado quitando puntos y guión.
  var valor = clean(rut.value);

  // Divide el valor ingresado en dígito verificador y resto del RUT.
  cuerpo = valor.slice(0, -1);
  dv = valor.slice(-1).toUpperCase();

  // Separa con un Guión el cuerpo del dígito verificador.
  rut.value = format(rut.value);

  // Calcular Dígito Verificador "Método del Módulo 11"
  suma = 0;
  multiplo = 2;

  // Para cada dígito del Cuerpo
  for (i = 1; i <= cuerpo.length; i++) {
    // Obtener su Producto con el Múltiplo Correspondiente
    index = multiplo * valor.charAt(cuerpo.length - i);

    // Sumar al Contador General
    suma = suma + index;

    // Consolidar Múltiplo dentro del rango [2,7]
    if (multiplo < 7) {
      multiplo = multiplo + 1;
    } else {
      multiplo = 2;
    }
  }

  // Calcular Dígito Verificador en base al Módulo 11
  dvEsperado = 11 - (suma % 11);

  // Casos Especiales (0 y K)
  dv = dv == "K" ? 10 : dv;
  dv = dv == 0 ? 11 : dv;

}


function format (rut) {
  rut = clean(rut)

  var result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
  for (var i = 4; i < rut.length; i += 3) {
    result = rut.slice(-3 - i, -i) + '.' + result
  }

  return result
}


function clean (rut) {
  return typeof rut === 'string'
    ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()
    : ''
}
