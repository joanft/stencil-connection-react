import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'components',
  outputTargets: [
    react({
      componentCorePackage: 'components',
      // Export route
      proxiesFile: '../components-react/src/components/stencil-generated/index.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },

    // Use this if you need components to be compiled for REACT only
    // {
    //   type: 'dist-custom-elements',
    // },

    // Following code needed to test Next.JS and also compatible with REACT
    {
      type: "dist-hydrate-script",
    },
  ],
};
