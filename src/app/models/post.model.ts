import { NodeWithI18n } from "@angular/compiler";

export class Post {
    id: number = -1;
    loveIts: number = 0;  
    created_at: Date = new Date();
    constructor(public title: string, public content: string) {
    }
  }