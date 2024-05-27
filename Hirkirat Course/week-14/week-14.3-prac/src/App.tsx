import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    email: " ",
    name: " ",
  });

  useEffect(() => {
    axios
      .get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
      )
      .then((response) => {
        setLoading(false);
        setData(response.data);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
    </>
  );
}

export default App;
