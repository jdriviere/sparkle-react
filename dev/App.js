import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Alert from '../src/Alert';
import Blockquote from '../src/Blockquote';
import Button from '../src/Button';
import Buttons from '../src/Buttons';
import Tag from '../src/Tag';
import Tags from '../src/Tags';

import Card from '../src/Card';

import './App.css';

class App extends Component {
    render() {
        return(
            <div className="wrapper">
                <div className="App">
                    <div className="App__section">
                        <h1>Hello, World!</h1>

                        <Tags>
                            <Tag primary>ReSpark</Tag>
                            <Tag dark>v1.0.0</Tag>
                            <Tag success>New!</Tag>
                        </Tags>

                        <h5>
                            A series of React.js modules that allow you to implement
                            the <Tag>Sparkle.CSS</Tag> framework for styling web pages
                            and web applications.
                        </h5>
                    </div>

                    <Buttons>
                        <Button primary large>
                            <i className="fa fa-download"></i>
                            &nbsp;Download
                        </Button>
                        <Button dark outline large>
                            <i className="fa fa-book"></i>
                            &nbsp;Read the Docs
                        </Button>
                    </Buttons>

                    <br/>
                    <AlertGroup/>
                    <br/>
                    <BlockquoteGroup/>
                    <br/>
                    <ButtonGroup/>
                    <br/>
                    <TagGroup/>

                    <br/><br/>
                    <CardGroup/>
                    
                </div>
            </div>
        );
    }
}

class AlertGroup extends React.Component {
    render() {
        return (
            <div>
                <h5>Alerts:</h5>
                <Alert>Alert</Alert>
                <Alert primary>Alert</Alert>
                <Alert info>Alert</Alert>
                <Alert success>Alert</Alert>
                <Alert warning>Alert</Alert>
                <Alert danger>Alert</Alert>
                <Alert light>Alert</Alert>
                <Alert dark>Alert</Alert>
                <br/>
                <Alert outline primary>Alert</Alert>
                <Alert outline info>Alert</Alert>
                <Alert outline success>Alert</Alert>
                <Alert outline warning>Alert</Alert>
                <Alert outline danger>Alert</Alert>
                <Alert outline light>Alert</Alert>
                <Alert outline dark>Alert</Alert>
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
                    <Button disabled>Button</Button>
                    <Button primary disabled>Button</Button>
                    <Button info disabled>Button</Button>
                    <Button success disabled>Button</Button>
                    <Button warning disabled>Button</Button>
                    <Button danger disabled>Button</Button>
                    <Button light disabled>Button</Button>
                    <Button dark disabled>Button</Button>
                </Buttons>
                <Buttons style={{background:'#333639', padding: 10}}>
                    <Button primary reverse>Button</Button>
                    <Button info reverse>Button</Button>
                    <Button success reverse>Button</Button>
                    <Button warning reverse>Button</Button>
                    <Button danger reverse>Button</Button>
                    <Button light reverse>Button</Button>
                    <Button dark reverse>Button</Button>
                </Buttons>
                <Buttons style={{background:'#333639', padding: 10}}>
                    <Button primary outline>Button</Button>
                    <Button info outline>Button</Button>
                    <Button success outline>Button</Button>
                    <Button warning outline>Button</Button>
                    <Button danger outline>Button</Button>
                    <Button light outline>Button</Button>
                    <Button dark outline>Button</Button>
                </Buttons>
                <Buttons style={{background:'#333639', padding: 10}}>
                    <Button primary reverse outline>Button</Button>
                    <Button info reverse outline>Button</Button>
                    <Button success reverse outline>Button</Button>
                    <Button warning reverse outline>Button</Button>
                    <Button danger reverse outline>Button</Button>
                    <Button light reverse outline>Button</Button>
                    <Button dark reverse outline>Button</Button>
                </Buttons>
                <Buttons style={{background:'#333639', padding: 10}}>
                    <Button primary ghost>Button</Button>
                    <Button info ghost>Button</Button>
                    <Button success ghost>Button</Button>
                    <Button warning ghost>Button</Button>
                    <Button danger ghost>Button</Button>
                    <Button light ghost>Button</Button>
                    <Button dark ghost>Button</Button>
                </Buttons>
                <Buttons style={{background:'#333639', padding: 10}}>
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
                <Buttons solid>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
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
                <Tags style={{background: '#333639', padding: 10}}>
                    <Tag primary reverse>Tag</Tag>
                    <Tag info reverse>Tag</Tag>
                    <Tag success reverse>Tag</Tag>
                    <Tag warning reverse>Tag</Tag>
                    <Tag danger reverse>Tag</Tag>
                    <Tag light reverse>Tag</Tag>
                    <Tag dark reverse>Tag</Tag>
                </Tags>
                <Tags style={{background: '#333639', padding: 10}}>
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
                    <Tag warning reverse bullet>Tag</Tag>
                </Tags>
                <Tags solid>
                    <Tag primary>Tag</Tag>
                    <Tag info>Tag</Tag>
                    <Tag dark>Tag</Tag>
                </Tags>
            </div>
        );
    }
}

class BlockquoteGroup extends React.Component {
    render() {
        return (
            <div>
                <Blockquote>This is a blockquote.</Blockquote>
                <Blockquote primary>This is a blockquote.</Blockquote>
                <Blockquote info>This is a blockquote.</Blockquote>
                <Blockquote success>This is a blockquote.</Blockquote>
                <Blockquote warning>This is a blockquote.</Blockquote>
                <Blockquote danger>This is a blockquote.</Blockquote>
            </div>
        );
    }
}

class CardGroup extends React.Component {
    render() {
        return (
            <div>
                <h5>Cards:</h5>
                <Card style={{maxWidth: 350, margin: 10}}>
                    <Card.Header>
                        <Card.Header.Title>This is the Title</Card.Header.Title>
                        <Card.Header.Subtitle>This is the Subtitle</Card.Header.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Body.Image src="http://via.placeholder.com/350x250"/>
                        <p>
                            "There are two hard things in computer science: cache invalidation,
                            naming things, and off-by-one errors."
                        </p>
                    </Card.Body>
                </Card>

                <Card shadow style={{maxWidth: 300, margin: 10}}>
                    <Card.Header>
                        <Card.Header.Title>This is the Title</Card.Header.Title>
                        <Card.Header.Subtitle>This is the Subtitle</Card.Header.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <p>
                            "There are two hard things in computer science: cache invalidation,
                            naming things, and off-by-one errors."
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Footer.Item><p>Item1</p></Card.Footer.Item>
                        <Card.Footer.Item><p>Item2</p></Card.Footer.Item>
                        <Card.Footer.Item><p>Item3</p></Card.Footer.Item>
                    </Card.Footer>
                </Card>

                <Card hoverable style={{maxWidth: 300, margin: 10}}>
                    <Card.Header>
                        <Card.Header.Title>This is the Title</Card.Header.Title>
                        <Card.Header.Subtitle>This is the Subtitle</Card.Header.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <p>
                            "There are two hard things in computer science: cache invalidation,
                            naming things, and off-by-one errors."
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Footer.Item>
                            <h6>This is the Footer</h6>
                        </Card.Footer.Item>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default hot(module)(App);