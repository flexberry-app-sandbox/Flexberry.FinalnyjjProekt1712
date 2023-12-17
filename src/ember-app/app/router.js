import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-finalnyjj-proekt1712-графики-отпуска-l');
  this.route('i-i-s-finalnyjj-proekt1712-графики-отпуска-e',
  { path: 'i-i-s-finalnyjj-proekt1712-графики-отпуска-e/:id' });
  this.route('i-i-s-finalnyjj-proekt1712-графики-отпуска-e.new',
  { path: 'i-i-s-finalnyjj-proekt1712-графики-отпуска-e/new' });
  this.route('i-i-s-finalnyjj-proekt1712-дир-персонала-l');
  this.route('i-i-s-finalnyjj-proekt1712-дир-персонала-e',
  { path: 'i-i-s-finalnyjj-proekt1712-дир-персонала-e/:id' });
  this.route('i-i-s-finalnyjj-proekt1712-дир-персонала-e.new',
  { path: 'i-i-s-finalnyjj-proekt1712-дир-персонала-e/new' });
  this.route('i-i-s-finalnyjj-proekt1712-должности-l');
  this.route('i-i-s-finalnyjj-proekt1712-должности-e',
  { path: 'i-i-s-finalnyjj-proekt1712-должности-e/:id' });
  this.route('i-i-s-finalnyjj-proekt1712-должности-e.new',
  { path: 'i-i-s-finalnyjj-proekt1712-должности-e/new' });
  this.route('i-i-s-finalnyjj-proekt1712-отделы-l');
  this.route('i-i-s-finalnyjj-proekt1712-отделы-e',
  { path: 'i-i-s-finalnyjj-proekt1712-отделы-e/:id' });
  this.route('i-i-s-finalnyjj-proekt1712-отделы-e.new',
  { path: 'i-i-s-finalnyjj-proekt1712-отделы-e/new' });
  this.route('i-i-s-finalnyjj-proekt1712-расчетный-лист-l');
  this.route('i-i-s-finalnyjj-proekt1712-расчетный-лист-e',
  { path: 'i-i-s-finalnyjj-proekt1712-расчетный-лист-e/:id' });
  this.route('i-i-s-finalnyjj-proekt1712-расчетный-лист-e.new',
  { path: 'i-i-s-finalnyjj-proekt1712-расчетный-лист-e/new' });
  this.route('i-i-s-finalnyjj-proekt1712-согласие-l');
  this.route('i-i-s-finalnyjj-proekt1712-согласие-e',
  { path: 'i-i-s-finalnyjj-proekt1712-согласие-e/:id' });
  this.route('i-i-s-finalnyjj-proekt1712-согласие-e.new',
  { path: 'i-i-s-finalnyjj-proekt1712-согласие-e/new' });
  this.route('i-i-s-finalnyjj-proekt1712-сотрудники-l');
  this.route('i-i-s-finalnyjj-proekt1712-сотрудники-e',
  { path: 'i-i-s-finalnyjj-proekt1712-сотрудники-e/:id' });
  this.route('i-i-s-finalnyjj-proekt1712-сотрудники-e.new',
  { path: 'i-i-s-finalnyjj-proekt1712-сотрудники-e/new' });
});

export default Router;
