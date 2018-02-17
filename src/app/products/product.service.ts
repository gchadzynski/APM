import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

@Injectable()
export class ProductSerice {

    private _productUrl = './api/products/products.json'
    constructor(private _http: HttpClient){
        
    }
    getProducts() : Observable<IProduct[]> {
       return this._http.get<IProduct[]>(this._productUrl)
       .do(data => console.log('All: ' + JSON.stringify(data)))
       .catch(this.handlerError);
    }

    private handlerError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}