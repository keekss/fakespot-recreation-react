import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, Icon } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const picStyle = { width: "200px" };
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item>
              <Image
                  style={picStyle}
                  src="https://www.fakespot.com/assets/home/color_fakespot-0190751cb545154c935cdd73f099d4b2f00305b1c39f642e2dc3e64d1a60068f.svg"/>
            </Menu.Item>
            <Menu.Item position=" right">LOCATIONS & MENUS</Menu.Item>
            <Menu.Item>BEER</Menu.Item>
            <Menu.Item>ABOUT</Menu.Item>
            <Menu.Item>CONTACT</Menu.Item>
            <Menu.Item>STORE</Menu.Item>
            <Menu.Item>EVENTS</Menu.Item>
            <Menu.Item>NOSTALGIA</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Header as="h1">IslandSnowLogo</Header>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Header as="h1">MiddleMenu</Header>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Header as="h1">FullWidthImage</Header>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Header as="h1">FooterMenu</Header>
    )
  }
}

class FakespotRecreationReact extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<FakespotRecreationReact/>, document.getElementById('root'));