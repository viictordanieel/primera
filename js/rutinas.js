function mensaje(){
    alert('Hola Mundo');
}
function formulario(){
    var nombre=document.getElementById("txtNom").value;
    var rut=document.getElementById("txtRut").value;
    var largo=rut.length;
    if (largo!=8) {
        alert("rut mal ingresado");
        return;
    }
    var suma=0;var mult=3;
    for (var index = 0; index < 8; index++) {
        var caracter=rut.substring(index,index+1);
        suma=suma+(parseInt(caracter)*mult);
        mult--;
        if (mult==1) {
            mult=7;
        }        
        
    }
    var dv=(11-(suma % 11));
    if (dv==10){
alert("K");
return;

    }  
    if (dv==11){
        alert(0);
        return;
        
            }  
    alert(dv);
}