import React,{useState, useEffect} from 'react'
import Axios from 'axios'
// function Api(){
//     const[recipes,setRecipes]=useState([])
//     useEffect(()=>{
//         console.log('i am in useEffect')
//         Axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res=>{
//             console.log(res)
//             setRecipes(res.data.meals[0]);
//         })
//     },[])
//     return(
//         <>
//         { <h1>{recipes.strIngredient1}</h1> }
//         </>

//     )
// }
function Api(){
    const[post,setPost]=useState([])
    useEffect(()=>{
        console.log('use function')
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            console.log(res.data)
            res = res.data.slice(0,10) 
            setPost(res)
            
        },[])

    })
    return(
        <>
        </>
    )
}
export default Api

