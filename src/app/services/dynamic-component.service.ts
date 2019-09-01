import { Injectable, Injector, ApplicationRef, ComponentRef, Type, ComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  public compRef: ComponentRef<any>;

  constructor(private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef) {
    console.log(this.compRef)
  }

  public injectComponent<T>(component: Type<T>, propertySetter?: (type: T) => void): HTMLDivElement {
    if (this.compRef) this.compRef.destroy();

    const compFactory = this.resolver.resolveComponentFactory(component);
    this.compRef = compFactory.create(this.injector);

    if (propertySetter)
      propertySetter(this.compRef.instance)

    this.appRef.attachView(this.compRef.hostView);

    // Create Wrapper Div and Inject Html
    let div = document.createElement('div');
    div.appendChild(this.compRef.location.nativeElement);

    // Return the Rendered DOM Element
    console.log("div:" + div)
    return div;
  }
}
