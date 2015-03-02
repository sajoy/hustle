Hustle.HomeController = Ember.Controller.extend({

  viewArray: ["baby-monster", "bloody-mary", "video-game", "high-five"],


  currentIndex: 0,
  storyZero: function() {
    return this.get('currentIndex') === 0;
  }.property('currentIndex'),

  storyOne: function() {
    return this.get('currentIndex') === 1;
  }.property('currentIndex'),

  storyTwo: function() {
    return this.get('currentIndex') === 2;
  }.property('currentIndex'),



  actions: {

    previous: function() {
      if (this.get('currentIndex') !== 0) {
        currentIndex = this.get('currentIndex');
        this.set('currentIndex', currentIndex - 1);
      } else {
        this.set('currentIndex', (this.viewArray.length - 1));
      }
    },
    next: function() {
      if (this.get('currentIndex') !== (this.viewArray.length - 1)) {
        currentIndex = this.get('currentIndex');
        this.set('currentIndex', currentIndex + 1);
      } else {
        this.set('currentIndex', 0);
      }
    }
  }

});
