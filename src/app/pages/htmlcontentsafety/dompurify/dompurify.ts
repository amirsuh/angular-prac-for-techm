import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

@Component({
  selector: 'app-dompurify',
  imports: [CommonModule],
  templateUrl: './dompurify.html',
  styleUrl: './dompurify.scss',
})
export class Dompurify {
userInput: string = '';
  sanitizedOutput: SafeHtml = '';
  errors: string[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  onInputChange(value: string) {
    this.userInput = value;
    this.sanitizedOutput = this.processInput(value);
  }

  processInput(input: string): SafeHtml {
    this.errors = [];

    // Step 1: detect bad patterns BEFORE sanitizing
    this.detectThreats(input);

    // Step 2: sanitize with DOMPurify (advanced sanitizer)
    const cleanHtml = DOMPurify.sanitize(input, {
      ALLOWED_URI_REGEXP: /^https?:\/\//i,
      ADD_ATTR: ['target'],
      FORBID_TAGS: ['style', 'script', 'object', 'embed'],
      FORBID_ATTR: ['onerror', 'onclick', 'onload']
    });

    // Step 3: let Angular re-sanitize the DOMPurify output
    return this.sanitizer.bypassSecurityTrustHtml(cleanHtml);
  }

  // Detect XSS attempts (real-world intrusion detection)
  detectThreats(html: string) {
    const patterns = [
      { regex: /<script[\s\S]*?>/gi, msg: 'Script tag detected' },
      { regex: /javascript:/gi, msg: 'JavaScript URL detected' },
      { regex: /on\w+=/gi, msg: 'Event handler attribute detected' },
      { regex: /<img[^>]+onerror=/gi, msg: 'Image onerror attack detected' },
      { regex: /<iframe/gi, msg: 'Iframe detected (blocked)' }
    ];

    patterns.forEach(p => {
      if (p.regex.test(html)) this.errors.push(p.msg);
    });
  }
}
