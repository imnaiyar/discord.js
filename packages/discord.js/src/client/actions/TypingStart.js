import { Action } from "./Action.js";
import { Typing } from "../../structures/Typing.js";
import { Events } from "../../util/Events.js";
'use strict';
class TypingStartAction extends Action {
    handle(data) {
        const channel = this.getChannel({ id: data.channel_id, ...('guild_id' in data && { guild_id: data.guild_id }) });
        if (!channel)
            return;
        if (!channel.isTextBased()) {
            this.client.emit(Events.Warn, `Discord sent a typing packet to a ${channel.type} channel ${channel.id}`);
            return;
        }
        const user = this.getUserFromMember(data);
        if (user) {
            /**
             * Emitted whenever a user starts typing in a channel.
             * @event Client#typingStart
             * @param {Typing} typing The typing state
             */
            this.client.emit(Events.TypingStart, new Typing(channel, user, data));
        }
    }
}
export { TypingStartAction };
