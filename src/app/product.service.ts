import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getFrames = () => {
    const item = {
      imageUrl: 'https://images.unsplash.com/photo-1488813340362-2a31b5522ebe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      title: 'Wooden brown frame',
      price: '120',
      material: 'Wood',
      colors: ['Brown', 'Black'],
      sizes: ['20', '22'],
      description: 'This is our best selling frame', size: '20', category: 'Frame',
      isShown: true,
      tags: ['wood', 'brown', 'frame', '20 inches', '50 - 100 egp']
    };

    const item2 = {
      imageUrl: 'https://images.unsplash.com/photo-1497296690583-da0e2a4ce49a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Wooden black frame',
      price: '70',
      material: 'Wood',
      colors: ['Brown', 'Black'],
      sizes: ['20', '22'],
      isShown: true,
      description: 'This is our most popular frame', size: '20', category: 'frame',
      tags: ['wood', 'black', 'frame', '22 inches', '100 - 150 egp']
    };
    const items = [item, item2, item, item2, item, item2, item, item2];
    return items;
  }

  getFilters = () => {
    const filters = [
      {
        title: 'Material',
        options: ['Wood', 'Metal'],
        selected: ''
      },
      {
        title: 'Color',
        options: ['Brown', 'Black', 'Gold', 'White', 'Gray'],
        selected: ''
      },
      {
        title: 'Category',
        options: ['Frame', 'Wallset'],
        selected: ''
      },
      {
        title: 'Size',
        options: ['20 inches', '22 inches'],
        selected: ''
      },
      {
        title: 'Price',
        options: ['50 - 100 EGP', '100 - 150 EGP', '150 - 200 EGP', '200+ EGP'],
        selected: ''
      }
    ];

    return filters;
  }


  fetchProducts = (): Observable<any> => {
    return this.http.get<any>('http://localhost:3000/api/products').pipe(catchError(this.errorHandler));;
  }


  fetchProductById = (id: number) => {
    return this.http.get<any>('http://localhost:3000/api/products/' + id).pipe(catchError(this.errorHandler));;
  }

  addProduct = (product: any) => {
    return this.http.post<any>('http://localhost:3000/api/products/add', product).pipe(catchError(this.errorHandler));;
  }


  removeProduct = (id: any) => {
    return this.http.post<any>('http://localhost:3000/api/products/remove', {id}).pipe(catchError(this.errorHandler));;
  }

  editProduct = (product: any) => {
    return this.http.post<any>('http://localhost:3000/api/products/edit', product).pipe(catchError(this.errorHandler));
  }


  errorHandler = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}


