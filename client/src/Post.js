import React, { useState, useEffect } from "react";
import axios from "axios";

function Post() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);

  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios("http://localhost:9000");
        console.log("test data", res);
        setData(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
        setPassword(res.data.password);
        setAge(res.data.age);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("http://localhost:9000/post", {
      //   name,
      //   email,
      //   password,
      //   age,
      // });
      // console.log(res);
      const res = await fetch("http://localhost:9000/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, age }),
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Post;
