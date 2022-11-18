import styled from '@emotion/styled'

export const SectionForm = styled.section`
    width: 100%;
    height: 82vh;
    background:#fff;
    display: flex;
    justify-content: start;
    margin: 20px;
    @media screen and (max-width: 800px) {
        display: block;
    }
`;

export const ImgBanner = styled.div`
    display: flex;
    margin: 20px;
    width:50vw;
    height:100vh;
    & img{
        height:100vh;
        width: 50vw;
    }
    @media screen and (max-width: 800px) {
        & img{
            height:80vh;
            width: 100vw;
        }
    }
    @media screen and (max-width: 350px) {
        & img{
            height:80vh;
            width: 80vw;
        }
    }
    @media screen and (max-width: 300px) {
        & img{
            height:50vh;
            width: 70vw;
        }
    }
`;

export const Info = styled.div`
    text-align: center;
    margin: 20px;
    & h1 {
        font-size: 2rem;
    }
`;
