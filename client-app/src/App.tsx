import * as React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <>
        <Header/>
        <Container/>
        <Footer/>
      </>
    );
  }
}
