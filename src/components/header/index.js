import React from "react";
import { Helmet } from "react-helmet";
import { HeaderForm, Logo } from "./styles";

export default function Header() {
    return (

        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>천사 출장 마사지</title>
                <meta name="keywords" content="고급 마사지, 천사마사지, 천사출장마사지, 마사지, 출장 마사지, 인천 마사지, 서울 마사지, 서울 인천 마사지, 경기 마사지, 천사 마사지, 천사 출장 마사지, 고품격 출장 마사지"></meta>
                <meta name="description" content="고품격 출장 마사지 천사 출장 마사지"></meta>
                <meta property="og:image" content="/build/favicon.ico" />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <HeaderForm>
                <Logo>Angel Massage</Logo>
            </HeaderForm>
        </div>
    )
}