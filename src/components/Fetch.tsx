import { Component, Vue, Prop } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Fetch extends Vue {
  @Prop(String) public url!: string;
  @Prop(Function) public renderFetch;

  public data = {};
  public error = false;
  public loading: boolean = false;

  public created() {
    // tslint:disable-next-line:no-console
    this.loading = true;
    axios
      .get(this.url)
      .then((res) => {
        this.loading = false;
        this.data = res.data;
      })
      .catch((err) => {
        console.log(err);
        this.loading = false;
        this.error = err;
      });
  }

  public render() {
    return (
      <div>
        {
          this.renderFetch({
            data: this.data,
            error: this.error,
            loading: this.loading,
          })
        }
      </div>
    )
  }
}
