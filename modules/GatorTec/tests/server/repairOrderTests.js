const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const repairOrder = require('../../server/controllers/repairOrderController');
const server = require("../../server.js");
chai.use(chaiHttp);

describe("repairOrder", function(){

  // describe("Adding a repairOrder", function(){
  //
  //   // 1) null
  //   // 2) undefined
  //   // 3) empty
  //   // 4) missing fields
  //   // 5) adding a repairOrder
  //
  // });

  // describe("Creating a user from an sro", function(){
  //
  //   // 1) null
  //   // 2) undefined
  //   // 3) empty
  //   // 4) missing fields
  //   // 5) creating a user
  //
  // });

  describe("Getting all repairOrders", function(){

    // 1) Getting all repairOrders
    it("should get all the repairOrders", function(done){
      chai.request(server)
          .get("/repairOrder/getAllRepairOrders")
          .end(function(err, response){
            response.should.have.status(200);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(1);
            done();
          });
      });

  });

  // describe("Getting all repairOrders by Email", function(){
  //   // 1) Getting all repairOrders by email
  //   it("should get all the repairOrders by email", function(done){
  //     chai.request(server)
  //         .get("/repairOrder/getAllRepairOrdersByEmail")
  //         .end(function(err, response){
  //           response.should.have.status(200);
  //           // response.body.should.be.a('array');
  //           // response.body.length.should.be.eql(1);
  //           done();
  //         });
  //     });
  // });

  describe("BlackListing a repairOrder", function(){

    // 1) undefined
          it("UNDEFINED repairOrder", function(done){
            let undefinedRepairOrder = undefined;
            chai.request(server)
                .put("/repairOrder/blacklist")
                .send(undefinedRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);   // NOTE: UNDEFINED BECOMES EMPTY OBJECT
                  done();
            });
          });

    // 2) null
          it("NULL repairOrder", function(done){
            let nullRepairOrder = null;
            chai.request(server)
                .put("/repairOrder/blacklist")
                .send(nullRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);   // NOTE: NULL BECOMES EMPTY OBJECT
                  done();
            });
          });

    // 3) empty
          it("EMPTY repairOrder", function(done){
            let emptyRepairOrder = {};
            chai.request(server)
                .put("/repairOrder/blacklist")
                .send(emptyRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);
                  done();
            });
          });

    // 4) does not exist
          it("NONEXISTENT repairOrder", function(done){
            let notExistingRepairOrder = { "sroID": "65535" };
            chai.request(server)
                .put("/repairOrder/blacklist")
                .send(notExistingRepairOrder)
                .end(function(err, response){
                  response.should.have.status(404);
                  done();
                });
          });

    // 5) blacklist a repairOrder
          it("blacklisting repairOrder", function(done){
            let existingRepairOrder = { "sroID": "1" };
            chai.request(server)
                .put("/repairOrder/blacklist")
                .send(existingRepairOrder)
                .end(function(err, response){
                  response.should.have.status(200);
                  done();
                });
          });

  });

  describe("UnblackListing a repairOrder", function(){

    // 1) undefined
          it("UNDEFINED repairOrder", function(done){
            let undefinedRepairOrder = undefined;
            chai.request(server)
                .put("/repairOrder/unblacklist")
                .send(undefinedRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);   // NOTE: UNDEFINED BECOMES EMPTY OBJECT
                  done();
            });
          });

    // 2) null
          it("NULL repairOrder", function(done){
            let nullRepairOrder = null;
            chai.request(server)
                .put("/repairOrder/unblacklist")
                .send(nullRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);   // NOTE: NULL BECOMES EMPTY OBJECT
                  done();
            });
          });

    // 3) empty
          it("EMPTY repairOrder", function(done){
            let emptyRepairOrder = {};
            chai.request(server)
                .put("/repairOrder/unblacklist")
                .send(emptyRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);
                  done();
            });
          });

    // 4) does not exist
          it("NONEXISTENT repairOrder", function(done){
            let notExistingRepairOrder = { "sroID": "65535" };
            chai.request(server)
                .put("/repairOrder/unblacklist")
                .send(notExistingRepairOrder)
                .end(function(err, response){
                  response.should.have.status(404);
                  done();
            });
          });

    // 5) unblacklist a repairOrder
          it("unblacklisting repairOrder", function(done){
            let existingRepairOrder = { "sroID": "1" };
            chai.request(server)
                .put("/repairOrder/unblacklist")
                .send(existingRepairOrder)
                .end(function(err, response){
                  response.should.have.status(200);
                  done();
            });
          });

  });

  describe("Deleting a repairOrder", function(){

    // 1) undefined
          it("UNDEFINED repairOrder", function(done){
            let undefinedRepairOrder = undefined;
            chai.request(server)
                .delete("/repairOrder/delete")
                .send(undefinedRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);   // NOTE: UNDEFINED BECOMES EMPTY OBJECT
                  done();
            });
          });

    // 2) null
          it("NULL repairOrder", function(done){
            let nullRepairOrder = null;
            chai.request(server)
                .delete("/repairOrder/delete")
                .send(nullRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);   // NOTE: NULL BECOMES EMPTY OBJECT
                  done();
            });
          });

    // 3) empty
          it("EMPTY repairOrder", function(done){
            let emptyRepairOrder = {};
            chai.request(server)
                .delete("/repairOrder/delete")
                .send(emptyRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);
                  done();
            });
          });

    // 4) does not exist
          it("NONEXISTENT repairOrder", function(done){
            let notExistingRepairOrder = { "sroID": "65535" };
            chai.request(server)
                .delete("/repairOrder/delete")
                .send(notExistingRepairOrder)
                .end(function(err, response){
                  response.should.have.status(404);
                  done();
            });
          });

    // 5) deleting a repairOrder
          it("deleting a repairOrder", function(done){
            let existingRepairOrder = { "sroID": "1" };
            chai.request(server)
                .delete("/repairOrder/delete")
                .send(existingRepairOrder)
                .end(function(err, response){
                  response.should.have.status(200);
                  done();
            });
          });

  });

});
