import En from './En'
import Tw from './Tw'

function AboutMe(props) {
    return (
        (props.lan === 'en') ? <En /> : <Tw />
    )
}

export default AboutMe;
