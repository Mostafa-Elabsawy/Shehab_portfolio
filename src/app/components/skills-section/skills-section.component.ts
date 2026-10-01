import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
})
export class SkillsSectionComponent {
  protected readonly groups = [
    {
      title: 'Mobile Development',
      primary: true,
      skills: [
        { name: 'Flutter', value: 92, lead: true },
        { name: 'Dart', value: 90, lead: false },
        { name: 'Flutter UI', value: 85, lead: false },
        { name: 'Responsive Design', value: 80, lead: false },
      ],
    },
    {
      title: 'Backend Integration',
      primary: false,
      skills: [
        { name: 'REST APIs', value: 82, lead: false },
        { name: 'JSON', value: 85, lead: false },
        { name: 'HTTP', value: 78, lead: false },
        { name: 'Firebase', value: 75, lead: false },
      ],
    },
    {
      title: 'Programming',
      primary: false,
      skills: [
        { name: 'OOP', value: 85, lead: false },
        { name: 'C++', value: 80, lead: false },
        { name: 'Data Structures', value: 75, lead: false },
        { name: 'Python', value: 70, lead: false },
      ],
    },
    {
      title: 'Development Tools',
      primary: false,
      skills: [
        { name: 'Git & GitHub', value: 85, lead: false },
        { name: 'VS Code', value: 90, lead: false },
        { name: 'Android Studio', value: 80, lead: false },
        { name: 'SQLite', value: 78, lead: false },
      ],
    },
  ];
}
