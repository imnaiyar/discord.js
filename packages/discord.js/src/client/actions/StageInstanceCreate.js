import { Action } from "./Action.js";
import { Events } from "../../util/Events.js";
'use strict';
class StageInstanceCreateAction extends Action {
    handle(data) {
        const client = this.client;
        const channel = this.getChannel({ id: data.channel_id, guild_id: data.guild_id });
        if (channel) {
            const stageInstance = channel.guild.stageInstances._add(data);
            /**
             * Emitted whenever a stage instance is created.
             * @event Client#stageInstanceCreate
             * @param {StageInstance} stageInstance The created stage instance
             */
            client.emit(Events.StageInstanceCreate, stageInstance);
            return { stageInstance };
        }
        return {};
    }
}
export { StageInstanceCreateAction };
