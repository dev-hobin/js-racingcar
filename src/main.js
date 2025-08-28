import { readLineAsync } from './utils/readLineAsync.js';
import { Car } from './Car.js';

const MAX_RACING_ROUND = 5;

play();

async function play() {
  const names = await readLineAsync('경주할 자동차 이름을 입력하세요.\n');

  const cars = names.split(',').map((name) => new Car(name));

  linebreak();
  console.log('실행 결과');
  for (let currentRound = 1; currentRound <= MAX_RACING_ROUND; currentRound++) {
    cars.forEach((car) => car.move());
    cars.forEach((car) => {
      console.log(`${car.name} : ${'-'.repeat(car.location)}`);
    });
    linebreak();
  }
  console.log('경주를 완료했습니다.');
}

function linebreak() {
  console.log('\n');
}
