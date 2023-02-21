import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
})
export class MyComponent {

  @State() test: number = 1

  addNumber = () => {
    this.test = this.test +1;
  }

  render() {
    return <div>
      <p>Hello, World! - { this.test }</p>
      <button onClick={this.addNumber}>Add</button>
      </div>;
  }
}

