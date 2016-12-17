printData = function(students){
    var s = students;
    var tbodyEl = $('tbody');
    tbodyEl.html('');
    s.forEach(function(student) {
        tbodyEl.append('\
            <tr>\
                <td class="id">' + student.id + '</td>\
                <td><input type="text" class="name" value="' + student.name + '"></td>\
                <td><input type="text" class="college" value="' + student.college + '"></td>\
                <td>\
                    <button class="update-button">UPDATE/PUT</button>\
                    <button class="delete-button">DELETE</button>\
                </td>\
            </tr>\
        ');
    });
};
getData = function(){
    var self = this;
    self.response = [];
    jQuery.ajax({
        url: '/students',
        contentType: 'application/json',
        success: function(response) {
            printData(response.students);
            self.response = response.students;
        }
    });
    console.log(self.response);
};

deleteData = function(a){
    var id = a;
    var self = this;
    self.response = '';
    jQuery.ajax({
        url: '/students/' + id,
        method: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            self.response = response;
            $('#get-button').click();
        }
    });
    console.log(self.respose);
};
updateDataHelper = function(a, b){
  jQuery.ajax({
      url: '/students',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ name: a, college : b}),
      success: function(response) {
          console.log(response);
          return response;
      }
  });
}
updateData = function(a, b){
    updateDataHelper(a.val(), b.val());
    a.val('');
    b.val('');
    $('#get-button').click();
}
$(function() {
    // GET/READ
    $('#get-button').on('click', function() {
        //printData(getData());
        var g = getData();
    });
    // CREATE/POST
    $('#create-form').on('submit', function(event) {
          event.preventDefault();

          var createInput1 = $('#create-input1');
          var createInput2 = $('#create-input2');
          //console.log(createInput1.val(),createInput2.val());
          var u = updateData(createInput1, createInput2);
      });

    // UPDATE/PUT
    $('table').on('click', '.update-button', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        var newName = rowEl.find('.name').val();
        var newCollege = rowEl.find('.college').val();

        $.ajax({
            url: '/students/' + id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ newName: newName , newCollege : newCollege}),
            success: function(response) {
                console.log(response);
                $('#get-button').click();
            }
        });
    });

    // DELETE
    $('table').on('click', '.delete-button', function() {
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        console.log(deleteData(id));
    });
  }());
