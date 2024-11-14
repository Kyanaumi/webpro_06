const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

//http://localhost:8080/hello1

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

//http://localhost:8080/hello2

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

//http://localhost:8080/icon

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 3 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  else luck = '小吉'
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

//http://localhost:8080/luck

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win ||0);
  let total = Number( req.query.total ||0);
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  // 今はダミーで人間の勝ちにしておく
  let judgement = '';
  //グーの勝敗
  if (cpu == 'グー' && hand == 'パー') judgement = '勝ち' ,win++
  else if (cpu == 'グー' && hand == 'チョキ') judgement = '負け'
  else if (cpu == 'グー' && hand == 'グー') judgement = '引き分け'
  //チョキの勝敗
  if (cpu == 'チョキ' && hand == 'パー') judgement = '負け' 
  else if (cpu == 'チョキ' && hand == 'チョキ') judgement = '引き分け'
  else if (cpu == 'チョキ' && hand == 'グー') judgement = '勝ち' ,win++
  //パーの勝敗
  if (cpu == 'パー' && hand == 'パー') judgement = '引き分け' 
  else if (cpu == 'パー' && hand == 'チョキ') judgement = '勝ち' ,win++
  else if (cpu == 'パー' && hand == 'グー') judgement = '負け'

  total = total+1;
  
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

//http://localhost:8080/janken


app.get("/nibuiti", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win ||0);
  let total = Number( req.query.total ||0);
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 2 + 1 );
  let cpu = '';
  if( num==1 ) cpu = '右';
  else if( num==2 ) cpu = '左';
  
  let judgement = '';
  
  if (cpu == '右' && hand == '右') judgement = '勝ち' ,win++
  else if (cpu == '右' && hand == '左') judgement = '負け'
  
  if (cpu == '左' && hand == '右') judgement = '負け' 
  else if (cpu == '左' && hand == '左') judgement = '勝ち',win++

  total = total+1;
  
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'nibuiti', display );
});

//http://localhost:8080/nibuiti

app.get("/attimuite", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win ||0);
  let total = Number( req.query.total ||0);
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 4 + 1 );
  let cpu = '';
  if( num==1 ) cpu = '上';
  else if( num==2 ) cpu = '右';
  else if ( num==3 ) cpu = '左';
  else cpu = '下'
  // ここに勝敗の判定を入れる
  // 今はダミーで人間の勝ちにしておく
  let judgement = '';
 
  if (cpu == '上' && hand == '上') judgement = '勝ち' ,win++
  else if (cpu == '上' && hand == '右') judgement = '負け'
  else if (cpu == '上' && hand == '左') judgement = '負け'
  else if (cpu == '上' && hand == '下') judgement = '負け'

  if (cpu == '右' && hand == '上') judgement = '負け' 
  else if (cpu == '右' && hand == '右') judgement = '勝ち' , win++
  else if (cpu == '右' && hand == '左') judgement = '負け'
  else if (cpu == '右' && hand == '下') judgement = '負け'

  if (cpu == '左' && hand == '上') judgement = '負け' 
  else if (cpu == '左' && hand == '右') judgement = '負け'
  else if (cpu == '左' && hand == '左') judgement = '勝ち' , win++
  else if (cpu == '左' && hand == '下') judgement = '負け'

  if (cpu == '下' && hand == '上') judgement = '負け' 
  else if (cpu == '下' && hand == '右') judgement = '負け'
  else if (cpu == '下' && hand == '左') judgement = '負け'
  else if (cpu == '下' && hand == '下') judgement = '勝ち', win++

  total = total+1;
  
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'attimuite', display );
});
app.listen(8080, () => console.log("Example app listening on port 8080!"));
//http://localhost:8080/attimuite






