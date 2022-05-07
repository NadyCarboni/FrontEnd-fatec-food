import React, { useState, useEffect } from "react";

import Loading from "./Loading/Loading";
import Main from "./Main/Main";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}

export default Home;
