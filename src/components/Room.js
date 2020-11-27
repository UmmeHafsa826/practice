import React,{useState} from 'react'
// // function Room()
// {
//     const [inlit, setinlit] = useState(true);

// return(
//     <>
//        { inlit? 'Room is lit': 'Room is Dark'}
//         <button onClick={()=>setinlit(!inlit)}>Change</button>
//     </>
// )
// }

// function Room()
// {
//     let [num, setnum] = useState(0);
// return(
//     <>
//        {/* { num? 0 : 'Room is Dark'} */}
//         <button onClick={()=>setnum(num++)}>Change</button>
//         <p>{num}</p>
//     </>
// )
//  }
// function Room()
// {
//     const [inlit, setinlit] = useState();
//     let [num, setnum] = useState(0);
// return(
//     <>
//        {/* { num? 0 : 'Room is Dark'} */}
//         <button onClick={()=>setnum(num++)}>Change</button>
//         <p>{num}</p>
//     </>
// )
//  }
 function Room()
{
    // const [inlit, setinlit] = useState();
    let [num, setnum] = useState(null);
return(
    <>
    <div className={ num? 'on': 'off'}>
    <button onClick={()=>setnum(true)}>lightOn</button>
    <button onClick={()=>setnum(false)}>lightOff</button>
    </div>
    </>
)
}
export default Room