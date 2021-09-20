import Product from './product.js';
import Inventory from './inventory.js';

class App{
    constructor(){
        this.inventory= new Inventory();

        let btnAdd= document.querySelector("#btnAdd");
        btnAdd.addEventListener("click", this.addProduct);

        let btnList= document.querySelector("#btnList");
        btnList.addEventListener("click",this.listProduct);

        let btnInverseList= document.querySelector("#btnInverseList");
        btnInverseList.addEventListener("click", this.inverseListProduct);

        let btnSearch= document.querySelector("#btnSearch");
        btnSearch.addEventListener("click", this.searchProduct)

        let btnDelete= document.querySelector("#btnDelete");
        btnDelete.addEventListener("click", this.deleteProduct)

        let btnInsert= document.querySelector("#btnInsert");
        btnInsert.addEventListener("click", this.insertProduct)
    }
    
    addProduct = () => {
        let product= Product.readForm();

        if(!product){
            Swal.fire("Error", "Todos los campos son requeridos", "error");
            return;
        }
        
        if(this.inventory.inventory.length < 20){
        let added= this.inventory.add(product);
        console.log(added);
        console.log(this.inventory.inventory.length);
        console.log(app.inventory.inventory);

        if(added === null){
            Swal.fire("Error", "Producto ya registrado", "error");
            return;
        }

        Swal.fire("Correcto", "Se agregó un nuevo producto", "success");
        document.getElementById('details').innerHTML= 
        `<p> El producto ${product.getName()} fue agregado correctamente</p>`
        }else{
        Swal.fire("Error", "El inventario está lleno", "error")
        }
    }

    listProduct = () => {
        return this.inventory.list();
    }
    
    inverseListProduct = () => {
        return this.inventory.inverseList();
    }

    searchProduct = () => {
        let code= document.querySelector("#code").value;
        let pSearch= this.inventory.search(code);
        if(pSearch === null){
            document.getElementById('details').innerHTML=
            `<p> Este producto no existe</p>`
        } else{
            document.getElementById('list').innerHTML=
            `<p>Producto encontrado: ${pSearch.getDetails()}</p>`;
        }
    }

    deleteProduct = () => {
        let code= document.querySelector("#code").value;
        let deleted=this.inventory.delete(code);
        if(deleted != null){
            document.getElementById('details').innerHTML=
            `<p> El producto ${deleted.getName()} ha sido eliminado</p>`
            Swal.fire("Correcto", "Se he eliminado correctamente el producto", "success");
        } else{
            document.getElementById('details').innerHTML=
            `<p> No se puede eliminar un producto inexistente</p>`
            Swal.fire("Error", "No se puede eliminar un producto inexistente", "error");
        }
    }

    insertProduct = () => {
        let position= document.querySelector("#insertCode").value;

        let product= Product.readForm()

        if(!product){
            Swal.fire("Error", "Todos los campos son requeridos", "error");
            return;
        }

        if(position <= this.inventory.inventory.length && this.inventory.inventory.length<20){
            this.inventory.insert(position, product);
            document.getElementById('details').innerHTML=
            `<p>El producto ${product.getName()} fue agregado correctamente en la posición ${position}</p>`
        }else{
            document.getElementById('details').innerHTML=
            `<p>No se puede insertar el producto en esa posición</p>`
        }
    }

}

let app= new App;

