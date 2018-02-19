import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductSerice } from "./product.service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.components.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List !';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filerProducts = this.listFilter ? this.preformFilter(this.listFilter) : this.products;
        console.log(this.filerProducts);
    }

    filerProducts : IProduct[];
    products: IProduct[] = [];

    constructor(private _productService: ProductSerice) {
    }

    onRaitingClicked(message: string): void {
        this.pageTitle = 'Product list: ' + message;
    }
    
    toggleImage() : void{
        this.showImage = !this.showImage;
    }

    preformFilter(filterBy: string) : IProduct[] {
        console.log('#1' + filterBy);
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        console.log('#2');
        this._productService.getProducts()
        .subscribe(products =>{ 
            this.products = products,
            this.filerProducts = this.products;
            this.listFilter = 'cart'
        },
        error => this.errorMessage = <any>error);
    }
}