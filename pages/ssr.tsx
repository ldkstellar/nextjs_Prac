import { url } from "inspector";
import { GetServerSideProps,NextPage } from "next";
import Head from "next/head";
import Image from "react";

type SSRProps = {
    message:string,
    image:string

};

const Height = ({height}:{height:number})=>{
    return(
        <div style={{height:height}}>
        </div>
    );
}

const SSR:NextPage<SSRProps> = (props)=>{
    const {message,image} = props;

    return(
        <div>
            <Head>
                <title>동동주</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main style={{textAlign:"center"}}>
                <Height height={15}/>
                <h2>

                    이 페이지는 서버 사이드 렌더링을 통해 접근 시에 서버에서 그려진 페이지 이다.  
                </h2>
                    <Height height={100}/>

                    <img src={image} width={500} height={500}/>
                <p>
                    {message}
                </p>

            </main>
        </div>
    );
};

export const getServerSideProps:GetServerSideProps<SSRProps> = async (context)=>{
    const timestamp =  new Date().toLocaleTimeString();
    const message = `${timestamp}에 이 페이지의 getServerSideProps가 실행됐습니다.`;
    console.log(message);
    const image = `https://img.freepik.com/free-photo/bengal-tiger-staring-majestic-and-dangerous-in-the-wild-forest-generated-by-ai_188544-56109.jpg`;
    return{
        props:{
            message,
            image
        }
    };
    
}

export default SSR;

// const SSR: NextPage<GetServerSideProps>