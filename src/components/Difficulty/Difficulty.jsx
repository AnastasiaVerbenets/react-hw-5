import { Thumb, Title, Content, Level } from "./Difficulty.styled";

export const Difficulty = () => {
    return (
        <Thumb>
            <Title>Difficulty</Title>

            <Content>
                <Level>Easy</Level>
                <Level>Medium</Level>
                <Level>Hard</Level>
            </Content>
        </Thumb>
    )
};
