import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-finalnyjj-proekt1712-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-дир-персонала.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-дир-персонала.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДирПерсоналаE', 'i-i-s-finalnyjj-proekt1712-дир-персонала', {
    код: attr('Код директора', { index: 0 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-proekt1712-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('ДирПерсоналаL', 'i-i-s-finalnyjj-proekt1712-дир-персонала', {
    код: attr('Код директора', { index: 0 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-proekt1712-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
