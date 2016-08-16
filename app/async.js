exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

    console.log(value);

    var p1 = new Promise(function(resolve, reject) {
      resolve(value);
    }).then(function(value){
      return value;
    });

    return p1;


  },

  manipulateRemoteData: function(url) {

    var request = new Promise(function(resolve, reject){
      var client = new XMLHttpRequest();
      var uri = url;

      client.open('GET', uri);
      client.send();

      client.onload = function(){
        if (this.status >= 200 && this.status < 300) {
          resolve(this.response);
        } else {
          reject(this.statusText);
        }
      };
      client.onerror = function () {
        reject(this.statusText);
      };

    }).then(function(data){

      var data = JSON.parse(data);
      var people = data.people;
      var names = [];
      people.forEach(function(value, index, array){
        names.push(value.name);
      });
      names.sort();
      return names;
      
    });

    return request;


  }
};
