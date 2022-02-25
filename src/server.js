import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
// morgan MiddleWare를 좀 더 쉽게 사용하기 위해 사용

const PORT = 4000;

const app = express();
const logger = morgan("dev");

// app.set >> pug 셋팅
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
// app.use Middleware를 사용하기 위함!! 사용할 때 Middleware가 먼저 나오도록 설정!!
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`✅ server listening on port http://localhost:${PORT} 🛴`);

app.listen(PORT, handleListening);
// listen 서버를 구축함
// http://expressjs.com/en/4x/api.html#req >> 참고자료!!
