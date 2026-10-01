import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  imports: [FormsModule],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  protected readonly sent = signal(false);
  protected submit(form: NgForm): void {
    if (form.invalid) return;
    this.sent.set(true);
    form.resetForm();
    setTimeout(() => this.sent.set(false), 2600);
  }
}
