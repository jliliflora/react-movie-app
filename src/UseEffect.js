import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function UseEffect() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClick2 = () => setShowing((prev) => !prev);

  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes.");
  }, [keyword, counter]);

  function Hello() {
    // #1
    function hiFn() {
      console.log("hi :)");
      return byeFn; //react app을 만들때 이렇게 useEffect안에서 return을 그렇게 많이 쓰지는 않는다고함
    }
    function byeFn() {
      console.log("bye :(");
    }
    useEffect(hiFn, []);

    // #2 -> 보통 화살표함수를 쓰는걸 선호함!! 딱봐도 짧잖아
    useEffect(() => {
      console.log("hi + 1");
      return () => console.log("bye + 1");
    }, []);

    // #3
    useEffect(function () {
      console.log("hi + 2");
      return function () {
        console.log("bye + 2");
      };
    }, []);

    return <h1>Hello</h1>;
  }

  return (
    <div>
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}

      <br />
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here ..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <Button text={"Continue"} />
    </div>
  );
}

export default UseEffect;
