import { Recipe } from './Recipe/Recipe';
import recipies from "../../src/recipies.json";

export const App = () => {
 return <Recipe recipe={recipies} />
};

