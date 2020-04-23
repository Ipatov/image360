import Image360 from '../../src';

const images = Array.apply(null, new Array(50)).map((el, i) =>  `/JPEG/IMG_0512 ${i + 1}.jpg`);

const image360 = new Image360(
  document.getElementById('demo1'), {
  preload: true,
  imagesUrls: images,
  loopCount: 10,
});
image360.init();
