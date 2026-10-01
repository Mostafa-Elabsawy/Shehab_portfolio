import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-credentials-section',
  templateUrl: './credentials-section.component.html',
})
export class CredentialsSectionComponent {
  private readonly track = viewChild<ElementRef<HTMLElement>>('track');
  protected readonly certifications = [
    {
      year: '2023',
      title: 'Flutter & Dart - The Complete Guide',
      issuer: 'Udemy',
      description:
        'Covers Flutter widgets, state management, and Dart fundamentals used daily in Smart Attendance and other projects.',
    },
    {
      year: '2023',
      title: 'RESTful API Design & Integration',
      issuer: 'Coursera',
      description:
        "Hands-on practice designing and consuming REST endpoints - the same pattern behind the attendance app's live data.",
    },
    {
      year: '2022',
      title: 'Git & Version Control Fundamentals',
      issuer: 'freeCodeCamp',
      description:
        "Branching, merging, and collaborative workflows - the habits that keep every project's history clean and reviewable.",
    },
    {
      year: '2022',
      title: 'Object-Oriented Programming with C++',
      issuer: 'University Coursework',
      description:
        'Core OOP principles - classes, inheritance, polymorphism - that carried over directly into structuring Dart codebases.',
    },
  ];
  protected move(direction: number): void {
    this.track()?.nativeElement.scrollBy({ left: direction * 322, behavior: 'smooth' });
  }
}
