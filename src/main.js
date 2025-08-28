import { readLineAsync } from './utils/readLineAsync.js';
import { Car } from './Car.js';

play();

async function play() {
  const name = await readLineAsync('자동차 이름을 입력하세요 > ');
  const car = new Car(name);

  console.log(`자동차 이름은 ${car.name}입니다.`);
}
