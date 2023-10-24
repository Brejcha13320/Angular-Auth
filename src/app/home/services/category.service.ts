import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CategoriesRequest,
  CategoryRequest,
  CreateCategory,
  UpdateCategory,
} from '@interfaces/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoriesRequest> {
    return this.http.get<CategoriesRequest>('/category');
  }

  getCategoriesSearch(term: string): Observable<CategoriesRequest> {
    return this.http.get<CategoriesRequest>(`/category/search/${term}`);
  }

  getCategory(idCategory: string): Observable<CategoryRequest> {
    return this.http.get<CategoryRequest>(`/category/${idCategory}`);
  }

  createCategory(category: CreateCategory): Observable<CategoryRequest> {
    return this.http.post<CategoryRequest>('/category', category);
  }

  updateCategory(
    idCategory: string,
    category: UpdateCategory
  ): Observable<CategoryRequest> {
    return this.http.put<CategoryRequest>(`/category/${idCategory}`, category);
  }

  deleteCategory(idCategory: string): Observable<CategoryRequest> {
    return this.http.delete<CategoryRequest>(`/category/${idCategory}`);
  }
}
