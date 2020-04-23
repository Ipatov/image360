type Config = {
  preload: boolean,
  isBackground: boolean,
  loopCount: number,
  imagesUrls: string[],
};

export default class Image360 {
  readonly config: Config = {
    preload: true,
    isBackground: false,
    loopCount: 10,
    imagesUrls: [],
  };

  constructor(element: Element, config: Partial<Config> = {}) {
    this.config = { ...this.config, ...config };
  }

  public async init() {
    if (this.shouldPreloadImages()) {
      await this.preloadImages();
    }

  }

  private shouldPreloadImages(): boolean {
    return this.config.preload;
  };

  private preloadImages(): Promise<any> {
    const imagePromises = this.config.imagesUrls.map(imageUrl => new Promise(resolve => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = img.onerror = resolve;
    }));

    return Promise.all(imagePromises);
  };
}
