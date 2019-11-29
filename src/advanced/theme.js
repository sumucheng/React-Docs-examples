// context

import React, { useState, useEffect } from "react";
import "./theme.css";

const { Provider, Consumer } = React.createContext("light");

function withTheme(Component) {
  return function ThemeComponent(props) {
    return (
      <Consumer>{theme => <Component {...props} theme={theme} />}</Consumer>
    );
  };
}

function Nav({ theme, ...rest }) {
  return (
    <div className={`theme-div ${theme}`} {...rest}>
      <p>寝台特急1/60秒障碍 第3章 寻找另一个千鹤子</p>
    </div>
  );
}

function Content({ theme, ...rest }) {
  console.log(theme);
  return (
    <div className={`theme-content ${theme}`} {...rest}>
      <p>{article}</p>
    </div>
  );
}

function Button({ theme, ...rest }) {
  return (
    <button className={`theme-button ${theme}`} {...rest}>
      {theme}
    </button>
  );
}

const ThemeNav = withTheme(Nav);
const ThemeContent = withTheme(Content);
const ThemeButton = withTheme(Button);

function Middle(props) {
  return (
    <div>
      <div className="theme-wrapper">
        <ThemeNav />
        <ThemeButton onClick={props.changeTheme}></ThemeButton>
        <ThemeContent />
      </div>
    </div>
  );
}

function Theme() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      <Provider value={theme}>
        <Middle changeTheme={changeTheme} />
      </Provider>
    </div>
  );
}

let article = `
  吉敷想起长冈的文章，在旅途中为了看日出而早起——果然是值得一看的景色。
  吉敷又想起那幻影般的女人。
  九条千鹤子在隼号从东京车站发车前应该已被谋杀，但是，这女人却如幻影般地出现在隼号列车上——这是六十分之一秒的幻影。
  如果这女人是双胞胎中的另一人，倒是有可能参与蓝色列车之旅——但这同样的也是幻影。
  可惜自己没有看到——吉敷的脑际反复闪现着这句话。
  与这件事有关的许多人，都见过生前的九条千鹤子或隼号中的幻影，只有自己没有见过。
  自己见到的千鹤子是被剥了脸皮的千鹤子，所以，只能通过相片一睹千鹤子的全貌。`;

export default Theme;
