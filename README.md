# todoList_SQL

環境建置與需求 (prerequisites)
<ul>
<li>
    "express": "^4.17.2"
    </li>
    <li>
    "express-handlebars": "^6.0.2"
     </li>
    <li>
    "method-override": "^3.0.0"
     </li>
    <li>
    "mongoose": "^6.1.5"
     </li>
    <li>
    "nodemon": "^2.0.15"
</li>
   <li>
    "bcryptjs": "^2.4.3"
</li>
  <li>
    "connect-flash": "^0.1.1"
</li>
 <li>
   "dotenv": "^16.0.0"
</li>
<li>
  "express-session": "^1.17.2"
</li>
<li>
  "passport": "^0.4.1"
</li>
<li>
   "passport-facebook": "^3.0.0"
</li>
<li>
   "passport-local": "^1.0.0"
</li>
 <li>
資料庫使用:mongodb
    </li>
</ul>

安裝與執行步驟 (installation and execution)
<ul>
<li>
$git clone https://github.com/changpusheng/Restaurant.git
</li>
<li>
$git cd  Restaurant/
</li>
<li>
$npm init -y
</li>
<li>
$npm run allnpm
</li>
<li>
依照資料夾內文件.env.example 建立.env 檔，設定環境變數
</li>
<li>
$npm run seed
</li>
<li>
$npm run dev
</li>
<li>
看到 
This server is running on http://localhost:3000.
mongoose connected!
代表伺服器和資料庫連線成功!!
</li>
</ul>
功能描述 (features)
<ul>
<li>
基本CRUD
</li>
<li>
FB登入驗證系統
</li>
<li>
使用者分頁
</li>
</ul>
