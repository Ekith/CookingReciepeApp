import Ingredient from "../../Controller/Ingredient";
import IngredientDAO from "../Interface/IngredientDAO";
import {supabase} from "../../App";


class IngredientSQL implements IngredientDAO {

    createIngredient(ingredient: Ingredient): number {

        const promise : Promise<any> = (async () => {
            const { data, error } = await supabase
                .from('ingredient')
                .insert([
                    { ingredient_name_ingredient: ingredient.name }
                ])
                .select();

            if (error) {
                console.error("Error inserting ingredient:", error);
                return -1;
            }

            return data
        })();

        promise.then(value => {
            return value
        });

        console.log(res)

        return -1

    }
    readIngredient(): Ingredient[] {
        throw new Error("Method not implemented.");
    }
    updateIngredient(ingredient: Ingredient): boolean {
        throw new Error("Method not implemented.");
    }
    deleteIngredient(ingredient: Ingredient): boolean {
        throw new Error("Method not implemented.");
    }
    getIngredientById(id: number): Ingredient | null {
        throw new Error("Method not implemented.");
    }
    getIngredientByName(name: string): Ingredient[] {
        throw new Error("Method not implemented.");
    }



}

export default IngredientSQL;