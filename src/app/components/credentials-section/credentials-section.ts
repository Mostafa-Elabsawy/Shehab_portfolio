import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-credentials-section',
  template: `<section id="education">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">ACADEMIC BACKGROUND</span>
          <h2>Education</h2>
        </div>
        <div class="timeline">
          <article class="timeline-item">
            <div class="timeline-date">2020 - 2024</div>
            <h4>B.Sc. in Computer Science</h4>
            <div class="org">Faculty of Computers &amp; Information</div>
            <p>
              Graduation project: Smart Attendance, a Flutter-based employee attendance system using
              facial recognition.
            </p>
          </article>
        </div>
      </div>
    </section>
    <section id="certifications" class="section-bg-alt">
      <div class="wrap">
        <div class="cert-header-row section-head cert-head">
          <div>
            <span class="eyebrow">KEEPING THE SKILLS CURRENT</span>
            <h2>Certifications</h2>
          </div>
          <div class="cert-nav">
            <button type="button" aria-label="Previous certificate" (click)="move(-1)">
              &#8592;</button
            ><button type="button" aria-label="Next certificate" (click)="move(1)">&#8594;</button>
          </div>
        </div>
        <div class="cert-carousel">
          <div class="cert-track" #track>
            @for (cert of certifications; track cert.title) {
              <article class="cert-card" tabindex="0">
                <span class="cert-year">{{ cert.year }}</span>
                <div class="cert-mark">&#10003;</div>
                <h4>{{ cert.title }}</h4>
                <div class="cert-issuer">{{ cert.issuer }}</div>
                <div class="cert-desc">
                  <div class="cert-desc-label">ABOUT THIS CERT</div>
                  <p>{{ cert.description }}</p>
                </div>
              </article>
            }
          </div>
        </div>
      </div>
    </section>`,
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
