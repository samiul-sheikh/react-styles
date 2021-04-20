import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const Container = styled.div`
    margin: 10px;
    color: purple;
    border: 1px solid blue;
`

const Home = () => {
    return (
        <div>
            <Wrapper>
                <Title>I am using styled components</Title>
            </Wrapper>

            <Container>
                <h3>Product Name</h3>
                <p>Product Description</p>
            </Container>
            <Container>
                <h3>Product Name</h3>
                <p>Product Description</p>
            </Container>
        </div>
    );
};

export default Home;