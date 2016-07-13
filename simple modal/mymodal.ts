import {Component, Input} from '@angular/core'

@Component({
    selector: "mymodal",
    templateUrl: './mymodal.html'
})

export class MyModal {
    @Input()
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