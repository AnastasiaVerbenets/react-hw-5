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
                    difficulty={difficulty}
                />
            })}
        </List>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            imageUrl: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
            servings: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired,
            difficulty: PropTypes.number.isRequired
        })
    )
};