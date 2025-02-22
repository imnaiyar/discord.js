'use strict';

import { AttachmentFlags } from 'discord-api-types/v10';
import { BitField } from './BitField.js';

/**
 * Data structure that makes it easy to interact with an {@link Attachment#flags} bitfield.
 * @extends {BitField}
 */
export class AttachmentFlagsBitField extends BitField {
  /**
   * Numeric attachment flags.
   * @type {AttachmentFlags}
   * @memberof AttachmentFlagsBitField
   */
  static Flags = AttachmentFlags;
}
