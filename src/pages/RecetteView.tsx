import Reciepe from '../utils/Reciepe';
import ListeIngredientView from "../common/view/ListeIngredientView";
import ListeEtapeView from "../common/view/ListeEtapeView";
import {useEffect, useState} from "react";
import {supabase} from "../App";
import Ingredient from "../utils/Ingredient";
import Step from "../utils/Step";
import {useLocation} from "react-router-dom";


function RecetteView() {

    const [reciepe, setReciepe] = useState<Reciepe>(new Reciepe(-1, '', '', 0, ''));
    const [listIngredients, setListIngredients] = useState<Ingredient[]>([]);
    const [listStep, setListStep] = useState<Step[]>([]);

    const location = useLocation()

    // se déclenche au chargement de la page
    useEffect(() => {
        console.log(location.state)
        if (location.state?.reciepe) {
            setReciepe(location.state.reciepe)
            fetchReciepies(location.state.reciepe);
            fetchReciepies2(location.state.reciepe);
        }
    }, [])

    async function fetchReciepies(reciepe : Reciepe) {
        let {data: a_reciepe_ingredient, error} = await supabase
            .from('a_reciepe_ingredient')
            .select(`*, ingredient(*)`)
            .eq('id_reciepe', reciepe.id);

        if (error) console.log('erreur')


        setListIngredients([]) // Clear the list before adding new ingredients
        for (let r of a_reciepe_ingredient as any[]) {
            const newIngr = new Ingredient(r.ingredient.id, r.ingredient.name, r.quantity, r.unit);
            setListIngredients(prevIngredients => [...prevIngredients, newIngr]);
        }
    }

    async function fetchReciepies2(reciepe : Reciepe) {
        let { data: a_reciepe_step, error } = await supabase
            .from('a_reciepe_step')
            .select(`*, step(*)`)
            .eq('id_reciepe', reciepe.id);

        if (error) console.log('erreur')

        setListStep([]) // Clear the list before adding new steps
        for (let r of a_reciepe_step as any[]){
            const newStep = new Step(r.step.id, r.step.description, r.order, []);
            setListStep(prevSteps => [...prevSteps, newStep]);
        }
    }

    return (
        <div className="sub-container">
            <h1 className="bigTitle">{reciepe.nom}</h1>
            <div className="sub-container">
                <p className="sub-container normal-text">Quantités pour {reciepe.quantity} {reciepe.unit}</p>
                <p className="sub-container normal-text">{reciepe.description}</p>
            </div>
            <div className="sub-container">
                <ListeIngredientView listeIngredients={listIngredients}/>
            </div>
            <div className="sub-container">
                <ListeEtapeView listEtape={listStep} />
            </div>
        </div>
  );
}

export default RecetteView;