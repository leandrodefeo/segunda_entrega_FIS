export class Matches {
  #Country1;
  #Country2;
  #score;
  #date;
  #stage;

  constructor(aCountry1) {
    this.#Country1 = aCountry1;
  }

  getStage() {
    return this.#stage;
  }

  getCountry1() {
    return this.#Country1;
  }

  getCountry2() {
    return this.#Country2;
  }

  getScore() {
    return this.#score;
  }

  getDate() {
    return this.#date;
  }

  setCountry2(aCountry2) {
    this.#Country2 = aCountry2;
  }

  setScore(aScore) {
    this.#score = aScore;
  }

  setDate(aDate) {
    this.#date = aDate;
  }

  setStage(aStage) {
    this.#stage = aStage;
  }

  toString() {
    return `Pais1: ${this.#Country1} - Pais2: ${this.#Country2} - Score: ${
      this.#score
    } \nDate: ${this.#date} stage: ${this.#stage} `;
  }

  isValid() {
    if (
      this.#Country1 === undefined ||
      this.#Country1 === null ||
      this.#Country1 === ''
    ) {
      throw new Error('Error: El Pais1 no puede ser vacío');
    }
    if (
      this.#Country2 === undefined ||
      this.#Country2 === null ||
      this.#Country2 === ''
    ) {
      throw new Error('Error: El Pais2 no puede ser vacío');
    }
    if (
      this.#score === undefined ||
      this.#score === null ||
      this.#score === ''
    ) {
      throw new Error('Error: El resultado no puede ser vacío');
    }
    if (this.#date === undefined || this.#date === null || this.#date === '') {
      throw new Error('Error: La fecha no puede estar vacía');
    }
    if (
      this.#stage === undefined ||
      this.#stage === null ||
      this.#stage === ''
    ) {
      throw new Error('Error: La etapa de la copa no puede estar vacía');
    }
    return true;
  }
}
