var expect = chai.expect;


require('index');

describe("create post form", function(){
  describe("post", function(){
      it("should trigger a create:post event on the document with the title and body", function(done){

      $(document).on('create:post', function(event, posts){
        var promise = Create.post();
        expect(promise).to.respondTo('title');
        expect(promise).to.respondTo('body');
        done();
      });

      $('.input-class-name').val("Title")
    });

  });
});
