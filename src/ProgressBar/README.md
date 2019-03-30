# Progress Bar

```jsx
<Progress $style value="$value" max="$maxValue">
    // Child element go here...
</Progress>
```

The `$style` variable can be either of the following:
- `primary`
- `info`
- `success`
- `warning`
- `danger`
- `light`
- `dark`

The `$value` variable is a string that will represent the length of the progress bar, and the
`$maxValue` is the max value that will determine the fill percentage of the progress bar. Both
props of this Component are mandatory.