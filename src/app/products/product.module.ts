import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponents } from '../shared/star.component';
import { ProductsDetailComponent } from './products-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductSerice } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id',
        canActivate: [ ProductGuardService ],
        component: ProductsDetailComponent },
    ]),
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponents,
    ProductsDetailComponent,
  ],
  providers:[
    ProductSerice,
    ProductGuardService
  ]
})
export class ProductModule { }
