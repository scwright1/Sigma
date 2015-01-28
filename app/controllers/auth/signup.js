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
                    data: {'token': sessionCode,'provider':'facebook'},
                    type: 'post'
                }).then(function() {
                    _this.transitionToRoute('/');
                });
            }, function(error) {
                alert('ERROR: ' + error);
            });
        }
    }
});

export default Signup;

//issue with the redirect_uri, needs to be corrected in the code -> access_token conversion
//https://www.facebook.com/dialog/oauth?response_type=code&client_id=1604699376417639&redirect_uri=http%3A%2F%2Flocalhost%3A4200&display=popup&scope=email