import IngredientStep from "../../Controller/IngredientStep";


interface IngredientStepDAO {

    createIngredientStep(ingredientStep: IngredientStep): number;

    readIngredientStep(): IngredientStep[];

    updateIngredientStep(ingredientStep: IngredientStep): boolean;

    deleteIngredientStep(ingredientStep: IngredientStep): boolean;

    getIngredientStepById(id: number): IngredientStep | null;

    getIngredientStepByIngredientId(ingredientId: number): IngredientStep[];

    getIngredientStepByStepId(stepId: number): IngredientStep[];

}

export default IngredientStepDAO;