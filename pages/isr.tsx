import {NextPage,GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type ISRProps = {
    message:string
}

const ISR:NextPage<ISRProps> = (props)=>{
    const {message} = props;
    const router = useRouter();
    const onSubmit = ()=> {
        router.push('/ssr');
        router.push({pathname:'ssg',query:{keyword:'hello'}});
    }

    if (router.isFallback) {
        return(
            <div>
                페이지 로딩중입니다.
            </div>
        );
    }

    return(
        <div>
            <Head>
                <title>
                    Create Next App
                </title>
                <link rel="icon" href="./public/favicon.ico"/>
            </Head>
            <main>
                <p>이 페이지는 ISR을 통해 빌드 시 생성된 페이지입니다.</p>
                <p>{message}</p>
                <button onClick={onSubmit}>버튼</button>
            </main>
        </div>
    );

}

export const getStaticProps:GetStaticProps<ISRProps> = async (context)=>{
    const timeStamp  =  new Date().toLocaleString();
    const message = `${timeStamp}에  이 페이지의 getStaticProps가 실행 됐습니다.`;
    return {
        props:{message,},
        // 페이지의 유효 기간을 초 단위로 지정한다.
        revalidate:1,
    };

}

export default ISR;