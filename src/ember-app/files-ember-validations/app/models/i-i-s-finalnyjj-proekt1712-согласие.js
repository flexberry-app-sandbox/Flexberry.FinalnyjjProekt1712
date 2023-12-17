import {
  defineNamespace,
  defineProjections,
  Model as СогласиеMixin
} from '../mixins/regenerated/models/i-i-s-finalnyjj-proekt1712-согласие';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СогласиеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
