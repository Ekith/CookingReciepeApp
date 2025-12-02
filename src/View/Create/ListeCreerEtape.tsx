import CreerEtape from "./CreerEtape";
import {useState} from "react";

type EtapeItem = { id: number };

function ListeCreerEtape() {

    const [etapes, setEtapes] = useState<EtapeItem[]>([{ id: Date.now() }]);

    function addEtape() {
        setEtapes(prev => [...prev, { id: Date.now() + Math.random() }]);
    }

    function removeEtape(id: number) {
        setEtapes(prev => prev.filter(e => e.id !== id));
    }

    return (
      <div>
          <h3> Liste des étapes </h3>
          {etapes.map((etape, index) => (
              <div key={etape.id} style={{ marginBottom: 8 }}>
                  <CreerEtape index={index} id={etape.id} onRemove={removeEtape} />
              </div>
          ))}
          <button type="button" onClick={addEtape}>Ajouter une étape</button>
      </div>
  );
}

export default ListeCreerEtape;