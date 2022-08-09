import { NfToken, UriUpdateAction } from '../../../model';
import { createUriUpdateActions } from '../../uriUpdateActions';
import { EntitiesManager } from './common';

export class UriUpdateActionsManager extends EntitiesManager<UriUpdateAction> {
  async getOrCreate(
    id: string,
    token: NfToken,
    newValue: string | null,
    oldValue: string | null
  ): Promise<UriUpdateAction> {
    if (!this.context) throw new Error('context is not defined');
    let uriUpdateAction = await this.get(UriUpdateAction, id);

    if (!uriUpdateAction) {
      uriUpdateAction = createUriUpdateActions({
        id,
        token,
        newValue,
        oldValue
      });
    }

    this.add(uriUpdateAction);

    return uriUpdateAction;
  }
}
