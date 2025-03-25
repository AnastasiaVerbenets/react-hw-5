import PropTypes from "prop-types"; 
import { RecipeInfo } from "../RecipeInfo/RecipeInfo";
import { List } from "./Recipe.styled";

export const Recipe = ({ recipe }) => {
    return (
        <List>
            {recipe.map(({ imageUrl, name, time, servings, calories, difficulty, id }) => {
                return <RecipeInfo
                    key={id}
                    imageUrl={imageUrl}
                    name={name}
                    time={time}
                    servings={servings}
                    calories={calories}
                />

                
            })}
        </List>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.array
};