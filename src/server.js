import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("I still love u");
};

app.use(logger);

// app.use Middleware를 사용하기 위함!! 사용할 때 Middleware가 먼저 나오도록 설정!!
app.get("/", handleHome);
// localhost:4000 + "/" 들어가면 handleHome을 발동!

const handleListening = () =>
  console.log(`✅ server listening on port http://localhost:${PORT} 🛴`);

app.listen(PORT, handleListening);
// listen 서버를 구축함
// http://expressjs.com/en/4x/api.html#req >> 참고자료!!
