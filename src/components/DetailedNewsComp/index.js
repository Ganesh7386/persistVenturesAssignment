import { useEffect } from "react";


const DetailedNewsComp = ()=> {
    useEffect(()=> {
        console.log("effect in detailed news")
    } , [])
    return (
    <h1>This is detailed news route</h1>
    )
}
export default DetailedNewsComp;