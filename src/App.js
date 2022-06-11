import React from "react";
import Repository from "./component/Repository";

const App = () => {
  return (
    <div>
      <Repository
        username="facebook"
        repository="react"
        theme="light"
        showStarCount={true}
        showForkCount={true}
        showLanguage={true}
        showDescription={true}
        showType={true}
      />
    </div>
  );
};

export default App;
