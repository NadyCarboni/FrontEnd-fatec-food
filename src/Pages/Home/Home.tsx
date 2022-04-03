import React, { useState } from "react";

import Loading from "./Loading/Loading";
import Main from "./Main/Main";

function Home() {
  const [loading, setLoading] = useState(true);

  return <div>{loading && <Loading />}</div>;
}

export default Home;
