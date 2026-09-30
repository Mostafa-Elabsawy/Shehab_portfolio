import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  imports: [FormsModule],
  template: `<section id="contact" class="section-bg-alt grid-bg">
      <div class="wrap contact-layout">
        <div class="contact-inner">
          <span class="eyebrow">GET IN TOUCH</span>
          <h2>Have an app in mind?<br /><span class="accent">Let's build it in Flutter.</span></h2>
          <p>
            Open to junior Flutter roles, internships, and freelance mobile projects. The fastest
            way to reach me is email or WhatsApp.
          </p>
          <div class="contact-ctas">
            <a href="mailto:shehab.awaad@example.com" class="btn btn-primary">Email Me</a
            ><a href="#" class="btn btn-secondary">Download CV</a>
          </div>
          <div class="icon-row">
            <a
              class="icon-btn"
              href="https://github.com/"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              >GH</a
            ><a
              class="icon-btn"
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              >in</a
            ><a class="icon-btn" href="mailto:shehab.awaad@example.com" aria-label="Email">@</a
            ><a
              class="icon-btn"
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              >WA</a
            >
          </div>
        </div>
        <form class="contact-form" #form="ngForm" (ngSubmit)="submit(form)">
          <div class="form-field">
            <label for="cf-name">Name</label
            ><input id="cf-name" name="name" type="text" placeholder="Your name" required ngModel />
          </div>
          <div class="form-field">
            <label for="cf-email">Email</label
            ><input
              id="cf-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              ngModel
            />
          </div>
          <div class="form-field">
            <label for="cf-message">Message</label
            ><textarea
              id="cf-message"
              name="message"
              placeholder="Tell me about the project..."
              required
              ngModel
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary" [disabled]="form.invalid || sent()">
            {{ sent() ? 'Message Sent' : 'Send Message' }}
          </button>
          <p class="form-note">
            This form is a front-end demo - connect it to an email service to receive messages.
          </p>
        </form>
      </div>
    </section>
    <footer>
      <div class="wrap footer-content">
        <span>© 2026 Shehab-Eldien Awaad</span><span>Built with Flutter in mind.</span>
      </div>
    </footer>`,
})
export class ContactSectionComponent {
  protected readonly sent = signal(false);
  protected submit(form: NgForm): void {
    if (form.invalid) return;
    this.sent.set(true);
    form.resetForm();
    setTimeout(() => this.sent.set(false), 2600);
  }
}
