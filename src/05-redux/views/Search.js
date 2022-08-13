import { useState, useEffect ,useMemo} from "react";
import {store} from '../redux/store'
import actionListCinema from '../redux/actionCreator/actionListCinema'

function Search() {
  const [myText, setMyText] = useState("");
  const [listCinema, setListCinema] = useState(
    store.getState().listCinema.list
  );

  useEffect(() => {
    if (store.getState().listCinema.list.length === 0) {
      store.dispatch(actionListCinema());
    }

   const unSubscribe= store.subscribe(() => {
      setListCinema(store.getState().listCinema.list);
    });

    return ()=>{
        unSubscribe()
    }
  }, []);

  const getCinemaList = useMemo(
    () =>
      listCinema.filter(
        (item) =>
          item.name.toUpperCase().includes(myText.toUpperCase()) ||
          item.address.toUpperCase().includes(myText.toUpperCase())
      ),
    [listCinema, myText]
  );

  return (
    <div>
      <input
        style={{ width: "95%", height: "20px" }}
        value={myText}
        onChange={(ev) => setMyText(ev.target.value)}
      />
      {getCinemaList.map((item) => (
        <dl key={item.cinemaId} style={{ padding: "10px" }}>
          <dt>{item.name}</dt>
          <dd style={{ fontSize: "12px" }}>{item.address}</dd>
        </dl>
      ))}
    </div>
  );
}

export default Search;
