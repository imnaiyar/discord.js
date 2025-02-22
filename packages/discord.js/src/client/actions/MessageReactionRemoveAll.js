import { Action } from "./Action.js";
import { Events } from "../../util/Events.js";
'use strict';
class MessageReactionRemoveAllAction extends Action {
    handle(data) {
        // Verify channel
        const channel = this.getChannel({ id: data.channel_id, ...('guild_id' in data && { guild_id: data.guild_id }) });
        if (!channel?.isTextBased())
            return false;
        // Verify message
        const message = this.getMessage(data, channel);
        if (!message)
            return false;
        // Copy removed reactions to emit for the event.
        const removed = message.reactions.cache.clone();
        message.reactions.cache.clear();
        this.client.emit(Events.MessageReactionRemoveAll, message, removed);
        return { message };
    }
}
export { MessageReactionRemoveAllAction };
