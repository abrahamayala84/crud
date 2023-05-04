const inputs = document.querySelector('#title')
const inputs2 = document.querySelector('#nombre')
const fecha = document.querySelector('#datetime')
const boton_save = document.querySelector('#save')
const contenedor = document.querySelector('.container')
const form = document.querySelector('.form')
const table = document.querySelector('.tablas')



document.addEventListener('DOMContentLoaded', () => {

    const task = JSON.parse(localStorage.getItem('datos')) ;

if (task === null) {
  
   
   let parrafos = document.createElement('h4')
  let texto = document.createTextNode('Sin tareas')
  parrafos.appendChild(texto)
  contenedor.appendChild(parrafos)

    console.log('hola')
}else{
    
   imprimir()
    console.log('hay')
}

boton_save.addEventListener('click', () => {
const task = JSON.parse(localStorage.getItem('datos')) || [] ;


    const inputses = {
        tareas : inputs.value,
        nombre : inputs2.value,
        fecha : fecha.value,
    }
    task.push(inputses)
    localStorage.setItem('datos', JSON.stringify(task) );
        
    location.reload();
    console.log(inputses)


})

function imprimir(){
    
    for (let i = 0; i < task.length; i++){
    const parrafoss = document.createElement('p')
    const texto = document.createTextNode(task[i].nombre) 
    parrafoss.appendChild(texto)
    contenedor.appendChild(parrafoss)
    
    const tablas = document.createElement('div')
    const lista = document.createElement('ul')
    const lista2 = document.createElement('li')
    const lista3 = document.createTextNode(task[i].tareas)

    const lista22 = document.createElement('li')
    const lista333 = document.createTextNode(task[i].nombre)

    const lista23 = document.createElement('li')
    const lista33 = document.createTextNode(task[i].fecha)
    
    const lista222 = document.createElement('li')
    const botones = document.createElement('button')
    let edit = document.createTextNode('edit')

    const lista4 = document.createElement('li')
    const botone = document.createElement('button')
    let completado = document.createTextNode('completado')
     
   


    
    lista.appendChild(lista2)
    lista2.appendChild(lista3)
    tablas.appendChild(lista)
    table.appendChild(tablas)
  
    lista.appendChild(lista22)
    lista22.appendChild(lista333)

    lista.appendChild(lista23)
    lista23.appendChild(lista33)

    lista222.appendChild(botones)
    botones.appendChild(edit)
    table.appendChild(lista222)
    tablas.appendChild(lista222)

    lista4.appendChild(botone)
    botone.appendChild(completado)
    table.appendChild(lista4)
    tablas.appendChild(lista4)

   

   botone.addEventListener('click', function() {
    task.splice(i, 1, )
    localStorage.setItem('datos', JSON.stringify(task))
    tablas.innerHTML = '';
    location.reload();
   
   })

 botones.addEventListener('click', function() {


   
    localStorage.setItem('datos', JSON.stringify(task))
    const x = document.createElement('input')
    const z = document.createElement('input')
    
    
    x.value = task[i].tareas;
    z.value = task[i].nombre;
    
    
    tablas.appendChild(x)
    tablas.appendChild(z)

    const actualizar = document.createElement('button')
    const text1 = document.createTextNode('actualizar')
    
    actualizar.appendChild(text1)
    tablas.appendChild(actualizar)

    actualizar.addEventListener('click', (e) =>{
        e.preventDefault();
        const ter = {
        tareas : x.value,
        nombre : z.value,
        fecha: fecha.value,
        }
        
        task.splice(i , 1, ter)
        localStorage.setItem('datos', JSON.stringify(task));
       
        location.reload();
        console.log(task)
    })

    
    
 })   
  

console.log(task)


    } 
    
}




})

