import path from 'path';
import { exec } from '../exec';
import { distRoot, repoRoot } from '../constants';
import { copy } from '../fs-utils';

export const BuildDistributable = () => {
  console.log('Building: '.cyan + 'distributable'.green);

  return exec(`rimraf ${distRoot}`)
    .then(() => Promise.all([
      exec(`NODE_ENV=production webpack --config=webpack.config.prod.js --bail`),
      copy(path.join(repoRoot, 'src/scss'), path.join(distRoot, 'scss')),
      copy(path.join(repoRoot, 'src/theme.less'), path.join(distRoot, 'theme.less'))
    ]))
    .then(() => console.log('Built: '.cyan + 'distributable'.green));
};
