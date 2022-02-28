import { HomeComponent } from "../home/home.component";
import { FeatureCanActivate } from "./feature-guard/feature-guard";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes = [
    {
        path: "",
        component: HomeComponent,
        data: {
          breadcrumb: "HOME"
        }
    },
    {
        path: "404",
        component: NotFoundComponent,
        data: {
            breadcrumb: "NOT_FOUND"
        }
    },
    {
        path: "**",
        redirectTo: "/404",
        data: {
            breadcrumb: "NOT_FOUND"
        }
    }
];