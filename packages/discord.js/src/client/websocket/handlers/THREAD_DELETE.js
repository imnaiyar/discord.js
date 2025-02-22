import { Events } from "../../../util/Events.js";
'use strict';
export default (client, { d: data }) => {
    const thread = client.channels.cache.get(data.id);
    if (!thread)
        return;
    client.channels._remove(thread.id);
    /**
     * Emitted whenever a thread is deleted.
     * @event Client#threadDelete
     * @param {ThreadChannel} thread The thread that was deleted
     */
    client.emit(Events.ThreadDelete, thread);
};
