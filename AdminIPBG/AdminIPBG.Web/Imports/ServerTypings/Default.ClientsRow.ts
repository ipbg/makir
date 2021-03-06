﻿
namespace AdminIPBG.Default {
    export interface ClientsRow {
        ClientsId?: number;
        Name?: string;
    }

    export namespace ClientsRow {
        export const idProperty = 'ClientsId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Clients';

        export namespace Fields {
            export declare const ClientsId;
            export declare const Name;
        }

        ['ClientsId', 'Name'].forEach(x => (<any>Fields)[x] = x);
    }
}

