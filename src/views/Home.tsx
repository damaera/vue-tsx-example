import { Component, Vue } from 'vue-property-decorator';
import Counter from '@/components/Counter';

@Component
export default class Home extends Vue {
  public name = 'hello world';
  public render() {
    return (
      <div class='foo'>
        {this.name}
        <Counter />
      </div>
    );
  }
}
