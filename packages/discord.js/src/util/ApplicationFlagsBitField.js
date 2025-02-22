'use strict';

import { ApplicationFlags } from 'discord-api-types/v10';
import { BitField } from './BitField.js';

/**
 * Data structure that makes it easy to interact with a {@link ClientApplication#flags} bitfield.
 * @extends {BitField}
 */
export class ApplicationFlagsBitField extends BitField {
  /**
   * Numeric application flags. All available properties:
   * @type {ApplicationFlags}
   * @memberof ApplicationFlagsBitField
   */
  static Flags = ApplicationFlags;
}
