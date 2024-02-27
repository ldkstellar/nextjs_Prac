import {NextPage} from "next";
import Image from "next/image";
import Enjo from "../public/images/enjo.jpeg";

const ImageSample:NextPage<void> = (props)=>{
    return(
        <div>
            <h1>이미지태그 비교</h1>
            <p>img 태그를 사용한 경우</p>
            <img src="/images/enjo.jpeg" width={200} height={200}/>
            <p>이미지 컴퍼넌트를 사용하는 경우</p>
            <Image src={Enjo} alt=""/>
            
        
        </div>
    )
}

export default ImageSample;