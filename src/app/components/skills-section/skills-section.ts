import { Component } from '@angular/core';

@Component({ selector: 'app-skills-section', template: `<section id="skills" class="section-bg-alt"><div class="wrap"><div class="section-head"><span class="eyebrow">TOOLS OF THE TRADE</span><h2>Skills</h2></div><div class="skills-grid">@for (group of groups; track group.title) { <article class="skill-card in-view" [class.primary]="group.primary"><h4>{{ group.title }}</h4><div class="skill-bars">@for (skill of group.skills; track skill.name) { <div class="skill-bar-row" [class.lead]="skill.lead"><div class="skill-bar-label"><span>{{ skill.name }}</span><span class="pct">{{ skill.value }}%</span></div><div class="skill-bar-track"><i class="skill-bar-fill" [style.width.%]="skill.value"></i></div></div> }</div></article> }</div></div></section>` })
export class SkillsSectionComponent {
  protected readonly groups = [
    { title: 'Mobile Development', primary: true, skills: [{ name: 'Flutter', value: 92, lead: true }, { name: 'Dart', value: 90, lead: false }, { name: 'Flutter UI', value: 85, lead: false }, { name: 'Responsive Design', value: 80, lead: false }] },
    { title: 'Backend Integration', primary: false, skills: [{ name: 'REST APIs', value: 82, lead: false }, { name: 'JSON', value: 85, lead: false }, { name: 'HTTP', value: 78, lead: false }, { name: 'Firebase', value: 75, lead: false }] },
    { title: 'Programming', primary: false, skills: [{ name: 'OOP', value: 85, lead: false }, { name: 'C++', value: 80, lead: false }, { name: 'Data Structures', value: 75, lead: false }, { name: 'Python', value: 70, lead: false }] },
    { title: 'Development Tools', primary: false, skills: [{ name: 'Git & GitHub', value: 85, lead: false }, { name: 'VS Code', value: 90, lead: false }, { name: 'Android Studio', value: 80, lead: false }, { name: 'SQLite', value: 78, lead: false }] },
  ];
}
