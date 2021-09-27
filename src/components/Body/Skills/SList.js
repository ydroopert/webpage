import styled from "styled-components";

function SList() {
    return (
        <Skillbox>
            <Leftbox>
                <ul>
                    <li>
                        C/C++
                    </li>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        JQuery
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Node.js
                    </li>
                </ul>
            </Leftbox>
            <Rightbox>
                <ul>
                    <li>
                        SQL/NoSQL
                    </li>
                    <li>
                        Linux
                    </li>
                    <li>
                        Firebase
                    </li>
                    <li>
                        AWS
                    </li>
                    <li>
                        Docker
                    </li>
                    <li>
                        Git/Github
                    </li>
                    <li>
                        Stackoverflow
                    </li>
                </ul>
            </Rightbox>
        </Skillbox>)
}

export default SList;

const Skillbox = styled.div`
    overflow:auto;
    text-align: left;
`
const Leftbox = styled.div`
    width:50%;
    float:left;

    >ul{
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    }
    >ul>li{
        margin-bottom:10px;
        :hover{
            background-color: #e61e0c37;
        }
    }
`
const Rightbox = styled(Leftbox)`
   
`