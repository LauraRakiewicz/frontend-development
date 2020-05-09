import { Template } from 'meteor/templating';
import { People } from '../api/people.js';
import './person.html';
 
Template.person.events({
  

  'click .delete'() {
    People.remove(this._id);
  },

  'click .rankUp'() {
    rank = parseInt(this.rank)
    new_rank = rank + parseInt(1)

    People.update(this._id, {
        $set: { rank: new_rank},
    });
    console.log("up")
  },

  'click .rankDown'() {
        rank = parseInt(this.rank)
        new_rank = rank - parseInt(1)

        People.update(this._id, {
            $set: { rank: new_rank},
        });
        console.log("down")
    },

});

