import Ingredient from "../../Controller/Ingredient";


function IngredientView({ingredient}: { ingredient: Ingredient })
{
  return (
    <div>
      <h3>{ingredient.name}</h3>
      <p>
        TODO
      </p>
    </div>
  );

}

export default IngredientView;