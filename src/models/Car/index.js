import {
  CAR_NAME_MAX_LENGTH,
  CAR_NAME_REQUIRED_ERROR_MESSAGE,
  CAR_NAME_MAX_LENGTH_ERROR_MESSAGE,
} from './constant.js';

export class Car {
  #name;
  #location = 0;

  constructor(name) {
    if (!name || !name.trim()) {
      throw new Error(CAR_NAME_REQUIRED_ERROR_MESSAGE);
    }
    if (name.trim().length > CAR_NAME_MAX_LENGTH) {
      throw new Error(CAR_NAME_MAX_LENGTH_ERROR_MESSAGE);
    }

    this.#name = name.trim();
  }

  move() {
    this.#location += 1;
  }

  get information() {
    return {
      name: this.#name,
      location: this.#location,
    };
  }
}
