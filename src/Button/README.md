# Buttons

```jsx
<Button $style $modifier $size $roundess>
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

**_Note_**: The `$style`, `$modifier`, `$size`, and `$roundness` variables are optional.
Furthermore, the `$style` values `outline` and `reverse` can also be combined together (no
other `$style` combinations can be made).