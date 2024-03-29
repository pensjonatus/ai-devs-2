import { getTask, getToken, sendAnswer } from "../modules/task-management";

async function testConnection() {
  const token = await getToken("helloapi");
  const task = await getTask(token);

  const { cookie } = task as any;

  sendAnswer(token, cookie);
}

testConnection();
