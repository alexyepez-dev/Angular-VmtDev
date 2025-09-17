import { FormGroup } from '@angular/forms';
import { ErorEnum } from '../enums/error.enum';

export const getError = (form: FormGroup, controlName: string): string => {
  const errors = form.get(controlName)?.errors;

  if (!errors) return '';

  for (const key in errors) {
    switch (key) {
      case ErorEnum.Required: return `El campo ${controlName} es requerido`;
      case ErorEnum.Email: return `El campo ${controlName} no es un correo valido`;

      default: return `Error desconocido: ${key}`;
    }
  }

  return '';
};