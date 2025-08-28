import { readLineAsync } from './utils/readLineAsync.js';

play();

async function play() {
  const name = await readLineAsync('자동차 이름을 입력하세요 > ');
  console.log(`자동차 이름은 ${name}입니다.`);
}
