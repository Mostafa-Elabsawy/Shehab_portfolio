import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
})
export class AboutSectionComponent {
  protected readonly stats = [
    { value: '2026', label: 'GRAD YEAR' },
    { value: '4+', label: 'CERTS' },
    { value: '1', label: 'SHIPPED APP' },
  ];
}
