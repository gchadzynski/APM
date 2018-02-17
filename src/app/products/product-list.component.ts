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
    }

    filerProducts : IProduct[];
    products: IProduct[] = [];

    constructor(private _productService: ProductSerice) {
        this.listFilter = 'cart'
    }

    onRaitingClicked(message: string): void {
        this.pageTitle = 'Product list: ' + message;
    }
    
    toggleImage() : void{
        this.showImage = !this.showImage;
    }

    preformFilter(filterBy: string) : IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe(products =>{ 
            this.products = products,
            this.filerProducts = this.products;
        },
        error => this.errorMessage = <any>error);
    }
}