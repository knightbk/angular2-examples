import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "mymodal",
    templateUrl: './mymodal.html'
})

export class MyModal {
    @Input() public visible: boolean;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    constructor(
    ) { }

    show(){
        this.visible = true;
    }
    hide(){
        this.visible = false;
    }
    close(){
        this.notify.emit('done');
    }
}