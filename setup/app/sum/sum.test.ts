import { sum } from "./sum";

test("add two number", () => {
    expect(sum(20, 30)).toBe(50);
})