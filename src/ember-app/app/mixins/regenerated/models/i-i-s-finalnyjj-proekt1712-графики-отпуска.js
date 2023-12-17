import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаНач: DS.attr('date'),
  колДней: DS.attr('number'),
  номерДок: DS.attr('number'),
  отправлено: DS.attr('boolean', { defaultValue: false }),
  дирПерсонала: DS.belongsTo('i-i-s-finalnyjj-proekt1712-дир-персонала', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-finalnyjj-proekt1712-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-графики-отпуска.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНач: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-графики-отпуска.validations.датаНач.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  колДней: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-графики-отпуска.validations.колДней.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-графики-отпуска.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отправлено: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-графики-отпуска.validations.отправлено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дирПерсонала: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-графики-отпуска.validations.дирПерсонала.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-графики-отпуска.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикиОтпускаE', 'i-i-s-finalnyjj-proekt1712-графики-отпуска', {
    номерДок: attr('Номер док', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    отправлено: attr('Отправлено', { index: 2 }),
    датаНач: attr('Дата нач', { index: 3 }),
    колДней: attr('Кол дней', { index: 4 }),
    дирПерсонала: belongsTo('i-i-s-finalnyjj-proekt1712-дир-персонала', 'Дир персонала', {
      код: attr('Код', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'код' }),
    сотрудники: belongsTo('i-i-s-finalnyjj-proekt1712-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('ГрафикиОтпускаL', 'i-i-s-finalnyjj-proekt1712-графики-отпуска', {
    номерДок: attr('Номер док', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    отправлено: attr('Отправлено', { index: 2 }),
    датаНач: attr('Дата нач', { index: 3 }),
    колДней: attr('Кол дней', { index: 4 }),
    дирПерсонала: belongsTo('i-i-s-finalnyjj-proekt1712-дир-персонала', 'Код', {
      код: attr('Код', { index: 5 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-finalnyjj-proekt1712-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
