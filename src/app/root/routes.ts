import { HomeComponent } from "../home/home.component";
import { AboutModule } from "../modules/about/about.module";
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
        path: "about",
        loadChildren: ()=> import('../modules/about/about.module').then(m => m.AboutModule)
    },
    {
        path: "help",
        loadChildren: ()=> import('../modules/help/help.module').then(m => m.HelpModule)
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