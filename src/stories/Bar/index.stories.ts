import { storiesOf } from '@storybook/angular';

import { BarComponent } from './bar.component';
storiesOf('Bar', module).add('Horizontal Bar', () => ({
  component: BarComponent,
  props: { title: 'Test Title' },
}));
