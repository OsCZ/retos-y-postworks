
import { suma } from "../suma";

test('adds 4 + 3 to equal 7', () => {

  const a = 4
  const b = 3
  const output = 7

     expect(suma(a,b)).toEqual(output);
     
});