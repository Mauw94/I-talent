import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr(),
    location: DS.attr(),
    name: DS.attr(),
    description: DS.attr()
});
