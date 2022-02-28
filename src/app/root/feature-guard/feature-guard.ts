

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: "root"
})
export class FeatureCanActivate implements CanActivate {

    constructor() { }

    public canActivate(): Promise<boolean> | boolean {
        return true;
    }
}
