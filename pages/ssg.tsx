// 렌더링 타입을 위해 도입
import { NextPage } from "next";
// Next.js의 내장 컴퍼넌트
import Head from "next/head";

// 페이지 컴퍼넌트의 props 타입 정의(여기에서는 빔)
type SSGProps ={};//props를 전달 받을 때 사용한다.

const SSG:NextPage<SSGProps> = () =>{
    return(
        <div>
            <Head>
                <title>Static Site Generation</title>
            </Head>
            <main>
                <p>
                    이 페이지는 정적사이트 생성을 통해 빌드시 생성된 사이트이다. 
                </p>
            </main>
        </div>
    )
}

export default SSG;