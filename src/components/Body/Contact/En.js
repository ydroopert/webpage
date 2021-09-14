import styled from "styled-components"
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function En() {
    return (
        <Container>
            <ContactContainer>
                <h2>Contact</h2>
                
                <a href="mailto:ydroopert@gmail.com"><MailOutlineIcon />ydroopert@gmail.com</a>
            </ContactContainer>
        </Container>
    )
}

export default En;

const Container = styled.div`
    display: block;
    font-size: 15px;
    line-height: 1.64;
    box-sizing: border-box;
    margin: auto;
    max-width: 1280px;
    padding: 40px 180px;

    @media (min-width: 768px){
    width: 80%;}
`

const ContactContainer = styled.div`
    
    > h2 {
        font-size: 54px;
    }
    > h2,h3 {
        font-weight: 300;
        color: white;
        margin-bottom: 20px;
    }

    > a{
        display: inline-block;
        line-height: 32px;
        color:white;
        opacity: 0.4;

        > svg{
        float: left;
        height: 32px;
        width: 32px;
    }

        :hover{
            opacity: 1.0;
        }
}
    
`