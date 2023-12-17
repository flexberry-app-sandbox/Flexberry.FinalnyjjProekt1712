import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFinalnyjj_proekt1712ГрафикиОтпускаLForm from './forms/i-i-s-finalnyjj-proekt1712-графики-отпуска-l';
import IISFinalnyjj_proekt1712ДирПерсоналаLForm from './forms/i-i-s-finalnyjj-proekt1712-дир-персонала-l';
import IISFinalnyjj_proekt1712ДолжностиLForm from './forms/i-i-s-finalnyjj-proekt1712-должности-l';
import IISFinalnyjj_proekt1712ОтделыLForm from './forms/i-i-s-finalnyjj-proekt1712-отделы-l';
import IISFinalnyjj_proekt1712РасчетныйЛистLForm from './forms/i-i-s-finalnyjj-proekt1712-расчетный-лист-l';
import IISFinalnyjj_proekt1712СогласиеLForm from './forms/i-i-s-finalnyjj-proekt1712-согласие-l';
import IISFinalnyjj_proekt1712СотрудникиLForm from './forms/i-i-s-finalnyjj-proekt1712-сотрудники-l';
import IISFinalnyjj_proekt1712ГрафикиОтпускаEForm from './forms/i-i-s-finalnyjj-proekt1712-графики-отпуска-e';
import IISFinalnyjj_proekt1712ДирПерсоналаEForm from './forms/i-i-s-finalnyjj-proekt1712-дир-персонала-e';
import IISFinalnyjj_proekt1712ДолжностиEForm from './forms/i-i-s-finalnyjj-proekt1712-должности-e';
import IISFinalnyjj_proekt1712ОтделыEForm from './forms/i-i-s-finalnyjj-proekt1712-отделы-e';
import IISFinalnyjj_proekt1712РасчетныйЛистEForm from './forms/i-i-s-finalnyjj-proekt1712-расчетный-лист-e';
import IISFinalnyjj_proekt1712СогласиеEForm from './forms/i-i-s-finalnyjj-proekt1712-согласие-e';
import IISFinalnyjj_proekt1712СотрудникиEForm from './forms/i-i-s-finalnyjj-proekt1712-сотрудники-e';
import IISFinalnyjj_proekt1712ГрафикиОтпускаModel from './models/i-i-s-finalnyjj-proekt1712-графики-отпуска';
import IISFinalnyjj_proekt1712ДирПерсоналаModel from './models/i-i-s-finalnyjj-proekt1712-дир-персонала';
import IISFinalnyjj_proekt1712ДолжностиModel from './models/i-i-s-finalnyjj-proekt1712-должности';
import IISFinalnyjj_proekt1712ОтделыModel from './models/i-i-s-finalnyjj-proekt1712-отделы';
import IISFinalnyjj_proekt1712РасчетныйЛистModel from './models/i-i-s-finalnyjj-proekt1712-расчетный-лист';
import IISFinalnyjj_proekt1712СогласиеModel from './models/i-i-s-finalnyjj-proekt1712-согласие';
import IISFinalnyjj_proekt1712СоставРасчетаModel from './models/i-i-s-finalnyjj-proekt1712-состав-расчета';
import IISFinalnyjj_proekt1712СотрудникиModel from './models/i-i-s-finalnyjj-proekt1712-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-finalnyjj-proekt1712-графики-отпуска': IISFinalnyjj_proekt1712ГрафикиОтпускаModel,
    'i-i-s-finalnyjj-proekt1712-дир-персонала': IISFinalnyjj_proekt1712ДирПерсоналаModel,
    'i-i-s-finalnyjj-proekt1712-должности': IISFinalnyjj_proekt1712ДолжностиModel,
    'i-i-s-finalnyjj-proekt1712-отделы': IISFinalnyjj_proekt1712ОтделыModel,
    'i-i-s-finalnyjj-proekt1712-расчетный-лист': IISFinalnyjj_proekt1712РасчетныйЛистModel,
    'i-i-s-finalnyjj-proekt1712-согласие': IISFinalnyjj_proekt1712СогласиеModel,
    'i-i-s-finalnyjj-proekt1712-состав-расчета': IISFinalnyjj_proekt1712СоставРасчетаModel,
    'i-i-s-finalnyjj-proekt1712-сотрудники': IISFinalnyjj_proekt1712СотрудникиModel
  },

  'application-name': 'Модуль КЭДО',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Модуль КЭДО',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Модуль КЭДО',
          title: 'Модуль КЭДО'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'кадровые-документы': {
          caption: 'Кадровые документы',
          title: 'Кадровые документы',
          'i-i-s-finalnyjj-proekt1712-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-finalnyjj-proekt1712-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-finalnyjj-proekt1712-графики-отпуска-l': {
            caption: 'Графики отпуска',
            title: ''
          },
          'i-i-s-finalnyjj-proekt1712-отделы-l': {
            caption: 'Отделы',
            title: ''
          },
          'i-i-s-finalnyjj-proekt1712-согласие-l': {
            caption: 'Согласие',
            title: ''
          },
          'i-i-s-finalnyjj-proekt1712-дир-персонала-l': {
            caption: 'Дир персонала',
            title: ''
          }
        },
        'зарплатные-документы': {
          caption: 'Зарплатные документы',
          title: 'Зарплатные документы',
          'i-i-s-finalnyjj-proekt1712-расчетный-лист-l': {
            caption: 'Расчетный лист',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-finalnyjj-proekt1712-графики-отпуска-l': IISFinalnyjj_proekt1712ГрафикиОтпускаLForm,
    'i-i-s-finalnyjj-proekt1712-дир-персонала-l': IISFinalnyjj_proekt1712ДирПерсоналаLForm,
    'i-i-s-finalnyjj-proekt1712-должности-l': IISFinalnyjj_proekt1712ДолжностиLForm,
    'i-i-s-finalnyjj-proekt1712-отделы-l': IISFinalnyjj_proekt1712ОтделыLForm,
    'i-i-s-finalnyjj-proekt1712-расчетный-лист-l': IISFinalnyjj_proekt1712РасчетныйЛистLForm,
    'i-i-s-finalnyjj-proekt1712-согласие-l': IISFinalnyjj_proekt1712СогласиеLForm,
    'i-i-s-finalnyjj-proekt1712-сотрудники-l': IISFinalnyjj_proekt1712СотрудникиLForm,
    'i-i-s-finalnyjj-proekt1712-графики-отпуска-e': IISFinalnyjj_proekt1712ГрафикиОтпускаEForm,
    'i-i-s-finalnyjj-proekt1712-дир-персонала-e': IISFinalnyjj_proekt1712ДирПерсоналаEForm,
    'i-i-s-finalnyjj-proekt1712-должности-e': IISFinalnyjj_proekt1712ДолжностиEForm,
    'i-i-s-finalnyjj-proekt1712-отделы-e': IISFinalnyjj_proekt1712ОтделыEForm,
    'i-i-s-finalnyjj-proekt1712-расчетный-лист-e': IISFinalnyjj_proekt1712РасчетныйЛистEForm,
    'i-i-s-finalnyjj-proekt1712-согласие-e': IISFinalnyjj_proekt1712СогласиеEForm,
    'i-i-s-finalnyjj-proekt1712-сотрудники-e': IISFinalnyjj_proekt1712СотрудникиEForm
  },

});

export default translations;
