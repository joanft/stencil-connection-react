import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() test: number = 1

  addNumber = () => {
    this.test = this.test +1;
  }

  render() {
    return <div>
      Hello, Adrian! { this.test }
      <button onClick={this.addNumber}>Add</button>
      </div>;
  }
}

