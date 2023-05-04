const contenedor = document.querySelector('#contenedor');
const add = document.querySelector('#add');
const boton = document.querySelector('#boton');
const add2 = document.querySelector('#add2');
const tabla = document.querySelector('#divTabla');
const d_all = document.querySelector('#d_all');
const form = document.querySelector('form');
 const content = document.querySelector('#content-table');

 

document.addEventListener('DOMContentLoaded', () =>{

  const taeras = JSON.parse(localStorage.getItem('datos'))
  console.log(taeras)

if(taeras === null){
  let parrafos = document.createElement('p')
  let texto = document.createTextNode('null')
  parrafos.appendChild(texto)
  tabla.append(parrafos)

}else{
  render(taeras)
 
}

  boton.addEventListener('click', (e) =>{
    e.preventDefault()

    const taeras = JSON.parse(localStorage.getItem('datos')) || {};
    var valor = add.value;
    var valor_dos = add2.value;
    
    
    const tarea = {
      'tareas': valor,
      'nombre': valor_dos,
    };
    taeras.push(tarea);
    

    localStorage.setItem('datos', JSON.stringify(taeras));
    tabla.innerHTML = '';

    if(taeras === null){
      let parrafos = document.createElement('p')
      let texto = document.createTextNode('null')
      parrafos.appendChild(texto)
      tabla.append(parrafos)
    
    }else{
      render(taeras)
     
    }
    
   

  })
  d_all.addEventListener('click', ( ) => {
    localStorage.setItem('datos', JSON.stringify([]))
    let parrafos = document.createElement('p')
    let texto = document.createTextNode('null')
    parrafos.appendChild(texto)
    tabla.append(parrafos)
  
    tabla.innerHTML = '';
  
  })
 

  function deleteLocalStorage (i, taeras){
    taeras.splice(i,1);
    localStorage.setItem('datos', JSON.stringify(taeras))
    tabla.innerHTML = '';
    render(taeras)
  }
  function render (taeras) {
    for(let i=0; i<taeras.length; i++){

      const ter = document.createElement('tr');
      const td_tareas = document.createElement('td') ;
      const td_text_tareas = document.createTextNode(taeras[i].tareas)
      td_tareas.appendChild(td_text_tareas)
      ter.appendChild(td_tareas)

      const tere = document.createElement('tr');
      const td_tarea = document.createElement('td') ;
      const td_text_tarea = document.createTextNode(taeras[i].nombre)
      td_tarea.appendChild(td_text_tarea)
      ter.appendChild(td_tarea)


      const td_botones = document.createElement('button') ;
      const td_text_botones = document.createTextNode('update')
      td_botones.appendChild(td_text_botones)
      ter.appendChild(td_botones)
      
      const td_boton = document.createElement('button') ;
      const td_text_boton = document.createTextNode('eliminar')
      td_boton.appendChild(td_text_boton)
      ter.appendChild(td_boton)

      const row = document.createElement('tr')
      row.innerHTML = ` <td><input value="${taeras[i].tareas}" /input></td>
                        <td><input value="${taeras[i].nombre}"/input></td>
                        <td>
                        <button onclick="saveTable(${i})">guardar</button>
                        <button>eliminar</button>
                        </td>`;
      content.appendChild(row);
       
  

      const tablas = document.createElement('div');
      const nombres_tareas = document.createTextNode(`${taeras[i].tareas}-${taeras[i].nombre}`);
  
      const botonDelete = document.createElement('button')
      const textoBotonDelete = document.createTextNode('eliminar')
      

      botonDelete.addEventListener('click', () => {
        deleteLocalStorage(i,taeras)
      })  
      td_boton.addEventListener('click', () => {
        deleteLocalStorage(i,taeras)
      }) 

      td_botones.onclick = () => {
        add.value = taeras[i].tareas;
        add2.value = taeras[i].nombre;
        boton.disabled = true;

        const boton_save = document.createElement('button');
        const boton_save_text = document.createTextNode('guardar')
        boton_save.appendChild(boton_save_text);

        boton_save.id = i;
        form.appendChild(boton_save);
        boton_save.onclick = (e) => {
          e.preventDefault();
          
          const tarea = {
            'tareas': add.value,
            'nombre': add2.value,}
         taeras.splice(i, 1, tarea);
         localStorage.setItem('datos', JSON.stringify(taeras));
         tabla.innerHTML = '';
         render(taeras)
         boton_save.hidden = true;
         
  window.location = "/crud.html"
        }
       
        
       }
  
      botonDelete.appendChild(textoBotonDelete)
      tablas.appendChild(nombres_tareas)
      ter.appendChild(botonDelete)
  
      tabla.appendChild(tablas)
      
      tabla.appendChild(botonDelete)
      
      tabla.append(ter)
    
   
    }
  }
  

})

function saveTables () {
  console.log(i);
 }