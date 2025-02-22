import { Action } from "./Action.js";
import { Events } from "../../util/Events.js";
'use strict';
class ChannelDeleteAction extends Action {
    handle(data) {
        const client = this.client;
        const channel = client.channels.cache.get(data.id);
        if (channel) {
            client.channels._remove(channel.id);
            /**
             * Emitted whenever a channel is deleted.
             * @event Client#channelDelete
             * @param {DMChannel|GuildChannel} channel The channel that was deleted
             */
            client.emit(Events.ChannelDelete, channel);
        }
    }
}
export { ChannelDeleteAction };
