import {Compiler, Component, Injector, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {loadRemoteModule} from "@angular-architects/module-federation";

@Component({
  selector: 'tunierplanner-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(
    private compiler: Compiler,
    private injector: Injector
  ) {
  }

  async loadFeature() {
    loadRemoteModule({
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      remoteName: 'matches',
      exposedModule: './TeamsMatches'
    }).then(async m => {
      this.compiler.compileModuleAsync(m.TeamsMatchesModule).then(moduleFactory => {
        const moduleRef = moduleFactory.create(this.injector);
        // @ts-ignore
        const componentFactory = moduleRef.instance.resolveComponent();
        this.container.createComponent(componentFactory, null, moduleRef.injector);
      });
    })

  }

  ngOnInit(): void {
    this.loadFeature();
  }
}
