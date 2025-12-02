import Step from "../../Controller/Step";
import EtapeView from "./EtapeView";


function ListeEtapeView({listEtape} : {listEtape : Step[]})
{
    return (
        <div>
            <h3>Liste des Étapes</h3>
            <ul>
                {listEtape.map((etape) => (
                    <EtapeView etape={etape} />
                ))}
            </ul>
        </div>
    );
}

export default ListeEtapeView;