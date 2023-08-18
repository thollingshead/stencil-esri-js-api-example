import { Component, Prop, Watch, h } from '@stencil/core';
import { when } from '@arcgis/core/core/reactiveUtils';

@Component({
  tag: 'esri-sample',
  styleUrl: 'esri-sample.css',
  shadow: true,
})
export class EsriSampleComponent {
  /**
   * The map view
   */
  @Prop() view!: any;

  @Watch('view')
  viewChanged(newView: any) {
    console.log('RUNS WHEN VIEW ASSIGNED', newView);
    if (newView) {
      when(
        () => {
          console.log('RUNS ONCE IMMEDIATELY WHEN VIEW ASSIGNED, NEVER AGAIN');
          return this.view.stationary;
        },
        () => {
          console.log('DO SOMETHING HERE');
        },
      );
    }
  }

  private getCenter(): string {
    console.log('THIS WORKS, SO CAN READ VIEW PROPERTIES');
    return this.view ? `${this.view.center.x.toFixed(4)}, ${this.view.center.y.toFixed(4)}` : 'No view';
  }

  private goToNullIsland(): void {
    console.log('THIS WORKS, SO CAN CALL VIEW METHODS');
    this.view?.goTo({ center: [0, 0] });
  }

  render() {
    return (
      <div>
        <div>Center: ({this.getCenter()})</div>
        {this.view ? <button onClick={() => this.goToNullIsland()}>Go to 0,0</button> : null}
      </div>
    );
  }
}
