import React, { useEffect, useState } from "react";

import axios from "axios";
import Assets from "./Assets";

function App() {

  const [user, setUser] = useState("")

 const getUser= async()=>{

const url = "https://randomuser.me/api/";

try {
   const { data } = await axios(url);
   const info = data.results[0];
   console.log(info);
   setUser(info)
} catch (error) {
  console.log(error)
}
  }

useEffect(() => {
  getUser()
}, [])



  return (
    <main>
      <Assets user={user} getUser={getUser} />
    </main>
  );
}

export default App;
