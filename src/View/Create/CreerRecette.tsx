import Reciepe from "../../Controller/Reciepe";
import DropDownMenuUnits from "../Utils/DropDownMenuUnits";
import ListeCreerIngredient from "./ListeCreerIngredient";
import ListeCreerEtape from "./ListeCreerEtape";


function CreerRecette() {

  return (
      <div>
          <h1>Nouvelle recette</h1>
            <form>
                <label>
                    Nom:
                    <input type="text" name="nom" />
                </label>
                <br />

                <label>
                    Description:
                    <textarea name="description" />
                </label>
                <br />

                <label>
                    Quantité:
                    <input type="number" name="quantity" />
                    <DropDownMenuUnits name="recette"/>
                </label>
                <br />

                <ListeCreerIngredient/>
                <br/>

                <ListeCreerEtape/>
                <br/>

                <input type="submit" value="Créer la recette" />
            </form>
      </div>
  );
}

export default CreerRecette;