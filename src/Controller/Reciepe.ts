import Ingredient from "./Ingredient";
import Step from "./Step";


class Reciepe {
    id : number;
    nom : string;
    description : string;
    quantity : number;
    units : string;

    constructor(id: number, nom: string, description: string, quantity: number, units: string) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.quantity = quantity;
        this.units = units;
    }
}


export default Reciepe;