# Card

```jsx
<Card>
    <Card.Body.Image src={...} alt={...}/>
    
    <Card.Header>
        // Children elements go there...
    </Card.Header>
    
    <Card.Body>
        // Children elements go there...
    </Card.Body>
    
    <Card.Footer>
        // Children elements go here...
    </Card.Footer>
</Card>
```

**_Note_**: The `Card.Body.Image` is a self-closing element, and the `src` is mandatory. It can also be placed anywhere within the `Card` component.