import { Action } from "./Action.js";
import { Events } from "../../util/Events.js";
'use strict';
class GuildStickerUpdateAction extends Action {
    handle(current, data) {
        const old = current._update(data);
        /**
         * Emitted whenever a custom sticker is updated in a guild.
         * @event Client#stickerUpdate
         * @param {Sticker} oldSticker The old sticker
         * @param {Sticker} newSticker The new sticker
         */
        this.client.emit(Events.GuildStickerUpdate, old, current);
        return { sticker: current };
    }
}
export { GuildStickerUpdateAction };
