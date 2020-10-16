import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, Dropdown, Icon } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const menuAnalyzeHeight = { height: "43px" };
    return (
        <Menu borderless className="topmenu" style={{ height: "83px" }}>
          <Menu.Item position='left'>
            <Image
                style={{ width: "200px" }}
                src="https://www.fakespot.com/assets/home/color_fakespot-0190751cb545154c935cdd73f099d4b2f00305b1c39f642e2dc3e64d1a60068f.svg"/>
          </Menu.Item>
          <Container>
            <Menu.Item position={'left'}>
              <div class={'ui input'}>
                <input type={'text'} style={menuAnalyzeHeight} placeholder={'  https://www.'}></input>
                <button class={'ui rounded button'}>Analyze</button>
              </div>
            </Menu.Item>
          </Container>
          <Menu.Item>
            <Dropdown selection icon={'heart'} text={'Share the word'}>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <div class="item"><i class="facebook icon"></i>Share on Facebook
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div class="item"><i class="twitter icon"></i>Share on Twitter
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div class="item"><i class="linkedin icon"></i>Share on LinkedIn
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

        </Menu>
    )
  }
}

class Middle extends React.Component {
  render() {
    return (
        <div className={'middle'}>
          <div id="main-text" class="ui container">
            <h1>Prime insurance,&nbsp;</h1>
            <h1 id={'blue-text'}>free with Fakespot</h1>
            <p>Fakespot Products and Businesses Below, So You Know Before You Buy</p>
          </div>
          <Container>
            <div class={'ui input'}>
              <input id={'middle-input'} fluid type={'text'} placeholder={'  https://www.'}></input>
              <button id={'middle-button'} class={'ui rounded button'}>Analyze</button>
            </div>
          </Container>
          <div class={'ui container'}>
            <div id="lower-icons" class="row">
              <div class={'column'}>
                <Image class="logo" style={{ height: "30px" }}
                       src="https://www.fakespot.com/assets/home/ebay-47ef8e1bf92337c4eb15b7da3116f72d5a0016ffb4923320c8bd9b78b3bebd94.png"
                       alt="Ebay"/>
              </div>
              <div class={'column'}>
                <Image class="logo"
                       src="https://www.fakespot.com/assets/home/amazon-logo-9c7fa340e7faf4a096a77236013293a720758859e5a7b1d8ab7d7778cbb8f119.svg"
                       alt="Amazon logo"/>
              </div>
              <div class={'column'}>
                <Image class="logo"
                       src="https://www.fakespot.com/assets/home/bestbuy-logo-a3ea8ddda222a15b6cc86d09fb4660d2798123a071f507b291c082fd60df40ef.svg"
                       alt="Bestbuy logo"/>
              </div>
              <div class={'column'}>
                <Image class="logo"
                       src="https://www.fakespot.com/assets/home/sephora-logo-790e328f3933397de27ed4aee4d0d9fd610731014a8e65192c3c8ad9d9aafeff.svg"
                       alt="Sephora logo"/>
              </div>
              <div class={'column'}>
                <Image class="logo"
                       src="https://www.fakespot.com/assets/home/walmart-logo-61bff6f98f222d9dce24a8e205cc95aa8a2f96f9ce31f06692623a5fb35dccd2.svg"
                       alt="Walmart logo"/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div class={'footer'}>
          <div class="ui grid">
            <div id="footer-row" class="two column row">
              <div class="column">
                <Image
                    src="https://www.fakespot.com/assets/home/color_fakespot-0190751cb545154c935cdd73f099d4b2f00305b1c39f642e2dc3e64d1a60068f.svg"/>
                <p>Copyright 2020 Fakespot Inc</p>
                <h4></h4>
                <Image alt="apple-app"
                       src="https://www.fakespot.com/assets/home/apple_app-d3eb0de9234e272304c3853fc4a469cd1456f5e7611a9f94e0a12dc9991b0f20.svg"/>
                <h4></h4>
                <Image alt="google-play"
                       src="https://www.fakespot.com/assets/home/google_play-f00b75a0b626deabd75653056f14aeb06d61fb41e6c860bb2c0cc126d282a0be.svg"/>
              </div>
              <div id="right-footer" class="column">
                <h4>COMPANY</h4>
                <pre>Fakespot.com&#9;    Careers    &#9;Press    &#9;   Blog</pre>
                <h4>Support</h4>
                <pre>Contact&#9;    FAQ&#9;   Terms of Use&#9;   Privacy Policy</pre>
                <h4>Reviews</h4>
                <pre>Last Analysis&#9;    Analysis Blog</pre>

              </div>
            </div>
          </div>
        </div>
    )
  }
}

class FakespotRecreationReact extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Middle/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(
    <FakespotRecreationReact/>
    , document.getElementById('root'));