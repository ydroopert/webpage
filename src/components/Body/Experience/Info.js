import styled from "styled-components"
function Info(props) {
    return (
        <InfoBox>
            <LeftBox>
                <h4>{props.name}</h4>
                <p>{props.year}</p>
            </LeftBox>
            <RightBox>
                <p>
                    <strong>{props.course}</strong>
                    <span>{props.detail}</span>
                </p>
            </RightBox>
        </InfoBox >
    )
}

export default Info;

const InfoBox = styled.div`
    margin-left: -15px;
    margin-right: -15px;
    margin-bottom: 20px;
    text-align: left;
    overflow: auto;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
`

const LeftBox = styled.div`
@media (min-width: 768px)
{
    width: 33.33333333%;
    float: left;
}

>h4, p{
    margin-bottom: 10px;
}

>p {
    margin-top: 0px;
}
>h4{
    margin-top: 10px;
}

`
const RightBox = styled.div`
@media (min-width: 768px)
{
    width: 66.66666667%;
    float: left;
}

>p{
    margin:0;
}
> p > strong{
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
}
`