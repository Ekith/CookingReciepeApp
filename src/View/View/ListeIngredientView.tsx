import Ingredient from "../../Controller/Ingredient";
import IngredientView from "./IngredientView";


function ListeIngredientView({listeIngredients}: {listeIngredients: Ingredient[]}) {
    const numberColumns = 3;
  return (
    <div>
      <h2>Ingrédients :</h2>
      {listeIngredients.length === 0 ? (
      <p>Aucun ingrédient disponible.</p>
      ) : (
      <table>
        <tbody>
          {Array.from({ length: Math.ceil(listeIngredients.length / numberColumns) }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {listeIngredients.slice(rowIndex * numberColumns, (rowIndex + 1) * numberColumns).map((ingredient, colIndex) => (
                <td key={colIndex} style={{ padding: '10px', border: '1px solid black' }}>
                  <IngredientView ingredient={ingredient} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        </table>
        )
      }
    </div>
  );
}

export default ListeIngredientView;