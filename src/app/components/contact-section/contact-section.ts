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
            <a href="mailto:shehab.fawzyzsc@gmail.com" class="btn btn-primary">Email Me</a
            ><a href="https://drive.google.com/uc?export=download&id=1crt8T-MstLz3uFd8MFa058hWhjJS6Dur" download="ShehabEldin-CV.pdf" class="btn btn-secondary">Download CV</a>
          </div>
          <div class="icon-row">
            <a
              class="icon-btn"
              href="https://github.com/Shehabeldien"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.66.79.55A10.53 10.53 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z"
                />
              </svg>
            </a>
            <a
              class="icon-btn"
              href="https://www.linkedin.com/in/shehab-eldien-1693262a3/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path
                  d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"
                />
              </svg>
            </a>
            <a class="icon-btn" href="mailto:shehab.fawzyzsc@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24">
                <path
                  d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 5.86L19.8 6H4.2ZM20 8.1l-7.4 5.56a1 1 0 0 1-1.2 0L4 8.1v10.4h16V8.1Z"
                />
              </svg>
            </a>
            <a
              class="icon-btn"
              href="https://wa.me/+201024081992"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24">
                <path
                  d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.58-.9-2.16-.24-.58-.48-.5-.66-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.75-.71 2-1.4.25-.68.25-1.27.17-1.4-.07-.12-.27-.2-.57-.35ZM12.02 2C6.5 2 2.03 6.44 2.03 11.92c0 1.86.51 3.6 1.4 5.1L2 22l5.1-1.34a10.02 10.02 0 0 0 4.92 1.28h.01c5.5 0 10-4.44 10-9.92C22 6.44 17.5 2 12.02 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.02.8.81-2.93-.2-.3a8.05 8.05 0 0 1-1.27-4.35c0-4.46 3.65-8.09 8.19-8.09 4.53 0 8.18 3.63 8.18 8.09s-3.65 8.11-8.19 8.11Z"
                />
              </svg>
            </a>
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
