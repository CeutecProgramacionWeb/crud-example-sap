var alumnos = [];

function replaceWithAddForm(){
    let html = "<div class='col-sm-4'> <h2> Agregar Alumno </h2> </div> <form onsubmit='event.preventDefault(); addStudent();'><div class='col-md-4'> <div class='form-group'> <label for='cuenta'> Cuenta: </label> <input type='text' id='cuenta' class='form-control' placeholder='Numero de Cuenta'> <label for='nombre'> Nombre: </label> <input type='text' id='nombre' class='form-control' placeholder='Nombre'> </div> <input type='submit' value='Aceptar' class='btn btn-primary'></div> </form>";
    document.getElementById('container').innerHTML = html;
}

function addStudent(){
    let cuenta = document.getElementById('cuenta').value;
    let nombre = document.getElementById('nombre').value;
    let student = {cuenta: cuenta, nombre: nombre};
    alumnos.push(student);
    let html = ' <div class="row clearfix"> <div class="col-xs-6 col-sm-3 col-md-2 col-lg-2"> <button type="button" class="btn btn-primary" onclick="replaceWithAddForm();">Crear</button> </div> </div> <br> <div class="table-responsive"> <table class="table table-hover"> <tr> <th> Nombre </th> <th> Numero de cuenta </th> <th> Opciones </th> </tr>';
    for(let i = 0; i<alumnos.length; i++){
        html+='<tr> <td>' + alumnos[i].nombre + '</td><td>' + alumnos[i].cuenta + '</td><td><button type="button" class="btn btn-danger" data-val-id ="'+ alumnos[i].cuenta  +'" onclick="deleteStudent(this);">Borrar</button></td></tr>';
    }
   
    html+='</table></div>';
    document.getElementById('container').innerHTML = html;
}

function deleteStudent(element){
    let id = element.getAttribute("data-val-id");
    let index = -1;
    for(let i = 0; i< alumnos.length; i++){
        if(alumnos[i].cuenta === id){
            index = i;
            break;
        }
    }

    if(index !==-1){
        alumnos.splice(index, 1);
    }

    let html = ' <div class="row clearfix"> <div class="col-xs-6 col-sm-3 col-md-2 col-lg-2"> <button type="button" class="btn btn-primary" onclick="replaceWithAddForm();">Crear</button> </div> </div> <br> <div class="table-responsive"> <table class="table table-hover"> <tr> <th> Nombre </th> <th> Numero de cuenta </th> <th> Opciones </th> </tr>';
    for(let i = 0; i<alumnos.length; i++){
        html+='<tr> <td>' + alumnos[i].nombre + '</td><td>' + alumnos[i].cuenta + '</td><td><button type="button" class="btn btn-danger" data-val-id ="'+ alumnos[i].cuenta  +'" onclick="deleteStudent(this);">Borrar</button></td></tr>';
    }
   
    html+='</table></div>';
    document.getElementById('container').innerHTML = html;
}