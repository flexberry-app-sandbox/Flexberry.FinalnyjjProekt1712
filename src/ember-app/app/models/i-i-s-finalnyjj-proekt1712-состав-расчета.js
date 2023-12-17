import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СоставРасчетаMixin
} from '../mixins/regenerated/models/i-i-s-finalnyjj-proekt1712-состав-расчета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставРасчетаMixin, Validations, {
});

defineProjections(Model);

export default Model;
