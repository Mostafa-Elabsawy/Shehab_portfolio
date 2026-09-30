import { Component } from '@angular/core';

@Component({ selector: 'app-experience-section', template: `<section id="experience" class="section-bg-alt"><div class="wrap"><div class="section-head"><span class="eyebrow">WHERE THE WORK HAPPENED</span><h2>Experience</h2></div><div class="timeline">@for (item of experience; track item.title) { <article class="timeline-item"><div class="timeline-date">{{ item.date }}</div><h4>{{ item.title }}</h4><div class="org">{{ item.role }}</div><p>{{ item.description }}</p></article> }</div></div></section>` })
export class ExperienceSectionComponent {
  protected readonly experience = [
    { date: '2024', title: 'Smart Attendance - Graduation Project', role: 'Flutter Developer', description: 'Designed and built a face-ID-based employee attendance system end to end: mobile app, REST integration, and an admin dashboard for tracking check-ins.' },
    { date: 'Ongoing', title: 'Independent Flutter Projects', role: 'Self-directed', description: 'Building and shipping small cross-platform apps to keep hands-on with state management, REST APIs, and Firebase outside of coursework.' },
  ];
}
