import Image360 from '../index';

describe('Image360 tests', function () {
  let image: HTMLImageElement;
  beforeEach(() => {
    image = new Image();
  });

  it('should work', function () {
    const image360 = new Image360(image, {
      loopCount: 5,
      preload: false,
      imagesUrls: ['image1', 'image2'],
    });
    image360.init();
    expect(image360.config).toEqual({
      imagesUrls: ['image1', 'image2'],
      isBackground: false,
      loopCount: 5,
      preload: false,
    })
  });
});
