export class MatchesList {
  #matches;

  constructor() {
    this.#matches = [];
  }

  add(match) {
    if (
      this.#matches.some((existingMatch) => existingMatch.isSameMatch(match))
    ) {
      throw new Error(
        `El partido entre ${match.getCountry1()} y ${match.getCountry2()} ya está en la lista.`
      );
    }
    this.#matches.push(match);
  }

  getMatches() {
    return this.#matches;
  }
}
