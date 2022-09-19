import logo from "./logo.svg";
import "./App.css";
import Box from "./Box";
import { useState } from "react";

// 가위바위보
const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn.troutline.ro/media/catalog/product/cache/1/small_image/57d39829afd9da0a90b25ac8e1388bac/c/u/curved-classic-scissor-medium-eyes.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

function App() {
  // 유저가 선택한 것
  const [userSelect, setUserSelect] = useState(null);

  // 컴퓨터가 선택한 것
  const [computerSelect, setComputerSelect] = useState(null);

  // 승부 결과
  const [result, setResult] = useState("");

  // 컴퓨터 선택(랜덤)
  const randomChoice = () => {
    // 객체에 key값만 뽑아서 배열로 만들어주는 함수
    let itemArray = Object.keys(choice);

    // 0부터2까지 랜덤하게 출력
    let randomItem = Math.floor(Math.random() * itemArray.length);

    // 컴퓨터 선택
    let final = itemArray[randomItem];

    return choice[final];
  };

  // 승부 결과
  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "draw";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  // 게임 함수
  const play = (item) => {
    // 유저가 선택한 값
    let userChoice = choice[item];
    setUserSelect(userChoice);

    // 컴퓨터가 랜덤하게 선택한 값
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    // 승부 결과
    setResult(judgement(userChoice, computerChoice));
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="btn">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
