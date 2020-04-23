type Config = {
  preload: boolean,
};

export default class Image360 {
  config: Config = {
    preload: true,
  };

  constructor(config: Partial<Config> = {}) {
    this.config = { ...this.config, ...config };

    console.log('config result---', this.config);
  }
}
