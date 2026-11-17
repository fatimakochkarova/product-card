export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getValues() {
    if (!this.form) return {};

    const formData = new FormData(this.form);
    const values = {};

    for (const [key, value] of formData.entries()) {
      values[key] = typeof value === 'string' ? value.trim() : value;
    }

    return values;
  }

  isValid() {
    if (!this.form) return false;

    const valid = this.form.checkValidity();
    if (!valid) {
      this.form.reportValidity();
    }

    return valid;
  }

  reset() {
    this.form?.reset();
  }
}
