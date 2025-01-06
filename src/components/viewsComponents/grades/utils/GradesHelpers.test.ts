import { expect } from '@jest/globals';
import { GradeValueEnum, PassDateAttemptEnum } from 'contract/enums/Enums';
import { IGrade } from 'contract/interfaces/academics/Academics';
import { calculateAverageGrade } from './GradesHelpers';

describe('calculateAverageGrade function', () => {
  test('should return "0.00" when the grades list is empty', () => {
    const gradesList: IGrade[] = [];
    expect(calculateAverageGrade(gradesList)).toBe('0.00');
  });

  test('should return "0.00" when all grades are invalid', () => {
    const gradesList: IGrade[] = [
      { id: '1', subject: { id: 101, name: 'Math' }, grade: null, passDateAttempt: null },
      { id: '2', subject: { id: 102, name: 'Science' }, grade: null, passDateAttempt: null },
      { id: '3', subject: { id: 103, name: 'History' }, grade: null, passDateAttempt: null },
    ];

    expect(calculateAverageGrade(gradesList)).toBe('0.00');
  });

  test('should ignore invalid grades and return correct average', () => {
    const gradesList: IGrade[] = [
      { id: '1', subject: { id: 101, name: 'Math' }, grade: GradeValueEnum.Fair, passDateAttempt: null },
      { id: '2', subject: { id: 102, name: 'Science' }, grade: null, passDateAttempt: null },
      { id: '3', subject: { id: 103, name: 'History' }, grade: GradeValueEnum.Excellent, passDateAttempt: null },
    ];

    expect(calculateAverageGrade(gradesList)).toBe('4.00');
  });

  test('should handle a single valid grade correctly', () => {
    const gradesList: IGrade[] = [
      { id: '1', subject: { id: 101, name: 'Math' }, grade: GradeValueEnum.Excellent, passDateAttempt: null },
    ];

    expect(calculateAverageGrade(gradesList)).toBe('5.00');
  });

  test('should handle GradeValueEnum values (e.g., numerical enum values)', () => {
    const gradesList: IGrade[] = [
      { id: '1', subject: { id: 101, name: 'Math' }, grade: GradeValueEnum.Excellent, passDateAttempt: null },
      { id: '2', subject: { id: 102, name: 'Science' }, grade: GradeValueEnum.Good, passDateAttempt: null },
      { id: '3', subject: { id: 103, name: 'History' }, grade: GradeValueEnum.Fair, passDateAttempt: null },
    ];

    expect(calculateAverageGrade(gradesList)).toBe('4.00');
  });

  test('should handle multiple attempts correctly', () => {
    const gradesList: IGrade[] = [
      {
        id: '1',
        subject: { id: 101, name: 'Math' },
        grade: GradeValueEnum.Fair,
        passDateAttempt: PassDateAttemptEnum.FirstAttempt,
      },
      {
        id: '2',
        subject: { id: 102, name: 'Science' },
        grade: GradeValueEnum.Good,
        passDateAttempt: PassDateAttemptEnum.SecondAttempt,
      },
      {
        id: '3',
        subject: { id: 103, name: 'History' },
        grade: GradeValueEnum.Excellent,
        passDateAttempt: PassDateAttemptEnum.ThirdAttempt,
      },
    ];

    expect(calculateAverageGrade(gradesList)).toBe('4.00');
  });
});
