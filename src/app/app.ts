import { Component } from '@angular/core';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { CredentialsSectionComponent } from './components/credentials-section/credentials-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';

@Component({
  selector: 'app-root',
  imports: [
    AboutSectionComponent,
    ContactSectionComponent,
    CredentialsSectionComponent,
    ExperienceSectionComponent,
    HeroSectionComponent,
    ProjectSectionComponent,
    SiteHeaderComponent,
    SkillsSectionComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
