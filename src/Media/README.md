# Media

```jsx
<Media>
    <Media.Profile>
        <Media.Profile.Image src={...} alt={...}/>
    </Media.Profile>
    <Media.Body>
        <Media.Body.Title>Title</Media.Body.Title>
        <Media.Body.Subtitle>Subtitle</Media.Body.Subtitle>
        <Media.Body.Timestamp>Timestamp</Media.Body.Timestamp>
        
        // Children elements go there...
    </Media.Body>
</Media>
```

**_Note_**: The `Media.Profile.Image` is a self-closing element, and the `src` is mandatory.