export interface CategoriesRequest {
  success: boolean;
  data: Category[];
}

export interface CategoryRequest {
  success: boolean;
  data: Category;
}

export interface Category {
  id: string;
  id_user: string;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateCategory {
  name: string;
  description: string;
}

export interface UpdateCategory {
  name?: string;
  description?: string;
}
