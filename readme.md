<h1>Good Student Shop 好學生文具網</h1>

<p><a href="https://goodstudentshop.github.io/">網站連結</a></p>
<p>目的: 製作多頁式購物車網站以達到練習React，應用Bootstrap使得本網站有響應式的效果。</p>
<p>使用到的技術: Webpack, Bootstrap, React, React-Router, React-Bootstrap,SASS</p>
<h4>React-Router:</h4> 
  <p>使用到Router ,Route, Switch ,Link元件，達到多頁的瀏覽效果。</p>
  <p>以class App為核心，使用Router ,Route, Switch ,Link架構可多頁且切換的網站。雖然看起來是多頁面的，但整個網站其實都在<Router>裡面。利用Switch做到網頁切換的效果，Route path來指定網站路徑。Link來做超鏈結的功能。</p>
<p>以class App為核心，將數據都存放在state裡面，再使用value=this.state.value的方式讓數據傳遞到別的class。handler也放在class App裡面，若有需要傳遞到別的class，使用handler=this.state.handler的方式，讓別的class使用。</p>
<p>若是有增減數量，或是啟動/關閉某個功能，則以this.setState 來調整state的數據資料，將this.setstate放在handler裡面。</p>
<p>若是要顯示已儲存在state的數據，像是使用者在"填寫資料"頁面所填寫的"電話號碼"，要在"結帳畫面"顯示已經填寫的"電話號碼"，則使用phoneNumber=this.props.phoneNumber 將"電話號碼"顯示出來。</p>
<h4>React-Bootstrap: </h4>
  <p>使用到 Carousel, Navbar, Modal, Alert, Card, Container, Row, Col, Form 等 元件，達到網站的互動效果。</p>
  <p>其中以Modal元件做購物車的跳出視窗，使用到其動畫效果及下拉捲軸的功能，讓購物車的功能能更完整。另外也使用到Grid-system，使用到Container, Row, Col 等元件，來讓網站做到RWD的效果。</p>
  <p>在首頁所看到的商品顯示框，以Card元件，搭配map指令。個別商品以Card元件為框架，再放入圖片，價格等資訊，舉例而言，prodcutPrice=this.props.productPrice，以props接收傳入的價格。最後再搭配map指令，將每一個商品顯示框繪製出來。</p>
<p>此外，在填寫消費者個人資訊的部分，使用Form元件，並且使用到驗證(validation)的功能，因此若是使用者按下"送出"按鈕時，若是某個欄位沒有填寫到，則表格無法送出，並且在下方會跳出提醒，此欄位尚未填寫。此外在"城市" 跟"鄉/鎮/市/區"使用Select，讓使用者以下拉選單的方式，選取"城市"，當選定"城市"時，"鄉/鎮/市/區"欄位也會跟著顯示相應的內容，當選定"鄉/鎮/市/區"時，郵遞區號也會自動產生在網頁上。最後，將Modal的跳出功能放在跳出按鈕裡面，因此當使用者的所有欄位都填寫正確後，按下送出按鈕時，會有"通知"視窗跳出，來讓使用者選擇下一步要"結帳"還是"繼續購物"。</p>
<h4>SASS: </h4>
  <p>使用其巢狀功能及@media。將各個component的css設定放在個別的檔案中，再import到syle.scss中彙整起來，使用Scout-App將檔案轉換成瀏覽器可以閱讀的css檔案</p>

