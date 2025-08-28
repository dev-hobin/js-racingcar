const CAR_NAME_MAX_LENGTH = 5;

export class Car {
  constructor(name) {
    if (!name) {
      throw new Error('자동차 이름은 필수입니다.');
    }
    if (name.length > CAR_NAME_MAX_LENGTH) {
      throw new Error(
        `자동차 이름은 ${CAR_NAME_MAX_LENGTH}자 이하이어야 합니다.`,
      );
    }

    this.name = name;
    this.location = 0;
  }

  move() {
    this.location += 1;
  }
}
