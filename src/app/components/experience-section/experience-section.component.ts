import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
})
export class ExperienceSectionComponent {
  protected readonly experience = [
    {
      date: '2026',
      title: 'Flutter Development Intern - DEPI',
      role: 'Mobile Application Developer',
      description:
        'Working on a cross-platform mobile app for a startup, focusing on implementing new features, fixing bugs, and optimizing performance using Flutter and Dart.',
    },
    {
      date: 'Present',
      title: 'Freelance Work',
      role: 'Flutter Developer',
      description:
        'Building and shipping small cross-platform apps to keep hands-on with state management, REST APIs, and Firebase outside of coursework.',
    },
  ];
}
