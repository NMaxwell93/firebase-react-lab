import { useEffect, useState } from "react";
import ShoutOut from "../model/ShoutOut";
import { readAllShoutOuts } from "../service/ShoutOutApi";

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
      <ul className="listOfShouts">
        {shoutOuts.map((shoutOut) => (
          <li key={shoutOut._id}>
            <span>To: {shoutOut.to}</span>
            <span>From: {shoutOut.from}</span>
            <span>Message: {shoutOut.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoutList;
