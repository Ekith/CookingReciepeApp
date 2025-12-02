
import Reciepe from '../../Controller/Reciepe';
import ListeIngredientView from "./ListeIngredientView";
import ListeEtapeView from "./ListeEtapeView";


function RecetteView({recette} : {recette : Reciepe}) {

    return (
    <div>
        <h1>{recette.nom}</h1>
        <p>Quantités pour {recette.quantity} {recette.units}</p>
        <p>{recette.description}</p>
        <p>TODO</p>
    </div>
  );}

export default RecetteView;