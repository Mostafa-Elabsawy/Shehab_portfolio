import { Component } from '@angular/core';
import { AboutSectionComponent } from './components/about-section/about-section';
import { ContactSectionComponent } from './components/contact-section/contact-section';
import { CredentialsSectionComponent } from './components/credentials-section/credentials-section';
import { ExperienceSectionComponent } from './components/experience-section/experience-section';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { ProjectSectionComponent } from './components/project-section/project-section';
import { SiteHeaderComponent } from './components/site-header/site-header';
import { SkillsSectionComponent } from './components/skills-section/skills-section';

@Component({
  selector: 'app-root',
  imports: [AboutSectionComponent, ContactSectionComponent, CredentialsSectionComponent, ExperienceSectionComponent, HeroSectionComponent, ProjectSectionComponent, SiteHeaderComponent, SkillsSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
