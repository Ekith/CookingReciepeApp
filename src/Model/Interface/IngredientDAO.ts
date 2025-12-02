import Ingredient from "../../Controller/Ingredient";


interface IngredientDAO {

    createIngredient(ingredient: Ingredient): number;

    readIngredient(): Ingredient[];

    updateIngredient(ingredient: Ingredient): boolean;

    deleteIngredient(ingredient: Ingredient): boolean;

    getIngredientById(id: number): Ingredient | null;

    getIngredientByName(name: string): Ingredient[];

}
export default IngredientDAO;