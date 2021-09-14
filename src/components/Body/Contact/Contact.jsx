import styled from 'styled-components'
import En from './En'
import Tw from './Tw'

function Contact(props) {
    return (
        <Background>
        {(props.lan==='en')? <En />:<Tw />}
        </Background>)
}

export default Contact

const Background = styled.div`
background-color: gray;
`