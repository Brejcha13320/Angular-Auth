import { Component, Input, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../../services/category.service';
import { NotifyService } from 'src/app/shared/services/notify.service';

@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.scss'],
})
export class ModalCategoryComponent implements OnInit {
  @Input() idCategory: string = '';
  form: UntypedFormGroup;

  get description() {
    return this.form.get('description')?.value;
  }

  constructor(
    public activeModal: NgbActiveModal,
    private fb: UntypedFormBuilder,
    private categoryService: CategoryService,
    private notifyService: NotifyService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.maxLength(250)],
    });

    if (this.idCategory) {
      const getCategory$ = this.categoryService
        .getCategory(this.idCategory)
        .subscribe({
          next: ({ data }) => {
            this.form.patchValue(data);
          },
          error: (error) => {
            console.error('Error al obtener la categoria', error);
            this.notifyService.open({
              title: 'Inicio de Sesión Exitoso',
              message: 'Datos Correctos',
              clase: 'success',
            });
            this.notifyService.open({
              title: 'Error al Inicial Sesión',
              message: 'Por favor verifique sus credenciales',
              clase: 'danger',
            });
          },
          complete: () => {
            getCategory$.unsubscribe();
          },
        });
    }
  }

  /**
   * Valida si un control del formulario es valido
   * @param ctrName nombre del control del formulario
   * @returns retorna si no ha sido tocado o tiene errores
   */
  isInvalid(ctrName: string) {
    const control = this.form.get(ctrName);
    return control?.touched && control?.errors;
  }

  clickEvents(idButton: string) {
    switch (idButton) {
      case 'create':
        if (this.form.invalid) {
          this.notifyService.open({
            title: 'Error al Crear la Categoria',
            message: 'Por favor verifique el formulario',
            clase: 'danger',
          });
        } else {
          const createCategory$ = this.categoryService
            .createCategory(this.form.value)
            .subscribe({
              next: () => {
                this.notifyService.open({
                  title: 'Proceso Exitoso',
                  message: 'Se ha creado la categoria exitosamente',
                  clase: 'success',
                });
              },
              error: (error) => {
                console.error('Error al crear la categoria', error);
                this.notifyService.open({
                  title: 'Error al Crear la Categoria',
                  message: 'Ha ocurrido un error al crear la categoria',
                  clase: 'danger',
                });
              },
              complete: () => {
                createCategory$.unsubscribe();
              },
            });
          this.closeModal(idButton);
        }
        break;
      case 'update':
        if (this.form.invalid) {
          this.notifyService.open({
            title: 'Error al Actualizar la Categoria',
            message: 'Por favor verifique el formulario',
            clase: 'danger',
          });
        } else {
          const updateCategory$ = this.categoryService
            .updateCategory(this.idCategory, this.form.value)
            .subscribe({
              next: () => {
                this.notifyService.open({
                  title: 'Proceso Exitoso',
                  message: 'Se ha actualizado la categoria exitosamente',
                  clase: 'success',
                });
              },
              error: (error) => {
                console.error('Error al actualizar la categoria', error);
                this.notifyService.open({
                  title: 'Error al Actualizar la Categoria',
                  message: 'Ha ocurrido un error al actualizar la categoria',
                  clase: 'danger',
                });
              },
              complete: () => {
                updateCategory$.unsubscribe();
              },
            });
          this.closeModal(idButton);
        }
        break;
      case 'cancel':
        this.closeModal(idButton);
        break;
      case 'close':
        this.closeModal(idButton);
        break;
    }
  }

  closeModal(status: string) {
    this.activeModal.close({ status });
  }
}
