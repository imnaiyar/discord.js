import { BaseGuildVoiceChannel } from "./BaseGuildVoiceChannel.js";
'use strict';
/**
 * Represents a guild stage channel on Discord.
 * @extends {BaseGuildVoiceChannel}
 */
class StageChannel extends BaseGuildVoiceChannel {
    _patch(data) {
        super._patch(data);
        if ('topic' in data) {
            /**
             * The topic of the stage channel
             * @type {?string}
             */
            this.topic = data.topic;
        }
    }
    /**
     * The stage instance of this stage channel, if it exists
     * @type {?StageInstance}
     * @readonly
     */
    get stageInstance() {
        return this.guild.stageInstances.cache.find(stageInstance => stageInstance.channelId === this.id) ?? null;
    }
    /**
     * Creates a stage instance associated with this stage channel.
     * @param {StageInstanceCreateOptions} options The options to create the stage instance
     * @returns {Promise<StageInstance>}
     */
    createStageInstance(options) {
        return this.guild.stageInstances.create(this.id, options);
    }
    /**
     * Sets a new topic for the guild channel.
     * @param {?string} topic The new topic for the guild channel
     * @param {string} [reason] Reason for changing the guild channel's topic
     * @returns {Promise<StageChannel>}
     * @example
     * // Set a new channel topic
     * stageChannel.setTopic('needs more rate limiting')
     *   .then(channel => console.log(`Channel's new topic is ${channel.topic}`))
     *   .catch(console.error);
     */
    setTopic(topic, reason) {
        return this.edit({ topic, reason });
    }
}
export { StageChannel };
