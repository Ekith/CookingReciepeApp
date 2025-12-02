

class ReciepeIngredient {

    id: number;
    reciepeId: number;
    ingredientId: number;
    quantity: number;
    unit: string;


    constructor(id: number, reciepeId: number, ingredientId: number, quantity: number, unit: string) {
        this.id = id;
        this.reciepeId = reciepeId;
        this.ingredientId = ingredientId;
        this.quantity = quantity;
        this.unit = unit;
    }
}

export default ReciepeIngredient;