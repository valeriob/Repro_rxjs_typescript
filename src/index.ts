
 module Index{
    export class IndexViewModel{
        
        constructor(){

            // if you append this line "export as namespace rxjs;" to the file node_modules/rxjs/index.d.ts it will work
            let subject = new rxjs.Subject();
        }
    }
}