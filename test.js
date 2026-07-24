// test.js
const test = require('node:test');
const assert = require('node:assert/strict'); // Use strict mode for accurate comparison
const { add } = require('./math');

test('adds two numbers correctly', () => {
  const result = add(2, 3);
  assert.strictEqual(result, 5);
});

test('handles negative numbers', () => {
  const result = add(-1, 5);
  assert.strictEqual(result, 4);
});
