import styled from "styled-components"
import En from './En'
import Tw from './Tw'
function Experience(props) {
    return (
        <Background>
            {(props.lan==='en')? <En />:<Tw />}
        </Background>
    )
}

export default Experience
const Background = styled.div`
    background-color: #006d8039;
`