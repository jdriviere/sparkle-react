import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import 'sparkle.css/dist/css/sparkle.min.css';
import Button from './Button';
import Buttons from './Buttons';
import Tag from './Tag';
import Tags from './Tags';
import './App.css';

class App extends Component {
    render() {
        return(
            <div className="wrapper">
                <div className="App">
                    <h1>Hello, World!</h1>

                    <Tags>
                        <Tag primary>New!</Tag>
                        <Tag dark>v1.0.0</Tag>
                    </Tags>

                    <p>
                        This basic application presents the barebones of a React app, and uses
                        &nbsp;<span className="tag">Sparkle.CSS</span> as its base styling.
                    </p>

                    <br/>
                    <ButtonGroup/>
                    <br/>
                    <TagGroup/>
                    
                </div>
            </div>
        );
    }
}

class ButtonGroup extends React.Component {
    render() {
        return (
            <div>
                <h5>Buttons:</h5>
                <Buttons>
                    <Button>Button</Button>
                    <Button primary>Button</Button>
                    <Button info>Button</Button>
                    <Button success>Button</Button>
                    <Button warning>Button</Button>
                    <Button danger>Button</Button>
                    <Button light>Button</Button>
                    <Button dark>Button</Button>
                </Buttons>
                <Buttons>
                    <Button primary reverse>Button</Button>
                    <Button info reverse>Button</Button>
                    <Button success reverse>Button</Button>
                    <Button warning reverse>Button</Button>
                    <Button danger reverse>Button</Button>
                    <Button light reverse>Button</Button>
                    <Button dark reverse>Button</Button>
                </Buttons>
                <Buttons>
                    <Button primary ghost>Button</Button>
                    <Button info ghost>Button</Button>
                    <Button success ghost>Button</Button>
                    <Button warning ghost>Button</Button>
                    <Button danger ghost>Button</Button>
                    <Button light ghost>Button</Button>
                    <Button dark ghost>Button</Button>
                </Buttons>
                <Buttons>
                    <Button primary link>Button</Button>
                    <Button info link>Button</Button>
                    <Button success link>Button</Button>
                    <Button warning link>Button</Button>
                    <Button danger link>Button</Button>
                    <Button light link>Button</Button>
                    <Button dark link>Button</Button>
                </Buttons>
                <Buttons>
                    <Button xSmall>Button</Button>
                    <Button small>Button</Button>
                    <Button medium>Button</Button>
                    <Button large>Button</Button>
                    <Button xLarge>Button</Button>
                    <Button block>Button</Button>
                </Buttons>
                <Buttons>
                    <Button radial>Button</Button>
                    <Button round>Button</Button>
                </Buttons>
            </div>
        );
    }
}

class TagGroup extends React.Component {
    render() {
        return (
            <div>
                <h5>Tags:</h5>
                <Tags>
                    <Tag>Tag</Tag>
                    <Tag primary>Tag</Tag>
                    <Tag info>Tag</Tag>
                    <Tag success>Tag</Tag>
                    <Tag warning>Tag</Tag>
                    <Tag danger>Tag</Tag>
                    <Tag light>Tag</Tag>
                    <Tag dark>Tag</Tag>
                </Tags>
                <Tags>
                    <Tag primary reverse>Tag</Tag>
                    <Tag info reverse>Tag</Tag>
                    <Tag success reverse>Tag</Tag>
                    <Tag warning reverse>Tag</Tag>
                    <Tag danger reverse>Tag</Tag>
                    <Tag light reverse>Tag</Tag>
                    <Tag dark reverse>Tag</Tag>
                </Tags>
                <Tags>
                    <Tag primary outline>Tag</Tag>
                    <Tag info outline>Tag</Tag>
                    <Tag success outline>Tag</Tag>
                    <Tag warning outline>Tag</Tag>
                    <Tag danger outline>Tag</Tag>
                    <Tag light outline>Tag</Tag>
                    <Tag dark outline>Tag</Tag>
                </Tags>
                <Tags>
                    <Tag>Tag</Tag>
                    <Tag round>Tag</Tag>
                </Tags>
            </div>
        );
    }
}

export default hot(module)(App);