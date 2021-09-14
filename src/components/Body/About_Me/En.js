import styled from "styled-components"
import Cat from '../../../image/catcat.png'
function En() {
    return (<Container>
        <ProfileContainer>
            <h2>Profile</h2>
            <h3>Hi! I'm a webdev that focus mostly on React+Node.js</h3>
            <hr />
            <InfoBox>
                <Story>
                    <h3>About me</h3>

                    <p>
                        I am an enthusiastic web developer that focus more on the Backend side of things. I am a junior programmer exporing various kinds of Front/Backend techniques. I love creating different projects and focus on little details for optimizing app quality. I also enjoy working with databases both SQL or NoSQL. So far I've been working on my own little projects and I am looking for the opportunity to develop in a team to learn from others.
                    </p>
                </Story>
                <Picture>
                    <img src={Cat} alt="" />
                </Picture>
                <Myinfo>
                    <h3>info</h3>
                    <p>
                        <strong>Name:</strong><br />Ting Lo<br />
                        <strong>Age:</strong><br />30<br />
                        <strong>Location:</strong><br />Taipei,Taiwan<br />

                    </p>
                </Myinfo>
            </InfoBox>
        </ProfileContainer>
    </Container>)
}

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

const ProfileContainer = styled.div`
    
    > h2 {
        font-size: 54px;
    }
    >h3{
        font-size: 20px;
    }
    > h2,h3 {
        font-weight: 300;
        color: #34a5af;
        margin-bottom: 20px;
    }
`
const InfoBox = styled.div`
    margin-left: -15px;
    margin-right: -15px;
    overflow: auto;
`
const Story = styled.div`
@media (min-width: 768px)
{
    width: 33.33333333%;
    float: left;
}
>h3{
        font-size: 26px;
    }
`

const Picture = styled.div`
@media (min-width: 768px)
{
    width: 33.33333333%;
    float: left;
}
>img{
    height: 200px;
    width: 200px;
    margin-top: 30px;
}
`
const Myinfo = styled.div`
text-align: left;
@media (min-width: 768px)
{
    width: 33.33333333%;
    float: left;
}
>h3{
        font-size: 26px;
    }
`

export default En;