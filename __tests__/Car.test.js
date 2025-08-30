import { Car } from '../src/Car.js';

const createCar = (name = '이름') => {
  return new Car(name);
};

describe('자동차는', () => {
  it('이름을 상태로 가질 수 있다', () => {
    const CAR_NAME = '이름';

    const car = createCar(CAR_NAME);

    expect(car.name).toBe(CAR_NAME);
  });

  it('이름이 빈 문자열이거나 공백일 경우 에러가 발생한다.', () => {
    const ERROR_MESSAGE = '자동차 이름은 필수입니다.';

    expect(() => createCar('')).toThrow(ERROR_MESSAGE);
    expect(() => createCar('   ')).toThrow(ERROR_MESSAGE);
  });

  it('이름이 5자를 넘어가면 에러가 발생한다.', () => {
    const ERROR_MESSAGE = '자동차 이름은 5자 이하이어야 합니다.';

    expect(() => createCar('이름이6글자')).toThrow(ERROR_MESSAGE);
  });

  it('위치 값을 가지며, 초기 상태는 0 이다', () => {
    const car = createCar();

    expect(car.location).toBe(0);
  });

  it('전진할 수 있으며 한 번에 1만큼 전진한다.', () => {
    const car = createCar();

    car.move();

    expect(car.location).toBe(1);
  });
});
