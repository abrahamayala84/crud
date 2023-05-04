const nombres = document.querySelector('#nombres');
const boton_agregar = document.querySelector('#agendar');
const citas = document.querySelector('#citas');
const data = document.querySelector('.dvd')


document.addEventListener('DOMContentLoaded', () => {
    const agenda = JSON.parse(localStorage.getItem("agenda")) || {};
    
    if(agenda == null) {
        
        console.log("no hay")
    
    } else { 
        if(agenda.length > 0){

        for(let i = 0; i < agenda.length; i++) {
            
            const p = document.createElement('p');
const text = document.createTextNode('hay');

p.appendChild(text);
data.appendChild(p);

         
            console.log(agenda[i]);
            console.log("hay")
            
        
        }
    } else {
        const p = document.createElement('p');
const text = document.createTextNode('no hay elementos');
p.appendChild(text);
data.appendChild(p);
        
    }

    }
   


boton_agregar.addEventListener('click', function(e){
    e.preventDefault();
    const tareas = JSON.parse(localStorage.getItem('agenda')) || [];
    const nuevoNombre = nombres.value;
    const nuevoApellido = nombres1.value;
    var edades = edad.value;
    var telefonos = telefono.value;
    var direcciones = direccion.value;
    var doctores = doctor.value;
    
    tareas.push(nuevoNombre);
    tareas.push(nuevoApellido);
    tareas.push(edades);
    tareas.push(telefonos);
    tareas.push(direcciones);
    tareas.push(doctores);
    
    localStorage.setItem('agenda', JSON.stringify(tareas));
   
   
    console.log(agenda.length)
})
function table (){
    let tarea = JSON.parse(localStorage.getItem('agenda')) ;
    

   if (agenda.length > 0){
    
    const x = document.createElement('button')
    const y = document.createTextNode('editar')
     x.appendChild(y);
    imprimir6.appendChild(x)
    const v = document.createElement('button')
    const s = document.createTextNode('eliminar')
     v.appendChild(s);
    imprimir6.appendChild(v)
   

    imprimir.innerHTML = agenda[0];
    imprimir.innerHTML = agenda[1];
    imprimir2.innerHTML = agenda[2];
    imprimir3.innerHTML = agenda[3];
    imprimir4.innerHTML = agenda[4];
    imprimir5.innerHTML = agenda[5];

    
    
   }else{}
    console.log(tarea)
}

table()



function delet (i){
var tareas = JSON.parse(localStorage.getItem('tareas')) || [];
tareas = tareas.filter((value, index) => index !== i);
localStorage.setItem('agenda', JSON.stringify(agenda));

dvd.innerHTML ="";
for (let i = 0; i < tareas.length; i++){
	clientes(tareas, i)
}

}
    }
    
);



/*

var app = new function() {
	this.el = document.getElementById('tasks');
  
	this.tasks = [];
  
	
	
	this.FetchAll = function() {
	  var data = '';
  
	  if (this.tasks.length > 0) {
		for (i = 0; i < this.tasks.length; i++) {
		  data += '<tr>';
		  data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
		  data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
		  data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
		  data += '</tr>';
		}
	  }
  
	  this.Count(this.tasks.length);
	  return this.el.innerHTML = data;
	}};*/