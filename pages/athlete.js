export default class Athlete extends React.Component {
  static async getInitialProps({ query }) {
    const { id } = query;

    return {
      id
    }
  }

  render() {
    return <h1>Hi, {this.props.id}</h1>;
  }
}
