import {
  defineNamespace,
  defineProjections,
  Model as СоставРасчетаMixin
} from '../mixins/regenerated/models/i-i-s-finalnyjj-proekt1712-состав-расчета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставРасчетаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
