function getScore(attempt) {
  return attempt ? attempt.score : "nil";
}

test('returns score when attempt exists', () => {
  expect(getScore({ score: 7 })).toBe(7);
});

test('returns "nil" when no attempt', () => {
  expect(getScore(null)).toBe("nil");
});
