import { Component } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
})
export class ProjectSectionComponent {
projects = [
  {
    role: 'Flutter Developer - Graduation Project',
    title: 'Smart Attendance',
    subtitle: 'Employee Attendance Using Face ID',
    description: 'A cross-platform attendance system that replaces sign-in sheets with a face scan. Employees check in from their phone, admins watch attendance update live from a dashboard, and every record is backed by a REST API and synced database.',
    screenshot: 'screen1.jpeg',
    repoUrl: 'https://github.com/yourusername/smart-attendance',
    features: [
      'Employee Management',
      'Attendance Tracking',
      'Admin Dashboard',
      'Authentication',
      'Access Control',
      'REST API Integration'
    ],
    technologies: ['Flutter', 'Dart', 'REST API', 'Firebase', 'SQLite']
  },
  // add more project objects here — the template picks them up automatically
];}
