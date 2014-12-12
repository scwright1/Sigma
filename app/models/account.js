import DS from 'ember-data';

export default DS.Model.extend({
   provider:    DS.attr('string'),
   provider_id: DS.attr('string'),
   email:       DS.attr('string'),
   password:    DS.attr('string'),
   fname:       DS.attr('string'),
   lname:       DS.attr('string')
});