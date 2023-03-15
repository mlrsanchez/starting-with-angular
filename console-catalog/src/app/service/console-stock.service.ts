import { Injectable } from '@angular/core';
import { Console } from '../models/console.model';


const consoles: Console[] = [
  {
    name: 'PS5',
    vendor: 'Sony',
    price: 499,
    image: 'https://i.blogs.es/4a4108/ps5-vs-ps4_jpg/450_1000.jpeg',
    accesories: [{
      name: 'XR',
      amount: 90
    },
    ]
  },
  {
    name: 'Switch',
    vendor: 'Nintendo',
    price: 249,
    image: 'https://th.bing.com/th?id=OIP.DW-STpCabU5jCYAY3DerKAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
    accesories: [{
      name: 'Joy-Con',
      amount: 123
    },
    {
      name: 'Switch Sports Pack',
      amount: 67
    },
    ]
  },
  {
    name: 'XBox',
    vendor: 'Microsoft',
    price: 299,
    image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Xbox-Series-S-Highlight-3000x1682-1:VP1-539x440',
    accesories: [{
      name: 'Xbox Adaptive Controller',
      amount: 89
    },
    {
      name: 'Xbox Adaptive Controller',
      amount: 89
    },
    ]
  },
]

@Injectable()
export class ConsoleStockService {

  constructor() { }
  getAllConsoles() {
    return consoles;
  }

  getConsoleByName(pName: string) {
    return consoles.find((c) => c.name === pName);
  }

  addConsole(consoleNew: Console) {
    consoles.push(consoleNew);
  }
}
