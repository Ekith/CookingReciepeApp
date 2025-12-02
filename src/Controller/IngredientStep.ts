
class IngredientStep {

    id: number;
    ingredientId: number;
    stepId: number;
    proportion: number;

    constructor(id: number, ingredientId: number, stepId: number, proportion: number) {
        this.id = id;
        this.ingredientId = ingredientId;
        this.stepId = stepId;
        this.proportion = proportion;
    }

}

export default IngredientStep;
