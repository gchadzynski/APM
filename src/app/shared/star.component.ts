import { Component, OnChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponents implements OnChanges {
    rating: number = 4;
    starWidth: number;

    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
    }
}