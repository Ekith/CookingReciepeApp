import Ingredient from "../Controller/Ingredient";
import IngredientSQL from "../Model/class/IngredientSQL";
import {useState} from "react";


function HomePage () {

    const [numb, setNumb] = useState<number>(0);


    const ingre = new Ingredient(0, "Vegetable");
    const nnn = new IngredientSQL().createIngredient(ingre);



    return (
    <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main landing page of the application.</p>
        <p>{nnn}</p>
    </div>
  );
}
export default HomePage;