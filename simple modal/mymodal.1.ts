import {Component, Input} from '@angular/core'

@Component({
    selector: "mymodal",
    templateUrl: './mymodal.html',
    inputs: ['visible']
})

export class MyModal {
    public visible: boolean;
    constructor(
    ) { }

    show(){
        this.visible = true;
    }
    hide(){
        this.visible = false;
    }
}