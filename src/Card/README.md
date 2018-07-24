# Card

```jsx
<Card>
    <Card.Header>
        <Card.Header.Title>Title</Card.Header.Title>
        <Card.Header.Subtitle>Subtitle</Card.Header.Subtitle>
    </Card.Header>
    
    <Card.Body>
        <Card.Body.Image src={...} alt={...}/>
        // Children elements go there...
    </Card.Body>
    
    <Card.Footer>
        <Card.Footer.Item>
            // Children elements go here...
        </Card.Footer.Item>
        <Card.Footer.Item>
            // Children elements go here...
        </Card.Footer.Item>
        ...
    </Card.Footer>
</Card>
```

**_Note_**: The `Card.Body.Image` is a self-closing element, and the `src` is mandatory.