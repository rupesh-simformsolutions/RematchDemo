import loadingPlugin from '@rematch/loading';
import {init} from '@rematch/core';
import * as models from '../models';

const store = init({
  models,
  plugins: [loadingPlugin()],
});

export default store;
