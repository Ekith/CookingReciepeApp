import CreerIngredient from "./CreerIngredient";
import {useState} from "react";
import CreerEtape from "./CreerEtape";


type IngredientItem = { id: number };

function ListeCreerIngredient() {

    const [ingredients, setIngredients] = useState<IngredientItem[]>([{ id: Date.now() }]);

    function addIngredients() {
        setIngredients(prev => [...prev, { id: Date.now() + Math.random() }]);
    }

    function removeIngredient(id: number) {
        setIngredients(prev => prev.filter(e => e.id !== id));
    }
    return (
        <div>
            <h3>Liste des ingrédients</h3>
            {ingredients.map((ingredient, index) => (
                <div key={ingredient.id} style={{ marginBottom: 8 }}>
                    <CreerIngredient index={index} id={ingredient.id} onRemove={removeIngredient} />
                </div>
            ))}
            <button type="button" onClick={addIngredients} >Ajouter un ingrédient</button>
        </div>
    );
}

export default ListeCreerIngredient;