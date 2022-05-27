/* eslint-disable no-unused-expressions */
/* global describe it */

import { readFile } from '@web/test-runner-commands';
import { expect } from '@esm-bundle/chai';
import nofollow from '../../../libs/blocks/nofollow/nofollow.js';

document.body.innerHTML = await readFile({ path: './mocks/body.html' });

describe('Nofollow', async () => {
  it('Returns null if no path provided', async () => {
    const imnull = await nofollow();
    expect(imnull).to.be.null;
  });

  it('Doesnt find links that are relative', async () => {
    const links = await nofollow('/test/blocks/nofollow/mocks/nofollow.json');
    expect(links[0].getAttribute('rel')).to.equal('nofollow noopener noreferrer');
  });
});
