import styled from "styled-components"
import Cat from '../../../image/catcat.png'

function Tw() {
    return (<Container>
        <ProfileContainer>
            <h2>簡介</h2>
            <h3>程式工程師(偏網頁)</h3>
            <hr />
            <InfoBox>
                <Story>
                    <h3>關於我</h3>

                    <p>
                        從飯店主管轉戰程式設計，享受泡好一杯咖啡戴上耳機後在電腦前探索各種程式相關的問題和設計，學習方向著重於網頁開發並樂於探索各種前後端的相關議題及不同的資料庫設計並且希望能在後端和資料庫設計上有更深入的理解。
                    </p>
                </Story>
                <Picture>
                <img src={Cat} alt="" />
                </Picture>
                <Myinfo>
                    <h3>基本資料</h3>
                    <p>
                        <strong>姓名:</strong><br />羅正廷<br />
                        <strong>年齡:</strong><br />30<br />
                        <strong>地點:</strong><br />台北，台灣<br />

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

export default Tw;