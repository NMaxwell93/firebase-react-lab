import { useEffect, useState } from "react";
import ShoutOut from "../model/ShoutOut";
import { createShoutOut, deleteShoutOut, readAllShoutOuts } from "../service/ShoutOutApi";
import ShoutOutForm from "./ShoutOutForm";
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

  function handleAddShoutOut(shoutOut: ShoutOut): void {
    createShoutOut(shoutOut).then(loadShoutOuts)
    console.log(shoutOut)
  }

  function handleDeleteShoutOut(shoutOutId: string): void {
    deleteShoutOut(shoutOutId).then(loadShoutOuts)
    console.log(shoutOutId)
  }

  return (
    <div className="ShoutList">
      <div className="listOfShouts">
        {shoutOuts.map(eachShoutout => 
          <ShoutOutPost key={eachShoutout._id} shoutOut={eachShoutout} onDelete={() => handleDeleteShoutOut(eachShoutout._id!)} />
        )}
      </div>
      <ShoutOutForm onSubmit={handleAddShoutOut} />
    </div>
  );
}

export default ShoutList;
