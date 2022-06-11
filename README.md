# React Github Embed

## Example

```jsx
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
        theme="dark"
      />
    </div>
  );
};

export default App;
```

## Options

| Property |  Type  | Description                                                                                                                                                   |
| :------------- | :----: | :----------------------- |
| username<br/>_(required)_        | string | Username of the Github User |
| repository<br/>_(required)_        | string | Repository of the Github User |
| theme<br/> | string | Theme of the card `"light"` or `"dark"`<br/>Deafults to `"light"` |
| showStarCount |  bool  | When `true`, shows the total star count of repository.<br/>Defaults to `true`|
| showForkCount |  bool  | When `true`, shows the total fork count of repository.<br/>Defaults to `true`|
| showLanguage |  bool  | When `true`, shows the main language of repository.<br/>Defaults to `true`|
| showDescription |  bool  | When `true`, shows the description of repository.<br/>Defaults to `true`|
| showType |  bool  | When `true`, shows the type of repository.<br/>`Public template` `Pribate template` `Private` `Public` `Forked`<br/>Defaults to `true`|

## Browser Compatibility
| Browser | Works? |
| :------ | :----- |
| Chrome  | Yes    |
| Firefox | Yes    |
| Safari  | Yes    |
| IE 11   | Yes    |

Pull requests are welcome!

## License

MIT