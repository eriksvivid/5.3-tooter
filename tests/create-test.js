var expect = chai.expect;
var $ = jQuery;


require('index');

describe("create post form", function(){
  it("should trigger a create:post event on the document with the title and body", function(done){

    $(document).on('create:post', function(event, posts){
      expect(posts)
    });
  };
});
