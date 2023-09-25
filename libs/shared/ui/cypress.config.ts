import { nxComponentTestingPreset } from '@nx/react/plugins/component-testing';
import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,
  component: nxComponentTestingPreset(__filename, {
    bundler: 'webpack',
  }),
});
