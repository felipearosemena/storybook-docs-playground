/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton';

storiesOf('Button', module)
  .addParameters({ component: MyButton })
  .add('basic button', () => ({
    components: { MyButton },
    props: {
      myprop: {
        type: String
      }
    },
    template: '<my-button></my-button>'
  }))