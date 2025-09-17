import { FormGroup } from '@angular/forms';

export const isValidControl = (form: FormGroup, controlName: string) => {
  return form.get(controlName)?.invalid && form.get(controlName)?.touched;
};