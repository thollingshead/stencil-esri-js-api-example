/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EsriSample {
        /**
          * The map view
         */
        "view": any;
    }
}
declare global {
    interface HTMLEsriSampleElement extends Components.EsriSample, HTMLStencilElement {
    }
    var HTMLEsriSampleElement: {
        prototype: HTMLEsriSampleElement;
        new (): HTMLEsriSampleElement;
    };
    interface HTMLElementTagNameMap {
        "esri-sample": HTMLEsriSampleElement;
    }
}
declare namespace LocalJSX {
    interface EsriSample {
        /**
          * The map view
         */
        "view": any;
    }
    interface IntrinsicElements {
        "esri-sample": EsriSample;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "esri-sample": LocalJSX.EsriSample & JSXBase.HTMLAttributes<HTMLEsriSampleElement>;
        }
    }
}
