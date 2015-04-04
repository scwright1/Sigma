import Ember from 'ember';

export function lastName() {
    if(Ember.$.cookie('user') !== "undefined") {
        var userData = JSON.parse(Ember.$.cookie('user'));
        return new Ember.Handlebars.SafeString("<span class='cap'>"+userData.lastname+"</span>");
    }
}

export default Ember.Handlebars.makeBoundHelper(lastName);
