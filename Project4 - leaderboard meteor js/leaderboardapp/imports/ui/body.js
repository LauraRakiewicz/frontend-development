import { Template } from 'meteor/templating'; 
import { People } from '../api/people.js';
import './body.html';
import './person.js';
import { ReactiveVar } from 'meteor/reactive-var';

Template.body.onCreated(function helloOnCreated() {
    this.ascending = new ReactiveVar(1);
    Template.instance().ascending.set(-1);
  });
  

Template.body.helpers({
    people() {
        return People.find({}, { sort: { rank: Template.instance().ascending.get() } });
      },
});

Template.body.events({

    'submit .form-register': function(event, template) {
        event.preventDefault();
        var text = event.target.username.value;
        var rank = parseInt(event.target.rank.value);

        // Insert person
        People.insert({
            text,
            rank,
            createdAt: new Date(), // current time
        });

        //   Clear form
        event.target.username.value = '';
        event.target.rank.value = '0';
    },

    'click .toggle-checked': function(event, template) {      
        ass= Template.instance().ascending.get();
        console.log(ass)
        if( ass == -1){
            Template.instance().ascending.set(1);
        }
        else{
            Template.instance().ascending.set(-1);
        }
    },
  });

