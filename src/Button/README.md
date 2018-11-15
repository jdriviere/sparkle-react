# Button

```jsx
<Button $style $modifier $size $roundess href="#">
    // Children elements go here...
</Button>
```

The `$style` variable can be either of the following:
- `primary`
- `info`
- `success`
- `warning`
- `danger`
- `light`
- `dark`

The `$modifier` variable can be either of the following:
- `outline`
- `reverse`
- `link`

The `$size` variable can be either of the following:
- `xsmall`
- `small`
- `medium` (also the default size)
- `large`
- `xlarge`
- `block`

The `$roundness` variable can be either of the following:
- `radial`
- `round`

**_Note_**: The `$style`, `$modifier`, `$size`, `$roundness`, and `href` properties are optional.
Furthermore, the `$style`, `outline`, and `reverse` properties can also be combined together (no other
combinations can be made).