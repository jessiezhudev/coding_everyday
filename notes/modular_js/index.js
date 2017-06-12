let people = [];
let template = $('#people-template').html();
$('#peopleModule').find('button').on('click', function(){
  people.push($('#peopleModule').find('input').val());
  $('#peopleModule').find('input').val('');
  let data = {
    people: people
  };
  $('#peopleModule').find('ul').html(Mustache.render(template, data));
});

// 使用 delegate() 方法的事件处理程序适用于当前或未来的元素（比如由脚本创建的新元素）。

$('#peopleModule').find('ul').delegate('i.del', 'click', function(e){
  let $remove = $(e.target).closest('li');
  let i = $('#peopleModule').find('ul').find('li').index($remove);
  $remove.remove();
  people.splice(i, 1);
});

let people = {
  people: [],
  init: function(){
    this.cacheDom();
    this.bindEvents();
    this.render();
  },
  cacheDom: function(){
    this.$el = $('#peopleModule');
    this.$ul = this.$el.find('ul');
    this.$input = this.$el.find('input');
    this.$button = this.$el.find('button');
    this.template = this.$el.html();
  },
  bindEvents: function(){
    this.$button.on('click', this.addPerson.bind(this));
    this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this))
  },
  render(){
    let data = {
      peope: this.people
    };
    this.$ul.html(Mustache.render(template, data))
  },
  addPerson: function(){
    this.people.push(this.$input.val());
  },
  deletePerson: function(){

  }

}





let people = {
  people: [],
  init: function(){
    this.cacheDom();
    this.bindEvents();
    this.render();
  },
  cacheDom: function(){
    this.$el = $('#peopleModule');
    this.$button = this.$el.find('button');
    this.$input = this.$el.find('input');
    this.$ul = this.$el.find('ul');
    this.template = this.$el.find('#people-template').html();
  },
  bindEvents: function(){
    this.$button.on('click', this.addPerson.bind(this));
    this.$ul.delegate('i.del','click',this.deletePerson.bind(this));
  },
  render: function(){
    let data = {
      people: this.people
    };
    this.$ul.html(Mustache.render(this.template, data));
  },
  addPerson: function(){
    this.people.push(this.$input.val());
    this.render();
    this.$input.val('');
  },
  deletePerson: function(e){
    let $remove = $(e.target).closest('li');
    let i = this.$ul.find('li').index($remove);
    this.people.splice(i, 1);
    this.render();
  }
};
people.init();

// var people = {
//     people: [],
//     init: function() {
//         this.cacheDom();
//         this.bindEvents();
//         this.render();
//     },
//     cacheDom: function() {
//         this.$el = $('#peopleModule');
//         this.$button = this.$el.find('button');
//         this.$input = this.$el.find('input');
//         this.$ul = this.$el.find('ul');
//         this.template = this.$el.find('#people-template').html();
//     },
//     bindEvents: function() {
//         this.$button.on('click', this.addPerson.bind(this));
//         this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
//     },
//     render: function() {
//        var data = {
//            people: this.people,
//        };
//        this.$ul.html(Mustache.render(this.template, data));
//     },
//     addPerson: function() {
//         this.people.push(this.$input.val());
//         this.render();
//         this.$input.val('');
//     },
//     deletePerson: function(event) {
//         var $remove = $(event.target).closest('li');
//         var i = this.$ul.find('li').index($remove);
//
//         this.people.splice(i, 1);
//         this.render();
//     }
//
// };
//
// people.init();

// 对象字面量方法
var myModule = {
  name: 'jessie',
  age: 25,
  sayName: function(){
    alert(this.name)
  },
  setName: function(newName){
    this.name = newName
  }
}
