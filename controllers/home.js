// Hustle.AboutController = Ember.Controller.extend({
//   carouselArray: Ember.A(['baby', 'mary', 'cat', 'game']),
//   currentIndex: 0,
//   selectedView: function() {
//     currentIndex = this.get('currentIndex');
//     template = this.carouselArray.get(currentIndex);
//     return Ember.map.create
//   }
//   actions: {
//
//
//
//   }
//
// });
//
//
// App.viewArray = Ember.A(["aTemplate", "bTemplate", "cTemplate"]);
//
// App.ApplicationController = Ember.ArrayController.extend({
//   currentIndex: 0,
//   //This will give the next/previous view
//   selectedView: function() {
//     currentIndex = this.get('currentIndex');
//     template = App.viewArray.get(currentIndex);
//     return Ember.View.create({
//       templateName: template,
//       classNames: ["carousel-element"],
//       didInsertElement: function() {
//         $(this.$()[0]).animate({
//           opacity: 1,
//           marginLeft: '+=100'
//         }, 500);
//       }
//     });
//   }.property('currentIndex'),
//   previous: function() {
//     if (this.get('currentIndex') !== 0) {
//       currentIndex = this.get('currentIndex');
//       this.set('currentIndex', currentIndex - 1);
//     }
//   },
//   next: function() {
//     if (this.get('currentIndex') !== (App.viewArray.length - 1)) {
//       currentIndex = this.get('currentIndex');
//       this.set('currentIndex', currentIndex + 1);
//     }
//   },
//
// });
