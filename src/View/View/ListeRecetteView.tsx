import Reciepe from "../../Controller/Reciepe";
import Ingredient from "../../Controller/Ingredient";
import IngredientStep from "../../Controller/IngredientStep";
import Step from "../../Controller/Step";
import RecetteView from "./RecetteView";
import {useState} from "react";


function ListeRecetteView () {

    const maxColumns = 3;


    const [selectedRecette, setSelectedRecette] = useState<Reciepe | null>(null);

    if (selectedRecette) {
        return (
            <div>
                <button onClick={() => setSelectedRecette(null)} style={{ marginBottom: 10 }}>
                    Retour aux recettes
                </button>
                <RecetteView recette={selectedRecette} />
            </div>
        );
    }

    return (
        <div>
            <h2>Recettes :</h2>
            <p>TODO</p>
        </div>
    );
}

export default ListeRecetteView;