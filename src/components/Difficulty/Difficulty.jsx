import PropTypes from 'prop-types'; 
import { Thumb, Title, Content, Level } from "./Difficulty.styled";

export const Difficulty = ({ difficulty }) => {
    return (
        <Thumb>
            <Title>Difficulty</Title>

            <Content>
                <Level className={difficulty === 0 ? 'active' : ''}>Easy</Level>
                <Level className={difficulty === 1 ? 'active' : ''}>Medium</Level>
                <Level className={difficulty === 2 ? 'active' : ''}>Hard</Level>
            </Content>
        </Thumb>
    )
};

Difficulty.propTypes = {
    difficulty: PropTypes.oneOf([0, 1, 2])
};