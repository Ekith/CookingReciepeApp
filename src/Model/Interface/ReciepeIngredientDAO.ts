import ReciepeIngredient from "../../Controller/ReciepeIngredient";


interface ReciepeIngredientDAO {

    createReciepeIngredient(reciepeIngredient : ReciepeIngredient): number;

    readReciepeIngredient(): ReciepeIngredient[];

    updateReciepeIngredient(reciepeIngredient : ReciepeIngredient): boolean;

    deleteReciepeIngredient(reciepeIngredient : ReciepeIngredient): boolean;

    getReciepeIngredientById(id: number): ReciepeIngredient | null;

    getReciepeIngredientByReciepeId(reciepeId: number): ReciepeIngredient[];

    getReciepeIngredientByIngredientId(ingredientId: number): ReciepeIngredient[];

}

export default ReciepeIngredientDAO;