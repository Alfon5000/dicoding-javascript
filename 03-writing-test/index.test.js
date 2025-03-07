import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("should sum correctly", () => {
  // Arrange
  const operandA = 5;
  const operandB = 5;

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 10;
  assert.equal(actualValue, expectedValue);
});
