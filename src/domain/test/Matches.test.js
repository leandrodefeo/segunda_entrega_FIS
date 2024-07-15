import { describe, it, expect, beforeEach } from '@jest/globals';
import { Matches } from '../Matches.js';

describe('Matches', () => {
  let match;

  beforeEach(() => {
    match = new Matches('Uruguay');
    match.setCountry2('Colombia');
    match.setScore('0-1');
    match.setDate('2024-07-10');
    match.setStage('Semifinal');
  });

  test('constructor initializes correctly', () => {
    expect(match.getCountry1()).toBe('Uruguay');
  });

  test('getters return correct values', () => {
    expect(match.getCountry2()).toBe('Colombia');
    expect(match.getScore()).toBe('0-1');
    expect(match.getDate()).toBe('2024-07-10');
    expect(match.getStage()).toBe('Semifinal');
  });

  test('setters change values correctly', () => {
    match.setCountry2('Brasil');
    match.setScore('0-0');
    match.setDate('2024-07-06');
    match.setStage('Cuartos de final');

    expect(match.getCountry2()).toBe('Brasil');
    expect(match.getScore()).toBe('0-0');
    expect(match.getDate()).toBe('2024-07-06');
    expect(match.getStage()).toBe('Cuartos de final');
  });

  test('isValid method returns true for valid match', () => {
    expect(match.isValid()).toBe(true);
  });

  test('isValid method throws error for empty Country1', () => {
    match = new Matches('');
    expect(() => match.isValid()).toThrow('Error: El Pais1 no puede ser vacío');
  });

  test('isValid method throws error for empty Country2', () => {
    match.setCountry2('');
    expect(() => match.isValid()).toThrow('Error: El Pais2 no puede ser vacío');
  });

  test('isValid method throws error for empty score', () => {
    match.setScore('');
    expect(() => match.isValid()).toThrow(
      'Error: El resultado no puede ser vacío'
    );
  });

  test('isValid method throws error for empty date', () => {
    match.setDate('');
    expect(() => match.isValid()).toThrow(
      'Error: La fecha no puede estar vacía'
    );
  });

  test('isValid method throws error for empty stage', () => {
    match.setStage('');
    expect(() => match.isValid()).toThrow(
      'Error: La etapa de la copa no puede estar vacía'
    );
  });

  test('toString method returns correct details', () => {
    const details = match.toString();
    expect(details).toBe(
      'Pais1: Uruguay - Pais2: Colombia - Score: 0-1 \nDate: 2024-07-10 stage: Semifinal '
    );
  });
});
