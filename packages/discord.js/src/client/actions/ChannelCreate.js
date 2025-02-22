import { Action } from "./Action.js";
import { Events } from "../../util/Events.js";
'use strict';
class ChannelCreateAction extends Action {
    handle(data) {
        const client = this.client;
        const existing = client.channels.cache.has(data.id);
        const channel = client.channels._add(data);
        if (!existing && channel) {
            /**
             * Emitted whenever a guild channel is created.
             * @event Client#channelCreate
             * @param {GuildChannel} channel The channel that was created
             */
            client.emit(Events.ChannelCreate, channel);
        }
        return { channel };
    }
}
export { ChannelCreateAction };
