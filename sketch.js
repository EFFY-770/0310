let radio;
let submitButton;
let resultMessage = "";
let resultColor = "#000"; // 預設文字顏色為黑色

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawBackground(); // 呼叫自訂背景函數

  // 顯示題目框架
  stroke("#a0c4ff"); // 淡藍色框架顏色
  strokeWeight(5); // 框線寬度
  fill("#dbe7f3"); // 淡灰藍色框內填充顏色
  rect(width / 2 - 300, height / 2 - 200, 600, 150, 20); // 題目框架

  // 顯示題目
  textAlign(CENTER);
  textSize(48); // 調整題目字體大小
  fill("#5e6472"); // 淡灰色題目文字顏色
  text("12 + 5 等於多少？", width / 2, height / 2 - 150);

  // 建立選項
  radio = createRadio();
  radio.option("A. 16");
  radio.option("B. 17");
  radio.option("C. 18");
  radio.option("D. 19");
  radio.style('width', 'auto'); // 自動調整寬度
  radio.style('font-size', '36px'); // 調整選項字體大小
  radio.style('display', 'flex'); // 使用 flex 排列
  radio.style('justify-content', 'center'); // 水平置中
  radio.position(width / 2 - 200, height / 2 - 50);

  // 建立送出按鈕
  submitButton = createButton("送出");
  submitButton.style('font-size', '36px'); // 調整按鈕字體大小
  submitButton.position(width / 2 - 50, height / 2 + 50);
  submitButton.mousePressed(checkAnswer);
}

function draw() {
  drawBackground(); // 繪製背景

  // 顯示題目框架
  stroke("#a0c4ff");
  strokeWeight(5);
  fill("#dbe7f3");
  rect(width / 2 - 300, height / 2 - 200, 600, 150, 20);

  // 顯示題目
  textAlign(CENTER);
  textSize(48);
  fill("#5e6472");
  text("12 + 5 等於多少？", width / 2, height / 2 - 150);

  // 顯示結果訊息
  textSize(40);
  fill(resultColor); // 根據答對或答錯設定文字顏色
  text(resultMessage, width / 2, height / 2 + 150);
}

function checkAnswer() {
  const answer = radio.value();
  if (answer === "B. 17") {
    resultMessage = "答對了！";
    resultColor = "#90be6d"; // 淡綠色
  } else {
    resultMessage = "答錯了，請再試一次！";
    resultColor = "#f4a261"; // 淡橙色
  }
}

function drawBackground() {
  // 繪製漸層背景
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color("#fefae0"), color("#e8f5e9"), inter); // 淡黃色到淡綠色漸層
    stroke(c);
    line(0, y, width, y);
  }
}
