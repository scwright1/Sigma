import Ember from 'ember';
import ic from 'ic-ajax';

var Index = Ember.ObjectController.extend({
    actions: {
        fire: function() {
            var self=this;
            ic({
                url: '/api/email/send-participation-code',
                type: 'post',
                data: {'requester':self.get('email')},
                dataType: 'json'
            }).then(function(data) {
                if(data === true) {
                    self.set('codeGenerated', true);
                }
            });
        }
    }
});

export default Index;