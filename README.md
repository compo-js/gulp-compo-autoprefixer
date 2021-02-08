# gulp-compo-autoprefixer

**Gulp** plugin for using the **Autoprefixer** in **[CompoJS](http://compojs.ru/)**

## Install

```
npm i gulp-compo-autoprefixer -D
```

## Using

```js
const compoAutoprefixer = require('gulp-compo-autoprefixer')

function components() {
  return gulp.src('src/components/**/*.htm')
    .pipe(compoAutoprefixer())
    .pipe(concat('components.htm'))
    .pipe(gulp.dest('dist'))
}

// or

function components() {
  return gulp.src('src/components/**/*.htm')
    .pipe(compoAutoprefixer({
      overrideBrowserslist: ['last 15 versions']
    }))
    .pipe(concat('components.htm'))
    .pipe(gulp.dest('dist'))
}
```

## Example

**source**

```html
<c-component1>
  <h1>${ message }</h1>

  <style>
    :host {
      display: flex;
    }
  </style>
    
  <script>
    this.message = 'Компонент 1'
  </script>
</c-component1>
```
<br>

**output**

```html
<c-component1>
  <h1>${ message }</h1>

  <style>
    :host {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }
  </style>
    
  <script>
    this.message = 'Компонент 1'
  </script>
</c-component1>
```

## Author

- **[compojs.ru](http://www.compojs.ru)**

## Contacts

- **[compo.js@mail.ru](mailto:compo.js@mail.ru)**
