import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { ApiServiceV1 } from '../api/apiServiceV1';

@Injectable()
export class Items {

    constructor(public api: ApiServiceV1) { }

    query(params?: any) {
        return this.api.get('/items', params);
    }

    add(item: Item) {
    }

    delete(item: Item) {
    }

}
