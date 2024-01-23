// 렌더링 타입을 위해 도입
import {GetStaticProps , NextPage , NextPageContext} from "next";
// Next.js의 내장 컴퍼넌트
import Head from "next/head";
import { useState } from "react";
// 페이지 컴퍼넌트의 props 타입 정의(여기에서는 빔)
type SSGProps ={
    message:string
};//props를 전달 받을 때 사용한다.

const SSG:NextPage<SSGProps> = (props) =>{
    const {message} = props;
    const now:number  = new Date().getTime();
    return(
        <div>
            <Head>
                <title>Static Site Generation</title>
            </Head>
            <main>
                <p>
                    이 페이지는 정적 사이트 생성을 통해 빌드시 생성된 사이트이다. 
                </p>
                <p>
                    {message}
                </p>
                <p>
                    {now}
                </p>
            </main>
        </div>
    )
}

export const getStaticProps:GetStaticProps<SSGProps> = async (context)=>{
    
    const timestamp = new Date().toLocaleDateString();
    const time =  new Date().toLocaleTimeString();
    const message = `${timestamp}에 ${time}getStaticProps가 실행 되었습니다`;
    
    console.log(message,time);

    return {
        props: {message},
    };
    
};

export default  SSG;