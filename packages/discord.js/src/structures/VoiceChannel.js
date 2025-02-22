import * as v10 from "discord-api-types/v10";
import { BaseGuildVoiceChannel } from "./BaseGuildVoiceChannel.js";
'use strict';
const { PermissionFlagsBits } = v10;
/**
 * Represents a guild voice channel on Discord.
 * @extends {BaseGuildVoiceChannel}
 */
class VoiceChannel extends BaseGuildVoiceChannel {
    /**
     * Whether the channel is joinable by the client user
     * @type {boolean}
     * @readonly
     */
    get joinable() {
        if (!super.joinable)
            return false;
        if (this.full && !this.permissionsFor(this.client.user).has(PermissionFlagsBits.MoveMembers, false))
            return false;
        return true;
    }
    /**
     * Checks if the client has permission to send audio to the voice channel
     * @type {boolean}
     * @readonly
     */
    get speakable() {
        const permissions = this.permissionsFor(this.client.user);
        if (!permissions)
            return false;
        // This flag allows speaking even if timed out
        if (permissions.has(PermissionFlagsBits.Administrator, false))
            return true;
        return (this.guild.members.me.communicationDisabledUntilTimestamp < Date.now() &&
            permissions.has(PermissionFlagsBits.Speak, false));
    }
}
export { VoiceChannel };
