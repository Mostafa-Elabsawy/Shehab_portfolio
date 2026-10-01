import { Component, HostListener,ElementRef, signal } from '@angular/core';
import { ThemeService } from './Theme.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  protected readonly activeSection = signal('home');
  protected readonly links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
  ];
  panelOpen = false;
 
  constructor(
    public themeService: ThemeService,
    private elRef: ElementRef<HTMLElement>
  ) {}
 
  selectAccent(id: string): void {
    this.themeService.setAccent(id);
    this.panelOpen = false;
  }
 
  // Close the accent panel when clicking anywhere outside it.
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elRef.nativeElement.contains(event.target as Node)) {
      this.panelOpen = false;
    }
  }
}
