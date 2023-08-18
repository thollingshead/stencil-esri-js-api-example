import { newSpecPage } from '@stencil/core/testing';
import { EsriSampleComponent } from './esri-sample';

describe('esri-sample', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [EsriSampleComponent],
      html: '<esri-sample></esri-sample>',
    });
    expect(root).toEqualHtml(`
      <esri-sample>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </esri-sample>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [EsriSampleComponent],
      html: `<esri-sample first="Stencil" last="'Don't call me a framework' JS"></esri-sample>`,
    });
    expect(root).toEqualHtml(`
      <esri-sample first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </esri-sample>
    `);
  });
});
