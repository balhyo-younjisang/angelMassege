import React from "react";
import { SectionForm, ImgBanner, Info } from "./styles";
import mainBanner from "../img/mainBanner.png";
import subBanner from "../img/subBanner.png";
import kakao from "../img/kakao.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Section() {
    return (
        <div className="App" style={{ display: "grid", whiteSpace: "nowrap" }}>
            <SectionForm>
                <ImgBanner style={{ display: "inline" }}>
                    <img src={mainBanner} alt="main Banner"></img>
                </ImgBanner>
                <Info>
                    <div>
                        <FontAwesomeIcon icon={faPhone} style={{ fontSize: "60" }} />
                        <h1 style={{ fontWeight: "bolder" }}>전화 : 010-2430-5427</h1>
                        <button onClick={document.location.href = 'tel:010-2430-5427'} style={{ borderRadius: "15px", marginBottom: '30px', height: "50px", fontWeight: 'bold' }}>바로 전화하기</button>
                        <br />
                        <img src={kakao} style={{ width: "50px", height: "50px" }}></img>
                        <h1>카카오 ID : MASAGE</h1>
                        <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: "60" }} />
                        <h1>서울/경기/인천 전지역</h1>
                        <h1>스웨디시 60분 : ₩120,000</h1>
                        <h1>스웨디시 90분 : ₩160,000 </h1>
                        <div className="moreInfo">
                            <h1 style={{ color: "red" }}>선입금 X</h1>
                            <h1 style={{ color: "red" }} > 관리사대면 직접결제</h1>
                        </div>
                    </div>
                </Info>
            </SectionForm>
            <SectionForm>
                <Info>
                    <h1>내상제로無</h1>
                    <h1>고객만족도100%</h1>
                    <h1>2030대 미모의 관리사</h1>
                    <h1>항시 대기중</h1>
                    <h1>뚱퍽일시 항상캔슬가능</h1>
                </Info>
                <ImgBanner style={{ display: "inline" }}>
                    <img src={subBanner} alt="subBanner"></img>
                </ImgBanner>
            </SectionForm>
        </div >
    )
}