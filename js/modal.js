var i;
var firstColumnContent = [];
var secondColumnContent = [];
var thirdColumnContent = [];
var fourthColumnContent = [];

var firstColumnId = [];
var secondColumnId = [];
var thirdColumnId = [];
var fourthColumnId = [];

var firstColumn = document.getElementById('column1');
var secondColumn = document.getElementById('column2');
var thirdColumn = document.getElementById('column3');
var fourthColumn = document.getElementById('column4');

for (var i = 0, len = firstColumn.children.length; i < len; i++)
{
    (function(index){

      firstColumn.children[i].onclick = function(){
        firstColumnId[i] = this.getAttribute('id');
        if (firstColumnId[i] === firstColumnId[index])
          {
            document.getElementById('myModal').style.display = 'block';
            document.getElementById('tester').innerHTML = firstColumnContent[index];
          }
      }    
    })(i);
}

for (var i = 0, len = secondColumn.children.length; i < len; i++)
{
    (function(index){

      secondColumn.children[i].onclick = function(){
        secondColumnId[i] = this.getAttribute('id');
        if (secondColumnId[i] === secondColumnId[index])
          {
            document.getElementById('myModal').style.display = 'block';
            document.getElementById('tester').innerHTML = secondColumnContent[index];
          }
      }    
    })(i);
}

for (var i = 0, len = thirdColumn.children.length; i < len; i++)
{
    (function(index){

      thirdColumn.children[i].onclick = function(){
        thirdColumnId[i] = this.getAttribute('id');
        if (thirdColumnId[i] === thirdColumnId[index])
          {
            document.getElementById('myModal').style.display = 'block';
            document.getElementById('tester').innerHTML = thirdColumnContent[index];
          }
      }    
    })(i);
}

for (var i = 0, len = fourthColumn.children.length; i < len; i++)
{
    (function(index){

      fourthColumn.children[i].onclick = function(){
        fourthColumnId[i] = this.getAttribute('id');
        if (fourthColumnId[i] === fourthColumnId[index])
          {
            document.getElementById('myModal').style.display = 'block';
            document.getElementById('tester').innerHTML = fourthColumnContent[index];
          }
      }    
    })(i);
}


function modal(data){

  for(i=0;i<data.column1.length;i++)
  {
    firstColumnContent[i] = '<div class="close-modal" data-dismiss="modal">';
    firstColumnContent[i] += '<div class="lr">';
    firstColumnContent[i] += '<div class="rl">';
    firstColumnContent[i] += '</div>';
    firstColumnContent[i] += '</div>';
    firstColumnContent[i] += '</div>';
    firstColumnContent[i] += '<div class="container">';
    firstColumnContent[i] += '<div class="row">';
    firstColumnContent[i] += '<div class="col-lg-8 col-lg-offset-2">';
    firstColumnContent[i] += '<div class="modal-body">';
    firstColumnContent[i] += '<!-- Project Details Go Here -->';
    firstColumnContent[i] += '<h2 class="modal-heading">' + data.column1[i].name + '</h2>';
    firstColumnContent[i] += '<p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>';
    firstColumnContent[i] += '<img class="img-responsive img-centered" src="img/products/filming.jpeg" alt="">';
    firstColumnContent[i] += '<p>Duis porta dui lacus. Fusce rutrum commodo ex, a ornare nibh rhoncus vel. Vivamus sit amet sem sit amet mauris ornare vulputate. Phasellus eu varius felis. Proin ac interdum mauris, nec posuere dui. Nunc lectus mauris, imperdiet molestie interdum non, rutrum sit amet nisi. Donec aliquet ultrices mattis. In lacinia vel odio a tincidunt. Fusce augue tellus, pulvinar non ante vel, blandit aliquam lorem. Proin felis augue, cursus a neque et, vulputate blandit erat.</p>';
    firstColumnContent[i] += '<h3 class="modal-heading">Executive Team</h3>';
    firstColumnContent[i] += '<div class="exec-team">Faculty Staff: </div>'
    firstColumnContent[i] += '<div class="exec-team">President: </div>';
    firstColumnContent[i] += '<button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>';
    firstColumnContent[i] += '</div>';
    firstColumnContent[i] += '</div>';
    firstColumnContent[i] += '</div>';
    firstColumnContent[i] += '</div>';
    firstColumnId[i] = data.column1[i].id;
  }

  for(i=0;i<data.column2.length;i++)
  {
    secondColumnContent[i] = '<div class="close-modal" data-dismiss="modal">';
    secondColumnContent[i] += '<div class="lr">';
    secondColumnContent[i] += '<div class="rl">';
    secondColumnContent[i] += '</div>';
    secondColumnContent[i] += '</div>';
    secondColumnContent[i] += '</div>';
    secondColumnContent[i] += '<div class="container">';
    secondColumnContent[i] += '<div class="row">';
    secondColumnContent[i] += '<div class="col-lg-8 col-lg-offset-2">';
    secondColumnContent[i] += '<div class="modal-body">';
    secondColumnContent[i] += '<!-- Project Details Go Here -->';
    secondColumnContent[i] += '<h2 class="modal-heading">' + data.column2[i].name + '</h2>';
    secondColumnContent[i] += '<p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>';
    secondColumnContent[i] += '<img class="img-responsive img-centered" src="img/products/filming.jpeg" alt="">';
    secondColumnContent[i] += '<p>Duis porta dui lacus. Fusce rutrum commodo ex, a ornare nibh rhoncus vel. Vivamus sit amet sem sit amet mauris ornare vulputate. Phasellus eu varius felis. Proin ac interdum mauris, nec posuere dui. Nunc lectus mauris, imperdiet molestie interdum non, rutrum sit amet nisi. Donec aliquet ultrices mattis. In lacinia vel odio a tincidunt. Fusce augue tellus, pulvinar non ante vel, blandit aliquam lorem. Proin felis augue, cursus a neque et, vulputate blandit erat.</p>';
    secondColumnContent[i] += '<h3 class="modal-heading">Executive Team</h3>';
    secondColumnContent[i] += '<div class="exec-team">Faculty Staff: </div>'
    secondColumnContent[i] += '<div class="exec-team">President: </div>';
    secondColumnContent[i] += '<button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>';
    secondColumnContent[i] += '</div>';
    secondColumnContent[i] += '</div>';
    secondColumnContent[i] += '</div>';
    secondColumnContent[i] += '</div>';
    secondColumnId[i] = data.column2[i].id;
  }

  for(i=0;i<data.column3.length;i++)
  {
    thirdColumnContent[i] = '<div class="close-modal" data-dismiss="modal">';
    thirdColumnContent[i] += '<div class="lr">';
    thirdColumnContent[i] += '<div class="rl">';
    thirdColumnContent[i] += '</div>';
    thirdColumnContent[i] += '</div>';
    thirdColumnContent[i] += '</div>';
    thirdColumnContent[i] += '<div class="container">';
    thirdColumnContent[i] += '<div class="row">';
    thirdColumnContent[i] += '<div class="col-lg-8 col-lg-offset-2">';
    thirdColumnContent[i] += '<div class="modal-body">';
    thirdColumnContent[i] += '<!-- Project Details Go Here -->';
    thirdColumnContent[i] += '<h2 class="modal-heading">' + data.column3[i].name + '</h2>';
    thirdColumnContent[i] += '<p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>';
    thirdColumnContent[i] += '<img class="img-responsive img-centered" src="img/products/filming.jpeg" alt="">';
    thirdColumnContent[i] += '<p>Duis porta dui lacus. Fusce rutrum commodo ex, a ornare nibh rhoncus vel. Vivamus sit amet sem sit amet mauris ornare vulputate. Phasellus eu varius felis. Proin ac interdum mauris, nec posuere dui. Nunc lectus mauris, imperdiet molestie interdum non, rutrum sit amet nisi. Donec aliquet ultrices mattis. In lacinia vel odio a tincidunt. Fusce augue tellus, pulvinar non ante vel, blandit aliquam lorem. Proin felis augue, cursus a neque et, vulputate blandit erat.</p>';
    thirdColumnContent[i] += '<h3 class="modal-heading">Executive Team</h3>';
    thirdColumnContent[i] += '<div class="exec-team">Faculty Staff: </div>'
    thirdColumnContent[i] += '<div class="exec-team">President: </div>';
    thirdColumnContent[i] += '<button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>';
    thirdColumnContent[i] += '</div>';
    thirdColumnContent[i] += '</div>';
    thirdColumnContent[i] += '</div>';
    thirdColumnContent[i] += '</div>';
    thirdColumnId[i] = data.column3[i].id;
  }

  for(i=0;i<data.column4.length;i++)
  {
    fourthColumnContent[i] = '<div class="close-modal" data-dismiss="modal">';
    fourthColumnContent[i] += '<div class="lr">';
    fourthColumnContent[i] += '<div class="rl">';
    fourthColumnContent[i] += '</div>';
    fourthColumnContent[i] += '</div>';
    fourthColumnContent[i] += '</div>';
    fourthColumnContent[i] += '<div class="container">';
    fourthColumnContent[i] += '<div class="row">';
    fourthColumnContent[i] += '<div class="col-lg-8 col-lg-offset-2">';
    fourthColumnContent[i] += '<div class="modal-body">';
    fourthColumnContent[i] += '<!-- Project Details Go Here -->';
    fourthColumnContent[i] += '<h2 class="modal-heading">' + data.column4[i].name + '</h2>';
    fourthColumnContent[i] += '<p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>';
    fourthColumnContent[i] += '<img class="img-responsive img-centered" src="img/products/filming.jpeg" alt="">';
    fourthColumnContent[i] += '<p>Duis porta dui lacus. Fusce rutrum commodo ex, a ornare nibh rhoncus vel. Vivamus sit amet sem sit amet mauris ornare vulputate. Phasellus eu varius felis. Proin ac interdum mauris, nec posuere dui. Nunc lectus mauris, imperdiet molestie interdum non, rutrum sit amet nisi. Donec aliquet ultrices mattis. In lacinia vel odio a tincidunt. Fusce augue tellus, pulvinar non ante vel, blandit aliquam lorem. Proin felis augue, cursus a neque et, vulputate blandit erat.</p>';
    fourthColumnContent[i] += '<h3 class="modal-heading">Executive Team</h3>';
    fourthColumnContent[i] += '<div class="exec-team">Faculty Staff: </div>'
    fourthColumnContent[i] += '<div class="exec-team">President: </div>';
    fourthColumnContent[i] += '<button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>';
    fourthColumnContent[i] += '</div>';
    fourthColumnContent[i] += '</div>';
    fourthColumnContent[i] += '</div>';
    fourthColumnContent[i] += '</div>';
    fourthColumnId[i] = data.column4[i].id;
  }

}





