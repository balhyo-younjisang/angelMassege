import React from "react";
import { SectionForm, ImgBanner, Info } from "./styles";
import mainBanner from "../img/mainBanner.png";
import kakao from "../img/kakao.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Section() {
    return (
        <div className="App">
            <SectionForm>
                <ImgBanner>
                    <img src={mainBanner} alt="main Banner"></img>
                </ImgBanner>
                <Info>
                    <FontAwesomeIcon icon={faPhone} style={{ fontSize: "60" }} />
                    <h1 style={{ fontWeight: "bolder" }}>010-2430-5427</h1>
                    <img src={kakao} style={{ width: "50px", height: "50px" }}></img>
                    <h1>masage</h1>
                    <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: "60" }} />
                    <h1>서울/경기/인천 전지역</h1>
                    <h1>스웨디시 60분 : ₩120,000</h1>
                    <h1>스웨디시 90분 : ₩160,000 </h1>
                </Info>

            </SectionForm>

        </div >
    )
}