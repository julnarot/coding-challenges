import { it, expect } from "vitest"
import { gradingStudents } from "./grading"

it('example 01', () => {
    expect([75, 67, 40, 33]).toEqual(gradingStudents([73, 67, 38, 33]))
})