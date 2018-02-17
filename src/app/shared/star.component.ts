import { Component, OnChanges, Input,  Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponents implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() raitingClicked: EventEmitter<string> =
            new EventEmitter<string>();
    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void {
        this.raitingClicked.emit(`The raiting ${this.rating}`)
    }
}