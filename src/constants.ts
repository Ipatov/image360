import * as types from './types';

export enum DIRECTION {
  LEFT,
  RIGHT,
};

export const DEFAULT_CONFIG: types.Config = {
  preload: true,
  isBackground: false,
  loopCount: 10,
  imagesUrls: [],
};
