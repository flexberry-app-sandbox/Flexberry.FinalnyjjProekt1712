import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номерДок: DS.attr('number'),
  отправлено: DS.attr('boolean', { defaultValue: false }),
  подписано: DS.attr('boolean', { defaultValue: false }),
  дирПерсонала: DS.belongsTo('i-i-s-finalnyjj-proekt1712-дир-персонала', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-finalnyjj-proekt1712-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-согласие.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-согласие.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  отправлено: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-согласие.validations.отправлено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подписано: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-согласие.validations.подписано.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дирПерсонала: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-согласие.validations.дирПерсонала.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-согласие.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СогласиеE', 'i-i-s-finalnyjj-proekt1712-согласие', {
    номерДок: attr('Номер документа', { index: 0 }),
    дата: attr('Дата составления', { index: 1 }),
    подписано: attr('Подписано', { index: 2 }),
    отправлено: attr('Отправлено', { index: 3 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-proekt1712-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фамилия' }),
    дирПерсонала: belongsTo('i-i-s-finalnyjj-proekt1712-дир-персонала', 'Директор по персоналу', {
      код: attr('Код', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'код' })
  });

  modelClass.defineProjection('СогласиеL', 'i-i-s-finalnyjj-proekt1712-согласие', {
    номерДок: attr('Номер документа', { index: 0 }),
    дата: attr('Дата составления', { index: 1 }),
    подписано: attr('Подписано', { index: 2 }),
    отправлено: attr('Отправлено', { index: 3 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-proekt1712-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 })
    }, { index: -1, hidden: true }),
    дирПерсонала: belongsTo('i-i-s-finalnyjj-proekt1712-дир-персонала', 'Код', {
      код: attr('Код', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
