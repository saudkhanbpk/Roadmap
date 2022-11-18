import { CONFIRM_EMAIL_PREFIX } from 'src/Constants';
import {v4} from 'uuid';
import {redis} from '../redis';
export const createConfirmEmailLink = async(userId: number) => {
    const id = v4();
    await redis.set(`${CONFIRM_EMAIL_PREFIX}${id}`, userId, 'EX', 60 * 60 * 15);
    // 1 day expiration
    return `http://localhost:9000/api/confirm/${id}`;

};


