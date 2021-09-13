import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TunierpageComponent} from './tunierpage/tunierpage.component';
import {TunierRoutingModule} from "./tunier-routing.module";
import {GroupComponent} from './group/group.component';
import {TunierMatchComponent} from './tunier-match/tunier-match.component';
import {TunierTreeComponent} from './tunier-tree/tunier-tree.component';
import {NgxsModule} from "@ngxs/store";
import {TunierState} from "../state/tunier.state";


@NgModule({
    declarations: [
        TunierpageComponent,
        GroupComponent,
        TunierMatchComponent,
        TunierTreeComponent
    ],
    exports: [
        GroupComponent
    ],
    imports: [
        TunierRoutingModule,
        CommonModule,
        NgxsModule.forFeature([TunierState])
    ]
})
export class TunierModule {
}
