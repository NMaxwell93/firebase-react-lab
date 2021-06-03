import { useEffect, useState } from "react";
import ShoutOut from "../model/ShoutOut";
import { readAllShoutOuts } from "../service/ShoutOutApi";
import ShoutOutPost from "./ShoutOutPost"

function ShoutList() {
  const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>([]);

  useEffect(() => {
    loadShoutOuts();
  }, []);

  function loadShoutOuts() {
    readAllShoutOuts().then((shoutsFromApi) => {
      setShoutOuts(shoutsFromApi);
    });
  }

  return (
    <div className="ShoutList">
      <div className="listOfShouts">
        {shoutOuts.map(eachShoutout => (
          <ShoutOutPost key={eachShoutout._id} shoutOut={eachShoutout} />
        ))}
      </div>
    </div>
  );
}

export default ShoutList;
