import {
  defineNamespace,
  defineProjections,
  Model as ГрафикиОтпускаMixin
} from '../mixins/regenerated/models/i-i-s-finalnyjj-proekt1712-графики-отпуска';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГрафикиОтпускаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
