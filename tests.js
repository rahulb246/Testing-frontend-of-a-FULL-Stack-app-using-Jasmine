describe("tests for chekcing if required functions are defined", function() {


    it("getData should be defined to handle GET call", function() {
      expect(getData).toBeDefined();
    });

    it("updateData should be defined to handle POST call", function() {
      expect(updateData).toBeDefined();
    });

    it("updateDataHelper should be defined to make POST call", function() {
      expect(updateDataHelper).toBeDefined();
    });

    it("deleteData should be defined", function() {
      expect(deleteData).toBeDefined();
    });

});
describe("tests for spying on events by using spyOnEvent", function() {
    it("getData should be called on click", function(){
      spyOnEvent($('#get-button'), 'click');
      $('#get-button').click();
      expect('click').toHaveBeenTriggeredOn($('#get-button'));
    });

    /*it(" updateData() should be called on click", function(){
      spyOnEvent($('#create-form'), 'click');
      $('#get-button').click();
      expect('click').toHaveBeenTriggeredOn($('#create-form'));
    });*/

});
describe("tests for spying on functions by using spyOns", function() {
    it("getData should make a ajax HTTPrequest call", function() {
      spyOn(jQuery, "ajax");
      getData();
      expect(jQuery.ajax).toHaveBeenCalled();
    });

    it("updateDataHelper should make a ajax HTTPrequest call", function() {
      spyOn(jQuery, "ajax");
      updateDataHelper();
      expect(jQuery.ajax).toHaveBeenCalled();
    });

    it("deleteData should make a ajax HTTPrequest call", function() {
      spyOn(jQuery, "ajax");
      deleteData();
      expect(jQuery.ajax).toHaveBeenCalled();
  });

});
describe("tests for checking responses", function() {
  var students = [
  {id: 1, name: 'Iron man', college: 'MIT'},
  {    id: 2,    name: 'Rahul',college: 'CBIT'},
  {    id: 3,    name: 'Messi',    college: 'CBIT'},
  {    id: 4,    name: 'Dybala',    college: 'Stanford'}];
  /*it("success response from server for GET call should match", function() {
    expect(getData().toEqual(students);
  });
  /*it("success response from server for POST call should match", function() {
    expect(updateDataHelper('name','college')).toEqual('Successfully created product!');
  });

  it("success response from server for DELETE call should match", function() {
    expect(deleteData(3)).toEqual('Successfully deleted product!');
  });*/
});
