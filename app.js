
const itemList = document.querySelector('#lista-items');

//esta función es para crear elementos en html y pasar elementos y pasarlos al DOM
function renderElemento(doc)
{
    let li= document.createElement('li');
    let nombre = document.createElement('span');
    let cantidad = document.createElement('span');

    li.setAttribute('data-id',doc.id);
    nombre.textContent = doc.data().nombre;
    cantidad.textContent = doc.data().cantidad;

    // ahora los pasamos al documento de html
    li.appendChild(nombre);
    li.appendChild(cantidad);

    itemList.appendChild(li);

}

// Trae todos los documents que haya en esta coleccion de datos
//es una petición asíncrona, va a tomar cierto tiempo, entonces no se puede poner como una variable  y se hace por medio de una promesa.
// un snapshot es una representación de los datos en esa colección, EN ESE Momento
db.collection('koronaitems').get().then((snapshot) =>
{
    //para cada snapshot que se crea, 
    snapshot.docs.forEach(doc => {
        //console.log(doc.data());
        renderElemento(doc);
    });
    // console.log(snapshot.docs);

})