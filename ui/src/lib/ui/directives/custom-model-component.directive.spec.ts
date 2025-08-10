// custom-model-component.directive.spec.ts
import { FormControl, FormGroup } from '@angular/forms';
import { CustomModelComponent } from './custom-model-component.directive';

class TestModelComponent extends CustomModelComponent<any> {
  public form = new FormGroup({
    field: new FormControl(null),
  });
  // Ajout d'un getter public pour accéder à `_value` dans les tests
  get value() {
    return this._value();
  }
}

describe('CustomModelComponent', () => {
  let component: TestModelComponent;

  beforeEach(() => {
    component = new TestModelComponent();
  });

  it('should write value using writeValue', () => {
    const value = {field: 'test'};
    component.writeValue(value);
    expect(component.form.value).toEqual(value);
  });

  it('should register onChange callback using registerOnChange', () => {
    let changedValue: any;
    const onChangeCallback = (value: any) => (changedValue = value);
    component.registerOnChange(onChangeCallback);

    const newValue = {field: 'updated'};
    component.writeValue(newValue);
    component['onChange'](newValue);

    expect(changedValue).toEqual(newValue);

  });

  it('should register onTouched callback using registerOnTouched', () => {
    let touched = false;
    const onTouchedCallback = () => (touched = true);
    component.registerOnTouched(onTouchedCallback);

    component['onTouched']();
    expect(touched).toBeTruthy();
  });

  it('should disable the form using setDisabledState', () => {
    component.setDisabledState(true);
    expect(component.form.disabled).toBeTruthy();

    component.setDisabledState(false);
    expect(component.form.enabled).toBeTruthy();
  });

  it('should correctly compute isInvalid when form is invalid and touched', () => {
    component.form.controls['field'].setErrors({required: true});
    component.form.markAsTouched();
    expect(component.isInvalid()).toBeTruthy();
  });

  it('should set internal value when writeValue is called', () => {
    const value = {field: 'internal'};
    component.writeValue(value);
    expect(component['_value']()).toEqual(value);
  });
});
