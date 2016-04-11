import Ember from 'ember';
import TrelloAuthInitializer from '../../../initializers/initialize';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | trello auth', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  TrelloAuthInitializer.initialize(application);
  // you would normally confirm the results of the initializer here
  assert.ok(true);
});

test( 'Trello Board model is registered on container', function( assert ) {
  assert.equal( typeof application.__container__._options['model:board'], 'object' );
  assert.equal( application.__container__._options['model:board'].instantiate, undefined );
});