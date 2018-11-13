# Hero

```jsx
<Hero $style size="$size">
    <Hero.Header>
        // Children elements go there...
    </Hero.Header>
    
    <Hero.Body>
        // Children elements go there...
    </Hero.Body>
    
    <Hero.Footer>
        // Children elements go there...
    </Hero.Footer>
</Hero>
```

The `$style` property applies to one of the following is optional:
- `primary`
- `info`
- `success`
- `warning`
- `danger`
- `light`
- `dark`

The `size={string value}` property applies to one of the following and is required:
- `small`
- `medium`
- `large`
- `halfSize`
- `fullSize`