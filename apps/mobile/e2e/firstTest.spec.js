import {device} from 'detox';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
});
