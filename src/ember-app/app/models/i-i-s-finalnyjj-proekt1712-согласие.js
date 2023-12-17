import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СогласиеMixin
} from '../mixins/regenerated/models/i-i-s-finalnyjj-proekt1712-согласие';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СогласиеMixin, Validations, {
});

defineProjections(Model);

export default Model;
