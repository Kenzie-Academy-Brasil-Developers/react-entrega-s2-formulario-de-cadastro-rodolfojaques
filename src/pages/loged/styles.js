import styled from "@emotion/styled"

export const MainHome = styled.main`
*{box-sizing: border-box;}

max-height: 100vh;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

    h1{
        color: darkviolet;
        text-align: start;
        margin: 0 1rem;

        font-size: 2rem;
    }

    img{
        max-width: 90%;
        max-height: 50vh;

    }

    div{
        width: 100%;

        display: flex;
        justify-content: flex-end;
        padding-right: 2rem;
    }

    @media(min-width: 350px){

        h1{
            font-size: 2.5rem;
        }
    }

    @media(min-width: 450px){

        h1{
            font-size: 3rem;
        }
    }
`;