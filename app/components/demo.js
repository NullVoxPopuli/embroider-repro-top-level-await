import Component from '@glimmer/component';

import { two } from './top-level-await';

export default class DemoComponent extends Component {
  two = two;
}
