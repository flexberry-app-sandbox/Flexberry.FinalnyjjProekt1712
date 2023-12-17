import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.кадровые-документы.caption'),
          title: i18n.t('forms.application.sitemap.кадровые-документы.title'),
          children: [{
            link: 'i-i-s-finalnyjj-proekt1712-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-proekt1712-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-proekt1712-сотрудники-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-finalnyjj-proekt1712-должности-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-proekt1712-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-proekt1712-должности-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-finalnyjj-proekt1712-графики-отпуска-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-proekt1712-графики-отпуска-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-proekt1712-графики-отпуска-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-finalnyjj-proekt1712-отделы-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-proekt1712-отделы-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-proekt1712-отделы-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-finalnyjj-proekt1712-согласие-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-proekt1712-согласие-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-proekt1712-согласие-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-finalnyjj-proekt1712-дир-персонала-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-proekt1712-дир-персонала-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-proekt1712-дир-персонала-l.title'),
            icon: 'calendar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.зарплатные-документы.caption'),
          title: i18n.t('forms.application.sitemap.зарплатные-документы.title'),
          children: [{
            link: 'i-i-s-finalnyjj-proekt1712-расчетный-лист-l',
            caption: i18n.t('forms.application.sitemap.зарплатные-документы.i-i-s-finalnyjj-proekt1712-расчетный-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.зарплатные-документы.i-i-s-finalnyjj-proekt1712-расчетный-лист-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})