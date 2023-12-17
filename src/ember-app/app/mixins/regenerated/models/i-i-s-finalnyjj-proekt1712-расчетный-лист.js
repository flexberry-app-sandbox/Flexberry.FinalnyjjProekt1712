import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  итогоКПеречи: DS.attr('decimal'),
  итогоНачис: DS.attr('decimal'),
  итогоУдержано: DS.attr('decimal'),
  номерДок: DS.attr('number'),
  отправлено: DS.attr('boolean', { defaultValue: false }),
  дирПерсонала: DS.belongsTo('i-i-s-finalnyjj-proekt1712-дир-персонала', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-finalnyjj-proekt1712-сотрудники', { inverse: null, async: false }),
  составРасчета: DS.hasMany('i-i-s-finalnyjj-proekt1712-состав-расчета', { inverse: 'расчетныйЛист', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-расчетный-лист.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  итогоКПеречи: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-расчетный-лист.validations.итогоКПеречи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  итогоНачис: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-расчетный-лист.validations.итогоНачис.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  итогоУдержано: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-расчетный-лист.validations.итогоУдержано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-расчетный-лист.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отправлено: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-расчетный-лист.validations.отправлено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дирПерсонала: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-расчетный-лист.validations.дирПерсонала.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-расчетный-лист.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составРасчета: {
    descriptionKey: 'models.i-i-s-finalnyjj-proekt1712-расчетный-лист.validations.составРасчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетныйЛистE', 'i-i-s-finalnyjj-proekt1712-расчетный-лист', {
    номерДок: attr('Номер документа', { index: 0 }),
    дата: attr('Дата составления', { index: 1 }),
    отправлено: attr('Отправлено', { index: 2 }),
    итогоНачис: attr('Итого начислено', { index: 3 }),
    итогоУдержано: attr('Итого удержано', { index: 4 }),
    итогоКПеречи: attr('Итого к перечислению', { index: 5 }),
    дирПерсонала: belongsTo('i-i-s-finalnyjj-proekt1712-дир-персонала', 'Директор по персоналу', {
      код: attr('Код', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'код' }),
    сотрудники: belongsTo('i-i-s-finalnyjj-proekt1712-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'фамилия' }),
    составРасчета: hasMany('i-i-s-finalnyjj-proekt1712-состав-расчета', 'Состав расчета', {
      тип: attr('Тип', { index: 0 }),
      наименование: attr('Наименование', { index: 1 }),
      сумма: attr('Сумма', { index: 2 }),
      ндфл: attr('НДФЛ', { index: 3 }),
      взносы: attr('Страховые взносы', { index: 4 }),
      всего: attr('Всего', { index: 5 })
    })
  });

  modelClass.defineProjection('РасчетныйЛистL', 'i-i-s-finalnyjj-proekt1712-расчетный-лист', {
    номерДок: attr('Номер док', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    отправлено: attr('Отправлено', { index: 2 }),
    итогоНачис: attr('Итого начис', { index: 3 }),
    итогоУдержано: attr('Итого удержано', { index: 4 }),
    итогоКПеречи: attr('Итого к перечи', { index: 5 }),
    дирПерсонала: belongsTo('i-i-s-finalnyjj-proekt1712-дир-персонала', 'Код', {
      код: attr('Код', { index: 6 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-finalnyjj-proekt1712-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
