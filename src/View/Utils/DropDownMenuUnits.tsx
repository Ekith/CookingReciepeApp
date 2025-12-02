

function DropDownMenuUnits({name}: {name: string}) {

    const listOfUnits = ["ml", "l", "g", "kg", "pièces", "personnes", "cac", "cas", "pincée", "bouquet", "tranche", "filet"];

    const selectName = "units-"+name;

    return (
        <select name={selectName} id="units-dropdown">
            {listOfUnits.map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
            ))}
        </select>
    );
}
export default DropDownMenuUnits;