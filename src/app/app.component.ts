import { Component } from '@angular/core';
import {DOCUMENT, ɵgetDOM as getDOM} from '@angular/common';
import {Inject, Injectable, ɵɵinject} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
export function createTitle() {
  return new Title(ɵɵinject(DOCUMENT));
}

@Injectable({providedIn: 'root', useFactory: createTitle, deps: []})
export class Title {
  constructor(@Inject(DOCUMENT) private _doc: any) {}
  /**
   * Get the title of the current HTML document.
   */
  getTitle(): string {
    return this._doc.title;
  }

  /**
   * Set the title of the current HTML document.
   * @param newTitle
   */
  setTitle(newTitle: string) {
    this._doc.title = newTitle || 'spotify';
  }
}
