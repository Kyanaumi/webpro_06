# webpro_06
11月12日
## このプログラムについて
## ファイル一覧
ファイル名 | 説明
-|-
app5.js | プログラム全体
public/test.html | htmlのテスト用の画面
public/janken.html | じゃんけんの開始画面
views/show.ejs | Hello WorldとBon jourが表示されるテンプレートファイル
views/icon.ejs | Appleのロゴが表示されるテンプレートファイル
views/luck.ejs | おみくじができるテンプレートファイル
views/janken.ejs | じゃんけんをするテンプレートファイル
views/nibuiti.ejs | 2分の1ををてるゲームのテンプレートファイル
views/attimuite.ejs | コンピュータとあっち向いてホイをするためのテンプレートファイル

```javascript
console.log("Hello");
```

## 使用方法
### show.ejs
1. ターミナルを開き```cd Desktop```，```cd webpuro```，```cd webpro_06```の順に実行する．
1. ターミナル内で```node app5.js```を実行する．
1. webブラウザ内で http://localhost:8080/hello1 または，http://localhost:8080/hello2 にアクセスする．
1. Hello WorldとBon jourが表示される．


```mermaid
flowchart TD;

開始 --> node1[文字の表示] -->終了;
```

### icon.ejs
1. ターミナルを開き```cd Desktop```，```cd webpuro```，```cd webpro_06```の順に実行する．
1. ターミナル内で```node app5.js```を実行する．
1. webブラウザ内で http://localhost:8080/icon にアクセスする．
1. Appleのロゴが表示される．

```mermaid
flowchart TD;
開始 --> node1[アイコンの表示] -->終了;
```

### luck.ejs
1. ターミナルを開き```cd Desktop```，```cd webpuro```，```cd webpro_06```の順に実行する．
1. ターミナル内で```node app5.js```を実行する．
1. webブラウザ内で http://localhost:8080/luck にアクセスする．
1. 運勢が大吉，中吉，小吉の中から選ばれる．

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"条件に合うか"}
dai["大吉"]
tyuu["中吉"]
syou["小吉"]

start --> if
if -->|1| dai
if --> |2| tyuu
if -->|3| syou
dai --> end1
tyuu --> end1
syou --> end1
```

### janken.ejs
1.  ターミナルを開き```cd Desktop```，```cd webpuro```，```cd webpro_06```の順に実行する．
1. ```node app5.js```を実行する
1. webブラウザでlocalhost:8080/public/janken.htmlにアクセスする．
1. 自分の手，グー，チョキ，パーのどれかを入力して送信する．

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"グー，チョキ，パーのどれかを送信"}
win["勝ち"]
loose["負け"]
aiko["引き分け"]

start --> if
if -->|グー| win
if --> |チョキ| win
if -->|パー| win
win --> end1
if -->|グー| loose
if -->|チョキ| loose
if -->|パー| loose
loose--> end1
if --> |グー| aiko
if --> |チョキ| aiko
if --> |パー| aiko
aiko --> end1
```

### nibuiti.ejs
1. ターミナルを開き```cd Desktop```，```cd webpuro```，```cd webpro_06```の順に実行する．
1. ターミナル内で```node app5.js```を実行する．
1. webブラウザ内で http://localhost:8080/nibuiti にアクセスする．
1. コンピュータが右と左どちらなのかを予想し右，左のどちらかを入力し送信する．

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"右左のどちらかを送信"}
win["勝ち"]
loose["負け"]

start --> if
if -->|右| win
if --> |左| win
win --> end1
if -->|右| loose
if -->|左| loose
loose--> end1
```

### atiimuite.ejs
1. ターミナルを開き```cd Desktop```，```cd webpuro```，```cd webpro_06```の順に実行する．
1. ターミナル内で```node app5.js```を実行する．
1. webブラウザ内で http://localhost:8080/attimuite にアクセスする．
1. コンピュータが上，右，左，下のどちらの方向に向くのかを予想し上，右，左，下のどれかを入力し送信する．

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"上,右,左,下のどれかを送信"}
win["勝ち"]
loose["負け"]

start --> if
if -->|上| win
if --> |右| win
if -->|左| win
if --> |下| win
win --> end1
if -->|上| loose
if -->|右| loose
if -->|左| loose
if -->|下| loose
loose--> end1
```