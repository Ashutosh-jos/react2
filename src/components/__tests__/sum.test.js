import { sum } from "../sum"

test("sum function testing",()=>{
    const result = sum(3,4);
    expect(result).toBe(7);
});