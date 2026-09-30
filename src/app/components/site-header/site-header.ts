import { Component, signal } from '@angular/core';

@Component({ selector: 'app-site-header', template: `<header><nav><a class="logo" href="#home" aria-label="Shehab home"><span class="tag">&lt;</span>Shehab<span class="tag">/&gt;</span></a><ul class="nav-links">@for (item of links; track item.id) { <li><a [href]="'#' + item.id" [class.active]="activeSection() === item.id" (click)="activeSection.set(item.id)">{{ item.label }}</a></li> }</ul><a href="#contact" class="btn btn-primary nav-cta">Contact Me</a></nav></header>` })
export class SiteHeaderComponent {
  protected readonly activeSection = signal('home');
  protected readonly links = [{ id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'experience', label: 'Experience' }, { id: 'projects', label: 'Projects' }, { id: 'skills', label: 'Skills' }, { id: 'education', label: 'Education' }, { id: 'certifications', label: 'Certifications' }];
}
