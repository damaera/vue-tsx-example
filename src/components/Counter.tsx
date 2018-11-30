import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
@Component
export default class Counter extends Vue {
  @State('count') private count;
  @Mutation('increment') private increment;

  public render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.count}</p>

        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
