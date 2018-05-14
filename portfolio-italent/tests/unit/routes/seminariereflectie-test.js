import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | seminariereflectie', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:seminariereflectie');
    assert.ok(route);
  });
});
