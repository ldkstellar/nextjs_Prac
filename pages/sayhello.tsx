import { profile } from "console";
import { useState ,useEffect} from "react";

const Sayhello = ()=>{
    const [data, setData] = useState({name:""});
    useEffect(()=>{
        fetch('api/hello').then((res)=>res.json()).then((profile)=>{setData(profile)})
    },[]);//json형태로 응답을 파싱 및 파싱된 데이터를 이용해 작업 수행
    return <div>hello {data.name}</div>
}

export default Sayhello;