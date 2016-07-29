import {Component} from '@angular/core'
import {MyModal} from './mymodal'

@Component({
    selector: "modalexample",
    templateUrl: './modalexample.html',
    directives: [ModalHistory]

})
export class ModalExample {
    constructor(
        
    ) { }

	onNotify(message: string): void {
        if (message) {
            //do something depending on what message you get back, etc...
        }
    }
}