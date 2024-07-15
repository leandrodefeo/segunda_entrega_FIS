import { describe, it, expect, beforeEach } from '@jest/globals';
import { MatchesList } from '../matcheslist.js';
import { Matches } from '../Matches.js';

describe('MatchesList', () => {
  let matchesList;
  let match1;
  let match2;

  beforeEach(() => {
    matchesList = new MatchesList();
    match1 = new Matches('Uruguay');
    match1.setCountry2('Colombia');
    match1.setScore('0-1');
    match1.setDate('2024-07-10');
    match1.setStage('Semifinal');

    match2 = new Matches('Uruguay');
    match2.setCountry2('Brasil');
    match2.setScore('0-0');
    match2.setDate('2024-07-06');
    match2.setStage('Cuartos de final');
  });

  test('constructor initializes correctly', () => {
    expect(matchesList.getMatches()).toEqual([]);
  });

  test('add method adds a match correctly', () => {
    matchesList.add(match1);
    expect(matchesList.getMatches()).toContain(match1);
  });

  test('add method throws error for duplicate match', () => {
    matchesList.add(match1);
    expect(() => matchesList.add(match1)).toThrow(
      `El partido entre Uruguay y Colombia ya está en la lista.`
    );
  });

  test('getMatches method returns correct matches', () => {
    matchesList.add(match1);
    matchesList.add(match2);
    expect(matchesList.getMatches()).toEqual([match1, match2]);
  });
});
