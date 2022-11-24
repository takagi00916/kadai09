var app = new Vue({
  el: '#app',
  data: {
      // レコメンド
    status: 1,
    answer1: '',
    answer2: '',
    result: '',
      // レコメンド
    place: {
      sappari:{
        1: '白菜キムチ',
        2: 'テールおじや',
      },
      gatturi:{
        1: 'ホルモン5種盛り',
        2: '和牛カルビ',
      },
    }
  },
 
  methods: {
    // レコメンド
   q1: function(area){
     this.answer1 = area;
     this.status = 2;
   },
   q2: function(name){
     this.answer2 = name;
     this.status = 3;
     this.result = this.place[this.answer1][this.answer2];
   },
   reset: function(){
     this.answer1 = '';
     this.answer2 = '';
     this.result = '';
     this.status = 1;
    },
    acordion_btn: {
      
    }
  }
});
