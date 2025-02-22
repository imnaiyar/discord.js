import * as index from "../src/index.js";
'use strict';
/* eslint-env jest */
const { resolveGuildTemplateCode } = index;
describe('resolveGuildTemplateCode', () => {
    test('basic', () => {
        expect(resolveGuildTemplateCode('https://discord.new/abc')).toEqual('abc');
    });
});
