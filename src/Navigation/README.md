# Navigation

```jsx
<Navigation fixed>
    <Navigation.Brand>
        // Child element goes here
    </Navigation.Brand>
    
    <Navigation.Menu>
        <Navigation.Menu.Item active><a href="#">active</a></Navigation.Menu.Item>
        <Navigation.Menu.Item><a href="#">item 2</a></Navigation.Menu.Item>
        <Navigation.Menu.Item><a href="#">item 3</a></Navigation.Menu.Item>
    </Navigation.Menu>
    
    <Navigation.Menu right>
        // Children elements go here
    </Navigation.Menu>
</Navigation>
```

**_Note_**: The `fixed` modifier of the `<Navigation>`, the `right` modifier of the `<Navigation.Menu>` element, and the `active` modifier of the `<Navigation.Menu.Item>` are all optional and will style the navigation bar accordingly.