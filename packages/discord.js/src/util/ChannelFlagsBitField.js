'use strict';

import { ChannelFlags } from 'discord-api-types/v10';
import { BitField } from './BitField.js';

/**
 * Data structure that makes it easy to interact with a {@link BaseChannel#flags} bitfield.
 * @extends {BitField}
 */
export class ChannelFlagsBitField extends BitField {
  /**
   * Numeric guild channel flags.
   * @type {ChannelFlags}
   * @memberof ChannelFlagsBitField
   */
  static Flags = ChannelFlags;
}
