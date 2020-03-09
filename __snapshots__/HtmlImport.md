# `HtmlImport`

#### `should return empty element when src not specified`

```html
```

#### `should import document body`

```html
<h2>Title</h2>
<div id="content">
  <p>Content</p>
</div>
```

#### `should import document body fragment`

```html
<p>Content</p>
```

#### `should re-write image URLs`

```html
<img src="http://localhost/test/image.png"/>
```
