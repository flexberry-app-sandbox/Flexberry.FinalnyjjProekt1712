import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-finalnyjj-proekt1712-согласие', 'Unit | Model | i-i-s-finalnyjj-proekt1712-согласие', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-finalnyjj-proekt1712-графики-отпуска',
    'model:i-i-s-finalnyjj-proekt1712-дир-персонала',
    'model:i-i-s-finalnyjj-proekt1712-должности',
    'model:i-i-s-finalnyjj-proekt1712-отделы',
    'model:i-i-s-finalnyjj-proekt1712-расчетный-лист',
    'model:i-i-s-finalnyjj-proekt1712-согласие',
    'model:i-i-s-finalnyjj-proekt1712-состав-расчета',
    'model:i-i-s-finalnyjj-proekt1712-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
