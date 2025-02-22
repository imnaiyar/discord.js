import { Collection } from "@discordjs/collection";
import { makeURLSearchParams } from "@discordjs/rest";
import * as v10 from "discord-api-types/v10";
import { CachedManager } from "./CachedManager.js";
import { User } from "../structures/User.js";
'use strict';
const { Routes } = v10;
/**
 * Manages API methods for users who voted on a poll and stores their cache.
 * @extends {CachedManager}
 */
class PollAnswerVoterManager extends CachedManager {
    constructor(answer) {
        super(answer.client, User);
        /**
         * The poll answer that this manager belongs to
         * @type {PollAnswer}
         */
        this.answer = answer;
    }
    /**
     * The cache of this manager
     * @type {Collection<Snowflake, User>}
     * @name PollAnswerVoterManager#cache
     */
    /**
     * Fetches the users that voted on this poll answer. Resolves with a collection of users, mapped by their ids.
     * @param {BaseFetchPollAnswerVotersOptions} [options={}] Options for fetching the users
     * @returns {Promise<Collection<Snowflake, User>>}
     */
    async fetch({ after, limit } = {}) {
        const poll = this.answer.poll;
        const query = makeURLSearchParams({ limit, after });
        const data = await this.client.rest.get(Routes.pollAnswerVoters(poll.channelId, poll.messageId, this.answer.id), {
            query,
        });
        return data.users.reduce((coll, rawUser) => {
            const user = this.client.users._add(rawUser);
            this.cache.set(user.id, user);
            return coll.set(user.id, user);
        }, new Collection());
    }
}
export { PollAnswerVoterManager };
