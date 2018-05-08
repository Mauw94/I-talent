import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('overview');
  this.route('selection');
  this.route('reflection');
  this.route('internationaliserings');
  this.route('seminars');
  this.route('wedstrijden');
  this.route('wedstrijdverslag');
  this.route('innovatie');
  this.route('busit');
  this.route('stage');
  this.route('wedstrijdreflectie');
});

export default Router;
