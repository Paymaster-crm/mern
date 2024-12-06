import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios("http://localhost:9000");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  return <></>;
}

export default App;
