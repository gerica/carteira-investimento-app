import { Injectable } from '@angular/core';

@Injectable()
export class PageMenuService {
    private _pages: Array<{ title: string, component: any, show: boolean }> = [];

    public get pages() {
        return this._pages;
    }

    public addPage(title: string, component: any, show: boolean) {
        this._pages.push({ title: title, component: component, show: show });
    }

    public resetPages(): void {
        this._pages = [];
    }

    public togglePage(title: string): void {
        for (let p of this._pages) {
            if (title === p.title) {
                p.show = !p.show;
                break;
            }
        }
    }


}