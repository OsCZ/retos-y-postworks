import { compact } from "../compact";

describe('compact function' ,() =>{
    test('remover valores falsos' ,() =>{
     const input = [0, 1, false, 2, '', 3 ];
     const output = [1,2,3];

        expect(compact(input)).toEqual(output);

    })

    test('valores vacios del array',() =>{
     
           expect (()=> {
            compact([])
           }).toThrow();  
       })


       
    
}); 