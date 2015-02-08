import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

var Signup = Ember.ObjectController.extend(LoginControllerMixin, {
    actions: {
        signupFacebook: function() {
            var _this = this;

            this.get('session').authenticate(
                'simple-auth-authenticator:torii',
                'facebook-oauth2'
            ).then(function() {
                var sessionCode = _this.get('session.authorizationCode');
                Ember.$.ajax({
                    url: '/api/accounts',
                    data: {'token': sessionCode,'provider':'facebook','redirect_uri':window.location.href},
                    type: 'post'
                }).fail(function(error) {
                    console.log('ERROR: ' + error);
                    _this.get('session').invalidate();
                }).done(function(data) {
                    var userCookie = {
                        'firstname': data.first_name,
                        'lastname': data.last_name,
                        'uid': data.account_uid,
                        'gender': data.gender
                    };
                    Ember.$.cookie('user', JSON.stringify(userCookie));
                    _this.transitionToRoute('/me');
                });
            }, function(error) {
                console.log('ERROR: ' + error);
            });
        }
    }
});

export default Signup;