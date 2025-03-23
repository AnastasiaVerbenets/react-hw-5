import PropTypes from "prop-types"; 
import css from "./RecipeInfo.module.css";
import { IoTimeOutline } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { CiWheat } from "react-icons/ci";
import { MdOutlineStars } from "react-icons/md";

export const RecipeInfo = ({ imageUrl, name, time, servings, calories, difficulty }) => {
    return (
        <li className={css.recipe__item}  >
            <img className={css.recipe__img} src={imageUrl} alt={name} width="400" />
            <h2 className={css.recipe__title}>{name}</h2>
            <p className={css.recipe__text}><IoTimeOutline size={25}  /> Time for cook: {time} min</p>
            <p className={css.recipe__text}><IoPeople size={25}/> Serving for: {servings} people</p>
            <p className={css.recipe__text}><CiWheat size={25}/> Calories: {calories} kcal</p>
            <p className={css.recipe__text}><MdOutlineStars size={25}/> Cooking difficulty: {difficulty}</p>
        </li>
    );
};

RecipeInfo.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.string,
    servings: PropTypes.number,
    calories: PropTypes.number,
    difficulty: PropTypes.number,
};