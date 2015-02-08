import Ember from 'ember';

export function lastName() {
    var userData = JSON.parse(Ember.$.cookie('user'));
    return new Ember.Handlebars.SafeString("<span class='cap'>"+userData.lastname+"</span>");
}

export default Ember.Handlebars.makeBoundHelper(lastName);
