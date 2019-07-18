 
import { load, addParameters } from "@storybook/vue";
import { DocsPage } from '@storybook/addon-docs/blocks';

addParameters({
  docs: DocsPage,
});


// Contents of your existing configuration minus calls to the old-style `configure`

// wherever your story files are located
load(require.context('../stories', true, /\.stories\.js$/), module);
load(require.context('../stories', true, /\.stories\.mdx$/), module);
