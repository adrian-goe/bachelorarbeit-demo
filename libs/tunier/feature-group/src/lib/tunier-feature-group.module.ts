import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TunierDomainModule } from '@tunierplanner/tunier/domain';
import { GroupComponent } from './group.component';
import {TunierUiModule} from "@tunierplanner/tunier/ui";

@NgModule({
    imports: [CommonModule, TunierDomainModule,TunierUiModule ],
  declarations: [
    GroupComponent
  ],
  exports: [
    GroupComponent
  ],
})
export class TunierFeatureGroupModule {}
