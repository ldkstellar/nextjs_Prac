import {GetStaticPaths,GetStaticProps,NextPage} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'; //next/router에서 useRouter라는 hook을 삽입한다.
import { ParsedUrlQuery } from 'querystring';

type postProps={
    id:string
};

interface postParams extends ParsedUrlQuery{
    id:string
};

const Post:NextPage<postProps> = (props)=>{
    const {id} = props;
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading</div>;
    }

    return(
        <div>
            <Head>
                <title>Creat Next app</title>
            </Head>
            <main>
                <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.</p>
                <p>{`post/${id}에 대응되는 페이지입니다.`}</p>
            </main>
        </div>
    );
}

export const getStaticPaths:GetStaticPaths = async ()=> {
    // 각 페이지의 경로 파라미터를 모은 것
    const paths = [
        {
            params:{
                id:'1',
            },     
        }
        ,

        {
            params:{
                id:'2',
            },
        }
        ,

        {
            params:{
                id:'3'
            },
        } 
    ];

    return {paths,fallback:false};
};

export const getStaticProps: GetStaticProps<postProps,postParams> = async (context)=>{
    return { 
        props:{
            id: context.params!['id'],
        },
    };
};

export default Post;