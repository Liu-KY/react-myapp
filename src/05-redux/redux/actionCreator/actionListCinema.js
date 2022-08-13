import { getListCinema } from "../../utils/api";

// function actionListCinema (){
//     return (dispatch)=>{
//         getListCinema().then(res=>{
//             console.log(res)
//             dispatch({
//                 type:'changeListCinema',
//                 value:res.data.data.cinemas
//             })
//         })
//     }
// }

async function actionListCinema() {
  let list = await getListCinema().then((res) => {
    return {
      type: "changeListCinema",
      value: res.data.data.cinemas,
    };
  })
  return list
}

export default actionListCinema;
