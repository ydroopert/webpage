import styled from 'styled-components';
import Back from '../../image/background.JPG'

function EnInfo(){
    return (
        <TitleContainer>
                <h1>Ting Lo</h1>
                <p>resume</p>
        </TitleContainer>
    )
}
function TwInfo(){
    return(
        <TitleContainer>
                <h1>嗨 我叫TING</h1>
                <p>個人簡歷</p>
        </TitleContainer>
    )
}
function Header(props) {
    return (
        <Container>
            <p onClick={props.switch}>EN / 中</p>
            <Overlay />
            {(props.lan==='en')? <EnInfo />:<TwInfo />}
        </Container>
    )
}

export default Header;

const Container = styled.div`
    
    height: 100vh;
    
    background: no-repeat center left/cover fixed url(${Back});

    >p {
        position: relative;
        margin-top: 100px;
        z-index: 4;
        margin-right: 150px;
        float: right;
        color: white;
        opacity: 0.6;
        :hover{
            opacity: 1.0;
            cursor: pointer;
        }
    }`
const TitleContainer = styled.div`
    text-align: center;
    position: relative;
    color: white;
    margin: auto;
    top: 32%;
    padding: 40px 180px;
    z-index: 2;
   >h1{
       font-size: 62px;
   }
   >p{
       font-size: 24px;
   }
`

const Overlay = styled.div`
height: 100vh;
width: 100vw;
opacity: 0.75;
position: absolute;
z-index: 1;
background-color: #46260cc7;
`