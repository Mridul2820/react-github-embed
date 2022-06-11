import React from "react";
import Repository from "./component/Repository";

const App = () => {
  return (
    <div className="flex flex-wrap gap-5 p-5">
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
      <Repository
        username="Mridul2820"
        repository="cineparadis"
        theme="light"
        showStarCount={true}
        showForkCount={true}
        showLanguage={true}
        showDescription={true}
        showType={true}
      />
      <Repository
        username="Mridul2820"
        repository="css-js"
        theme="light"
        showStarCount={true}
        showForkCount={true}
        showLanguage={true}
        showDescription={true}
        showType={true}
      />
      <Repository
        username="Mridul2820"
        repository="next-template"
        theme="light"
      />
    </div>
  );
};

export default App;
