import { IConsoleAccesory } from "./accessories.model";

export class Console {
    name: string;
    vendor: string;
    price: number;
    image: string;
    accesories: IConsoleAccesory [];


    
    constructor(name?: string, vendor?: string, price?: number,  image ?:string , items?:IConsoleAccesory[]) {
        this.name = name as string;
        this.vendor = vendor as string;
        this.price = price as number;
        this.image = image as string;
        this.accesories =  items as IConsoleAccesory[];
      }
}
