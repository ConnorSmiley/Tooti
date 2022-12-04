declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<
        SVGSVGElement
        > & { title?: string }>;

    const src: string;
    export default src;
}

// declare module "*.svg" {
//     const content:any
//     // import React = require('react');
//     export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//     const src: string;
//     export default content;
//     export default src;
//     import { ReactElement, SVGProps } from "react";
//     const content: (props: SVGProps<SVGElement>) => ReactElement;
//     export default content;
// }


