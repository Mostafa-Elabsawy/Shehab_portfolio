import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  protected readonly skills = [
    { name: 'FLUTTER', value: 92 },
    { name: 'DART', value: 90 },
    { name: 'CROSS-PLATFORM UI', value: 88 },
  ];
}
