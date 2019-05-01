import React from 'react';

import AppContainer from './containers/AppContainer';

interface IProps {}

interface IState {
  token: string;
  hasLogin: boolean;
}
export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      token: '',
      hasLogin: false,
    };
  }

  componentDidMount() {
    const tempToken = process.env.REACT_APP_GITHUB_TOKEN;
    if (tempToken) {
      this.setState({
        token: tempToken,
        hasLogin: true,
      });
    }
  }

  loginCb = () => this.setState({ hasLogin: true });

  render() {
    if (this.state.hasLogin) {
      return <AppContainer />;
    } else {
      return <div>Please login</div>;
    }
  }
}
