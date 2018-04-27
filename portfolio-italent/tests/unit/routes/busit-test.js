import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | busit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:busit');
    assert.ok(route);
  });
});
