import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, Input, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';
import * as globalConfig from '../config/global.config';
type Theme = 'dark-theme' | 'light-theme' | 'white-theme' | string;
@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  public applicationLoaded$ = new BehaviorSubject<boolean>(undefined as any);
  private _globalLanguage: string = globalConfig.DEFAULT_LANGUAGE;
  private _serverChannel: string = 'desktop';
  defaultTheme$: BehaviorSubject<string> = new BehaviorSubject('');
  HMACData$: BehaviorSubject<string> = new BehaviorSubject('');
  isLoginIdentityTriggered$: BehaviorSubject<boolean | false> =
    new BehaviorSubject(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  get isServer(): boolean {
    return isPlatformServer(this.platformId);
  }

  set currentApplicationLoadedValue(loaded: boolean) {
    this.applicationLoaded$.next(loaded);
  }

  get currentApplicationLoadedValue(): boolean {
    return this.applicationLoaded$.value;
  }

  /**
   * @func setTheme
   * @access public
   * @param value
   * @desc Function sets true or false based on the default theme param value sent
   */
  setTheme(value: Theme):void {
    if (this.defaultTheme$.value !== value) {
      this.defaultTheme$.next(value);
    }
  }
  /**
   * @func getTheme
   * @access public
   * @param NA
   * @desc Function get and returns default theme set
   */
  getTheme(): Observable<Theme> {
    return this.defaultTheme$.asObservable().pipe(distinctUntilChanged());
  }

  /**
   * @func setHMAC
   * @access public
   * @param value
   * @desc Function sets Hmac data
   */
  setHMAC(value: any) {
    this.HMACData$.next(value);
  }
  /**
   * @func getHMAC
   * @access public
   * @param NA
   * @desc Function get and returns HMAC data
   */
  getHMAC(): Observable<any> {
    return this.HMACData$.asObservable();
  }
  /**
   * @function  updateAppTheme
   * @param theme {string}
   * @param bodyClass {string}
   */
  // updateAppTheme(theme: string, bodyClass: any): void {
  //   if (theme && theme !== '') {
  //     const el = this.document.querySelector('body');
  //     el.removeAttribute('class');
  //     el.classList.add(theme.toLocaleLowerCase() + '-theme');
  //     if (bodyClass) {
  //       if (bodyClass.includes(' ')) {
  //         const splitBodyClass = bodyClass.split(' ');
  //         for (const cssClass of splitBodyClass) {
  //           el.classList.add(cssClass);
  //         }
  //       } else {
  //         el.classList.add(bodyClass);
  //       }
  //     }
  //     this.setTheme(theme.toLocaleLowerCase() + '-theme');
  //   }
  // }
  updateAppTheme(theme: string, bodyClass: any = ''): void {
    if (!theme?.trim()) return; // Early exit if theme is invalid

    const body = this.document.body;
    const themeClass = `${theme.toLowerCase()}-theme`;

    // Reset body classes and apply the theme
    body.className = themeClass;

    // Add additional body classes if provided
    if (bodyClass?.trim()) {
      body.classList.add(...bodyClass.trim().split(/\s+/)); // Handles multiple spaces
    }

    this.setTheme(themeClass); // Persist the theme
  }

  /**
   * @func getLanguage
   * @access public
   */
  get getLanguage(): string {
    return this._globalLanguage;
  }

  @Input()
  set setLanguage(language: string) {
    this._globalLanguage = language;
  }

  get serverChannel(): string {
    return this._serverChannel;
  }

  @Input()
  set serverChannel(channel: string) {
    this._serverChannel = channel;
  }

  /**
   * @function checkRtlLanguage
   * @description checks for language which follows RTL layout
   * @returns boolean
   */
  checkRtlLanguage() {
    if (
      this._globalLanguage &&
      (this._globalLanguage?.indexOf('ar-') !== -1 ||
        this._globalLanguage?.indexOf('ar') !== -1 ||
        this._globalLanguage?.indexOf('ur-') !== -1 ||
        this._globalLanguage?.indexOf('ur') !== -1)
    ) {
      return true;
    } else {
      return false;
    }
  }
  checkISUrduLanguage() {
    if (
      this._globalLanguage &&
      (this._globalLanguage?.indexOf('ur-') !== -1 ||
        this._globalLanguage?.indexOf('ur') !== -1)
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @func getAmadeusRedirectionLanguage
   * @access public
   * @param NA
   * @desc Function retrieves  language for amadeus redirection based on the selection
   */
  getAmadeusRedirectionLanguage(): string {
    let tempGlobalLanguage = this.getLanguage;
    if (tempGlobalLanguage) {
      const selectedLanguage = tempGlobalLanguage;
      if (selectedLanguage.indexOf('-') !== -1) {
        tempGlobalLanguage = selectedLanguage.split('-')[0].toUpperCase();
      }
      if (
        globalConfig.BOOKING_ENGINE_SUPPORTED_LANGUAGE.includes(
          tempGlobalLanguage.toUpperCase()
        )
      ) {
        if (!globalConfig.LANGUAGE_OVERRIDE[tempGlobalLanguage.toUpperCase()]) {
          return tempGlobalLanguage.toUpperCase();
        } else {
          return globalConfig.LANGUAGE_OVERRIDE[
            tempGlobalLanguage.toUpperCase()
          ];
        }
      } else {
        return globalConfig.LANGUAGE_OVERRIDE[globalConfig.DEFAULT_LANGUAGE];
      }
    } else {
      return globalConfig.LANGUAGE_OVERRIDE[globalConfig.DEFAULT_LANGUAGE];
    }
  }

  setLoginIdentityTriggered(value: any) {
    this.isLoginIdentityTriggered$.next(value);
  }
  /**
   * @func getTheme
   * @access public
   * @param NA
   * @desc Function get and returns default theme set
   */
  getLoginIdentityTriggered(): Observable<any> {
    return this.isLoginIdentityTriggered$.asObservable();
  }
}
