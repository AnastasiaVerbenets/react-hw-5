import PropTypes from "prop-types"; 
import { IoTimeOutline } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { CiWheat } from "react-icons/ci";
import { Item, Image, Title, Thumb, Text } from "./ResipeInfo.styled";
import { Difficulty } from "components/Difficulty/Difficulty";

export const RecipeInfo = ({ imageUrl, name, time, servings, calories, difficulty }) => {
    return (
        <Item>
            <Image src={imageUrl} alt={name} width="400" />
            <Title>{name}</Title>
            <Thumb>
            <Text><IoTimeOutline size={25} />{time} min</Text>
            <Text><IoPeople size={25}/>{servings} servings</Text>
            <Text><CiWheat size={25}/>{calories} calories</Text>
            </Thumb>

            <Difficulty/>
        </Item>
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