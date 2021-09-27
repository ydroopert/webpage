import styled from 'styled-components';
import GitHubButton from 'react-github-btn';
import SList from './SList';
function En() {
    return (
        <Container>
            <h2>Skills</h2>
            <h3>Learning never ends</h3>
            <hr />
            <p>Tools that I use</p>
            <SList />
            <hr />
            <GitHubButton href="https://github.com/ydroopert" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Follow @ydroopert on GitHub">Visit @ydroopert</GitHubButton>
            <br/>
            <a href="https://tingblog35p.herokuapp.com/">other small projects</a>
        </Container>)
}
function Tw() {
    return (
        <Container>
            <h2>技能</h2>
            <h3>一持續學習一</h3>
            <hr />
            <p>語言+程式</p>
            <SList />
            <hr />
            <GitHubButton href="https://github.com/ydroopert" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Follow @ydroopert on GitHub">Visit @ydroopert</GitHubButton>
            <br/>
            <a href="https://tingblog35p.herokuapp.com/">一些早期的小作品</a>
        </Container>)
}

function Skills(props) {
    return (
        (props.lan === 'en') ? <En /> : <Tw />
    )
}

export default Skills

const Container = styled.div`
    display: block;
    font-size: 15px;
    line-height: 1.64;
    box-sizing: border-box;
    margin: auto;
    max-width: 1280px;
    padding: 40px 180px;

        
    > h2 {
        font-size: 54px;
    }
    >h3{
        font-size: 20px;
    }
    > p,h2,h3 {
        font-weight: 300;
        color: #34a5af;
        margin-bottom: 20px;
    }
    >p {
        text-align: left;
        font-size: 26px;
    }
    @media (min-width: 768px){
    width: 80%;}
`