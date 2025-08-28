import { readLineAsync } from './utils/readLineAsync.js';
import { Car } from './Car.js';

const MAX_RACING_ROUND = 5;

play();

async function play() {
  const name = await readLineAsync('경주할 자동차 이름을 입력하세요.\n');
  const car = new Car(name);

  console.log('\n실행 결과\n');
  for (let currentRound = 1; currentRound <= MAX_RACING_ROUND; currentRound++) {
    car.move();
  }
  console.log('경주를 완료했습니다.');
}
