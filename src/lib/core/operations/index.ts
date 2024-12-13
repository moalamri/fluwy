import { Client } from '../client/index.js';

import { alert } from '@/lib/core/operations/alert/index.js';
import { clear_form_errors } from '@/lib/core/operations/clear_form_errors/index.js';
import { close_dialog } from '@/lib/core/operations/close_dialog.js';
import { context } from '@/lib/core/operations/context.js';
import { deleteOperation } from '@/lib/core/operations/delete.js';
import { emit } from '@/lib/core/operations/emit/index.js';
import { extract } from '@/lib/core/operations/extract/index.js';
import { get } from '@/lib/core/operations/get.js';
import { goto } from '@/lib/core/operations/goto.js';
import { if_operation } from '@/lib/core/operations/if_operation.js';
import { log } from '@/lib/core/operations/log/index.js';
import { notify } from '@/lib/core/operations/notify.js';
import { open_dialog } from '@/lib/core/operations/open_dialog.js';
import { post } from '@/lib/core/operations/post/index.js';
import { refresh } from '@/lib/core/operations/refresh.js';
import { set_auth_token } from '@/lib/core/operations/set_auth_token.js';
import { set_auth_user } from '@/lib/core/operations/set_auth_user.js';
import { set_form_errors } from '@/lib/core/operations/set_form_errors/index.js';
import { set_mode } from '@/lib/core/operations/set_mode/index.js';
import { transform } from '@/lib/core/operations/transform/index.js';
import { unset_local_storage } from '@/lib/core/operations/unset_local_storage.js';
import { wrap_into } from '@/lib/core/operations/wrap_into/index.js';
import * as cookies from '@/lib/core/operations/cookies.js';

export function installOperations(client: Client) {
    client.addOperation('alert', alert);
    client.addOperation('clear_form_errors', clear_form_errors);
    client.addOperation('close_dialog', close_dialog);
    client.addOperation('context', context);
    client.addOperation('delete', deleteOperation);
    client.addOperation('emit', emit);
    client.addOperation('extract', extract);
    client.addOperation('get', get);
    client.addOperation('goto', goto);
    client.addOperation('if', if_operation);
    client.addOperation('log', log);
    client.addOperation('notify', notify);
    client.addOperation('open_dialog', open_dialog);
    client.addOperation('post', post);
    client.addOperation('refresh', refresh);
    client.addOperation('remove_cookie', cookies.unset_operation);
    client.addOperation('remove_local_storage', unset_local_storage);
    client.addOperation('set_auth_token', set_auth_token);
    client.addOperation('set_auth_user', set_auth_user);
    client.addOperation('set_cookie', cookies.set_operation);
    client.addOperation('set_form_errors', set_form_errors);
    client.addOperation('set_mode', set_mode);
    client.addOperation('transform', transform);
    client.addOperation('unset_cookie', cookies.unset_operation);
    client.addOperation('unset_local_storage', unset_local_storage);
    client.addOperation('wrap_into', wrap_into);
}
