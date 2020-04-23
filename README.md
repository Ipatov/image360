# Rotate object in 360° on mouse drag and on touch move

[Demo Github Pages](https://n-spl1nter.github.io/image360/)

### Use CDN

```html
<script src="https://unpkg.com/image360/dist/index.js"></script>
```

### Or install as package
```javascript
npm install image360
```

### Usage
```javascript
import Image360 from 'image360';

const image360 = new Image360(
  document.getElementById('targetImageOrBlockId'), {
    preload: true,
    imagesUrls: ['pathToImage1.jpg', 'pathToImage2.jpg', ... 'pathToImageN.jpg'],
});

image360.init();
```

Based on: https://vk-book.ru/kartinka-360-gradusov-na-javascript/
