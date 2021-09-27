import Info from './Info'
import styled from 'styled-components'

function En(){
    return(
    <Container>
        <h2>Experience</h2>
        <h3>"There is a history in all men's lives."<br/>-William Shakespeare</h3>
        <hr />
        <p>Education</p>
        
                <Info
                    name="Hotel Institute Montreux "
                    year="2017-2019"
                    course="Master of International Business In Hospitality Management"
                    detail="Located in Switzerland, HIM focus on International business programme for both bachlor and master. It is from here that I first encountered a CS course other than Microsoft Office and Excel"
                />

        
        <p>Career</p>
        
                <Info
                    name="The Ritz Carlton-GuangZhou"
                    year="2019-2021"
                    course="F&B supervisor-> Assistance Manager"
                    detail="Worked in a Michelin starred Chinese restaurant as a supervisor and got promoted to AM after 6 months. Mostly incharge of small events and staff trainings plus strong communication with the kitchen team."
                />
                <Info
                    name="The Ritz Carlton-GeorgeTown"
                    year="2018-2019"
                    course="F&B management training"
                    detail="rotated in different outlets such as bar,kitchen,out door patio, fine dining, events, IRD. Also worked in housekeeping as a supervisor for 4 months."
                />
                <Info
                    name="Chubby Daddy Fried Chicken + Machi cold noodles"
                    year="2017-2021"
                    course="Family owned restaurant"
                    detail="Was here from the beginning of the restaurant for about 3 months and then went to get my master degree. Still work here from time to time when I'm back in Taipei. Has round knowledge about the shop from kitchen to inventory and service."
                />
        
    </Container>)
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
        font-size: 26px;
        text-align: left;
    }

    @media (min-width: 768px){
    width: 80%;}
`