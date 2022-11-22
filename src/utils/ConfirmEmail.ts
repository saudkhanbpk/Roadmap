 import { CONFIRM_EMAIL_PREFIX } from 'src/Constants';
 import {v4} from 'uuid';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';

// export const createConfirmEmailLink = async ( userId: number) => {
//     const id = v4();
//     await cacheManager.set(`${CONFIRM_EMAIL_PREFIX}${id}`, id,);
//     return `http://localhost:9000/user/confirm/${id}`;
// }

@Injectable()
export class ConfirmEmailService {
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}
    async createConfirmEmailLink(userId: number) {
        const id = v4();
        await this.cacheManager.set(`${CONFIRM_EMAIL_PREFIX}${id}`, userId);
        return `http://localhost:9000/api/confirm/${id}`;
    }
}




