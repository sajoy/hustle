Hustle.ApplicationController = Ember.Controller.extend({
  socialMediaShow: false,
  actions: {
    showSocialMedia: function() {
      this.set('socialMediaShow', true)
    }



  }

});
