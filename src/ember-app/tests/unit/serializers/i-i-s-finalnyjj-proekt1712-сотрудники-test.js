import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-finalnyjj-proekt1712-сотрудники', 'Unit | Serializer | i-i-s-finalnyjj-proekt1712-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-finalnyjj-proekt1712-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-finalnyjj-proekt1712-тип',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
