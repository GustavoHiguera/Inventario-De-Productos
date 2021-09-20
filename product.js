export default class Product{
    constructor(code, name, cost, amount){
        this.code=code;
        this.name=name;
        this.cost=cost;
        this.amount=amount;
    }

    //Getters
    getCode(){
        return this.code;
    }
    
    getName(){
        return this.name;
    }

    getCost(){
        return this.cost;
    }

    getTotalCost(){
        return this.cost*this.amount; 
    }

    getAmount(){
        return this.amount;
    }

    getDetails(){
        return `Código: ${this.code}, Nombre: ${this.name}, Costo Unitario: ${this.cost}, Cantidad: ${this.amount}, Costo Total: ${this.getTotalCost()}`;
    }

    //Setters
    setName(name){
        this.name=name;
    }

    setCost(cost){
        this.cost=cost;
    }
    
    setAmount(amount){
        this.amount=amount;
    }

    static readForm() {
        let inpCode= document.querySelector("#code");
        let inpName= document.querySelector("#name");
        let inpCost= document.querySelector("#cost");
        let inpAmount= document.querySelector("#amount");

        let code=inpCode.value;
        let name=inpName.value;
        let cost= Number(inpCost.value);
        let amount= Number(inpAmount.value);

        if(code && name && cost && amount){
            inpCode.value="";
            inpName.value="";
            inpCost.value="";
            inpAmount.value="";
            return new Product(code, name, cost, amount);
        }

        return false;
    }
}