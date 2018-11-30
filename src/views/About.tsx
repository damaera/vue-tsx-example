import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  public render() {
    return (
      <div class='foo'>
        <h1>This is about page</h1>
      </div>
    );
  }
}
