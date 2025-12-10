import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-domsanitize',
  imports: [],
  templateUrl: './domsanitize.html',
  styleUrl: './domsanitize.scss',
})
export class Domsanitize {
  sanitizer = inject(DomSanitizer);
  trustedHtmlContent: any = '';
  userInput: string = '';
  sanitizedOutput: SafeHtml = '';
  maliciousHtml: string = `<img src=x onerror="alert('XSS Attack!')">`;
  // Angular automatically blocks dangerous content
  safeByAngular: string = this.maliciousHtml;
  sanitizedHtml: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.maliciousHtml);

  constructor() {
    const untrustedHtml = '<h1>Hello!</h1><script>alert("XSS");</script>';
    this.trustedHtmlContent = this.sanitizer.bypassSecurityTrustHtml(untrustedHtml);
    // Bypassing with DomSanitizer (use with CAUTION)
  }
  onInputChange(value: string) {
    this.userInput = value;

    // SAFE: Angular will sanitize user input automatically for [innerHTML]
    this.sanitizedOutput = this.sanitizeUserInput(value);
  }

  sanitizeUserInput(input: string): SafeHtml {
    // Let Angular sanitize normally (do NOT bypass)
    return this.sanitizer.sanitize(1, input) || ''; // 1 = SecurityContext.HTML
  }
}
