import DropDownMenuUnits from "../Utils/DropDownMenuUnits";


function CreerIngredient(
    {
        index,
        id,
        onRemove
    }: {
        index: number,
        id: number,
        onRemove: (id: number) => void
    }) {
    return (
        <div>
            <label>
                Nom:
                <input type="text" name={`ingredient-name-${index}`} />
            </label>
            <br />
            <label>
                Quantité:
                <input type="number" name={`ingredient-quantity-${index}`} />
                <DropDownMenuUnits name={`ingredient-${index}`}/>
            </label>
            <br />
            <button type="button" onClick={() => onRemove(id)}>Supprimer cet ingrédient</button>
            <br />
        </div>
    );
}

export default CreerIngredient;