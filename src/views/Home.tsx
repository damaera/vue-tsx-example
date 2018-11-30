import { Component, Vue } from 'vue-property-decorator';
import Counter from '@/components/Counter';
import Fetch from '@/components/Fetch';

@Component
export default class Home extends Vue {
  public name = 'hello world';

  public render() {
    return (
      <div class='foo'>
        {this.name}
        <Counter />

        <hr />

        <h1>Fetch random amiibo</h1>

        <Fetch
          url='http://www.amiiboapi.com/api/amiibo/?character=zelda'
          renderFetch={({ data, error, loading }) => {
            if (error) { return error.toString(); }
            if (loading) { return 'loading...'; }
            return (
              <div>
                { data.amiibo.map((item) => (
                  <div>
                    <h2>{item.amiiboSeries}</h2>
                    <p>{item.setup}</p>
                  </div>
                ))}
              </div>
            );
          }
        }
        />
      </div>
    );
  }
}
