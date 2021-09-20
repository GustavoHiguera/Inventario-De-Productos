export default class Inventory{
    constructor() {
        this.inventory= new Array();
    }

    add(product) {
        let pos= this.search(product.getCode());
        if(pos === null){
            this.inventory.push(product);
        }else{
            return null
        }
    }

    list(){
        for(let i=0; i<this.inventory.length; i++){
            document.getElementById('list').innerHTML+=
            `<p> ${this.inventory[i].getDetails()} </p>`;
        }
    }

    inverseList(){
        for(let i= this.inventory.length - 1; i >= 0; i--){
            document.getElementById('list').innerHTML+=
            `<p> ${this.inventory[i].getDetails()} </p>`;
        }
    }

    search(code){
        for(let i=0; i<this.inventory.length; i++){
            if(code === this.inventory[i].getCode()){
                console.log("success");
                console.log(this.getPosition(code));
                return this.inventory[i];
            }
        }
        return null;
    }

    getPosition(code){
        for(let i=0; i<this.inventory.length; i++){
            if(code === this.inventory[i].getCode()){
                return i;
            }
        }
        return null;
    }

    delete(code){
        let position= this.getPosition(code);
        let nextPosition= position + 1;
        if(position != null){
            while(nextPosition<this.inventory.length){
                let move= this.inventory[position];
                this.inventory[position]=this.inventory[nextPosition];
                this.inventory[nextPosition]=move;
                position++;
                nextPosition++;
            }
            return this.inventory.pop();
        }
        return null;
    }

    insert(position, product){
        position--;
        let newInventory= [];
        if(position++ == this.inventory.length){
            this.inventory.push(product);
        } else{
            for(let i=0; i<position; i++){
                newInventory.push(this.inventory[i]);
            }
            newInventory.push(product);
            for(let i=position; i<this.inventory.length; i++){
                newInventory.push(this.inventory[i]);
            }
            this.inventory=newInventory;
        }
    }
}