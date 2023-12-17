import {
  defineNamespace,
  defineProjections,
  Model as ДирПерсоналаMixin
} from '../mixins/regenerated/models/i-i-s-finalnyjj-proekt1712-дир-персонала';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДирПерсоналаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
