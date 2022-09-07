import logo from "./logo.svg";
import "./App.css";
import Box from "./Box";
import { useState } from "react";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다(win-초록, lose-빨강, draw-검정)

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
    if (user.name == computer.name) {
      return "draw";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
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
