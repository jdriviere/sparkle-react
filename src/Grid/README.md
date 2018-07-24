# Grid

```jsx
<Grid $style>
    <Grid.Column size="x" offset="y">
        // Children elements go here...
    </Grid.Column>
    <Grid.Column size="x" offset="y">
        // Children elements go here...
    </Grid.Column>
    ...
</Grid>
```

The `$style` variable can be either of the following:
- `gutters`

The `size` variable can be either range from `1` to `12`, or of the following:
- `twelfth`
- `sixth`
- `fourth`
- `third`
- `half`
- `thirds`
- `fourths`
- `sixths`
- `twelfths`
- `full`

The `offset` variable can be either range from `1` to `12`, or of the following:
- `twelfth`
- `sixth`
- `fourth`
- `third`
- `half`
- `thirds`
- `fourths`
- `sixths`
- `twelfths`
- `full`

**_Note_**: For the time being, the fractional offsets are not yet functional.