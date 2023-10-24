import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '@interfaces/category';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { RequestStatus } from '@interfaces/request-status';
import { DropdownButton } from '@interfaces/dropdown';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';
import { FormControl } from '@angular/forms';
import { ModalCategoryComponent } from './modal-category/modal-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  title = 'TABLA DE CATEGORIAS';
  subtitle =
    'En esta sección puedes visualizar todas tu categorias, tambien puedes realizar acciones como filtrar, crear, eliminar y editar';
  status: RequestStatus = 'init';
  search = new FormControl();
  categories$ = new BehaviorSubject<Category[]>([]);
  dropdownButtons: DropdownButton[] = [
    {
      idButton: 'editar',
      text: 'Editar',
    },
    {
      idButton: 'borrar',
      text: 'Borrar',
    },
  ];

  get term() {
    return this.search.value;
  }

  constructor(
    private notifyService: NotifyService,
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.searchCategory();
  }

  getCategories() {
    this.status = 'loading';
    if (this.term) {
      const subCategoriesSearch$ = this.categoryService
        .getCategoriesSearch(this.term)
        .subscribe({
          next: ({ data }) => {
            this.status = 'success';
            this.emitCategories(data);
          },
          error: () => {
            this.status = 'error';
          },
          complete: () => {
            subCategoriesSearch$.unsubscribe();
          },
        });
    } else {
      const subCategories$ = this.categoryService.getCategories().subscribe({
        next: ({ data }) => {
          this.status = 'success';
          this.emitCategories(data);
        },
        error: () => {
          this.status = 'error';
        },
        complete: () => {
          subCategories$.unsubscribe();
        },
      });
    }
  }

  searchCategory() {
    this.status = 'loading';
    const search$ = this.search.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (term: string) => {
        this.status = 'success';
        this.getCategories();
      },
      error: () => {
        this.status = 'error';
      },
      complete: () => {
        search$.unsubscribe();
      },
    });
  }

  clickEvents({ idButton, id }: { idButton: string; id: string }) {
    switch (idButton) {
      case 'detalle':
        console.log('click en detalle', id);
        break;
      case 'editar':
        this.modalCategory(id);
        break;
      case 'borrar':
        const modalConfirm = this.modalService.open(ModalConfirmComponent, {
          centered: true,
        });
        modalConfirm.closed.subscribe(({ status }) => {
          if (status === 'confirm') {
            this.deleteCategory(id);
          }
        });
        break;
    }
  }

  deleteCategory(idCategory: string) {
    const deleteCategory$ = this.categoryService
      .deleteCategory(idCategory)
      .subscribe({
        next: () => {
          this.getCategories();
          this.notifyService.open({
            title: 'Eliminación Completada',
            message: 'La categoria se ha eliminado de manera exitosa',
            clase: 'success',
          });
        },
        error: () => {
          this.notifyService.open({
            title: 'Error al Elminar',
            message: 'No se ha podido eliminar la categoria',
            clase: 'danger',
          });
        },
        complete: () => {
          deleteCategory$.unsubscribe();
        },
      });
  }

  modalCategory(idCategory?: string) {
    const modalCategory = this.modalService.open(ModalCategoryComponent, {
      centered: true,
      size: 'lg',
    });
    if (idCategory) {
      modalCategory.componentInstance.idCategory = idCategory;
    }
    modalCategory.closed.subscribe(({ status }) => {
      switch (status) {
        case 'create':
        case 'update':
          this.search.setValue('');
          this.getCategories();
          break;
      }
    });
  }

  emitCategories(categories: Category[]) {
    this.categories$.next(categories);
  }
}
