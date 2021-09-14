import styled from "styled-components"
import Info from "./Info"

function Tw() {
    return (
        <Container>
            <h2>經歷</h2>
            <h3>"路是腳踏出來的，歷史是人寫出來的。人的每一步行動都在書寫自己的歷史。" <br />-吉鴻昌</h3>
            <hr />
            <p>教育</p>


            <Info
                name="網路學習"
                year="2020-2021"
                course="IT+Programming"
                detail="CS50's Introduction to Computer Science By Harvard Google Certificate Udemy StackOverflow"
            />
            <Info
                name="Hotel Institute Montreux "
                year="2017-2019"
                course="商業碩士(飯店管理)"
                detail="HIM落坐於瑞士的鎮上是一所專門提供國際商業大學和碩士文憑的學校。在這裡的電腦課中有一份小組作業是用教師提供的資源做個簡單酒店網頁這也是我第一次接觸到了電腦語言。"
            />


            <p>職崖</p>

            <Info
                name="麗思卡爾頓-廣州"
                year="2019-2021"
                course="餐飲主管->副經理"
                detail="位於麗思卡爾頓酒店廣州內的米其林中餐廳-麗軒，為當地知名的中餐指標餐廳之一。在這的期間從主管升為副經理並且主要負責30人以下小型活動如婚禮家宴或商業活動，同時也負責員工培訓並為外場設立了多項數據化的指標如酒精飲料銷售，根據目標對員工進行單獨項目的培訓"
            />
            <Info
                name="麗思卡爾頓-喬治亞城"
                year="2018-2019"
                course="餐飲幹部培訓(1年)"
                detail="位於美國華盛頓特區的奢華酒店，在這的各個餐飲部門如酒吧/露天餐廳/客房送餐/宴會輪調不同職位。期間也去客房部做了4個月的主管至培訓結束"
            />
            <Info
                name="胖老爹炸雞+蔴姬涼麵"
                year="2017-2021"
                course="家庭餐廳"
                detail="餐廳為自家營業，參與了加盟和自創品牌的創立初期並對餐廳有較完整的了解。於胖老爹加盟後3月前往瑞士求學而至2021返台期間都陸續幫忙並且參與到2019的涼麵自創品牌之創立。"
            />

        </Container>)
}
export default Tw;

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