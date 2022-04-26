import React, { useState, useEffect } from "react";

import Loading from "./Loading/Loading";
import Main from "./Main/Main";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return <div>{loading ? <Loading /> : <Main />}</div>;
}

export default Home;
