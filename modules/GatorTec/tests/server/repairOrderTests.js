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

    // 1) Blacklisting a repairOrder that is undefined
          it("should return a 400 Bad Request status code when BlackListing a repairOrder that is undefined", function(done){
            let undefinedRepairOrder = undefined;
            chai.request(server)
                .put("/repairOrder/blacklist")
                .send(undefinedRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);   // NOTE: UNDEFINED BECOMES EMPTY OBJECT
                  done();
            });
          });

    // 2) Blacklisting a repairOrder that is null
          it("should return a 400 Bad Request status code when BlackListing a repairOrder that is null", function(done){
            let nullRepairOrder = null;
            chai.request(server)
                .put("/repairOrder/blacklist")
                .send(nullRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);   // NOTE: NULL BECOMES EMPTY OBJECT
                  done();
            });
          });

    // 3) Blacklisting a repairOrder that is empty
          it("should return a 400 Bad Request status code when Deleting a repairOrder that is empty", function(done){
            let emptyRepairOrder = {};
            chai.request(server)
                .put("/repairOrder/blacklist")
                .send(emptyRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);
                  done();
            });
          });

    // 4) Blacklisting a repairOrder that does not exist
          it("should return a 404 Resource Not Found status code for a blacklisting repairOrder that does not exist", function(done){
            let notExistingRepairOrder = { "sroID": "65535" };
            chai.request(server)
                .put("/repairOrder/blacklist")
                .send(notExistingRepairOrder)
                .end(function(err, response){
                  response.should.have.status(404);
                  done();
                });
          });

    // 5) Blacklisting a repairOrder
          it("should blacklist a repairOrder", function(done){
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

    // 1) Unblacklisting a reapirOrder that is undefined
          it("should return a 400 Bad Request status code when UnblackListing a repairOrder that is undefined", function(done){
            let undefinedRepairOrder = undefined;
            chai.request(server)
                .put("/repairOrder/unblacklist")
                .send(undefinedRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);   // NOTE: UNDEFINED BECOMES EMPTY OBJECT
                  done();
            });
          });

    // 2) Unblacklisting a reapirOrder that is null
          it("should return a 400 Bad Request status code when UnblackListing a repairOrder that is null", function(done){
            let nullRepairOrder = null;
            chai.request(server)
                .put("/repairOrder/unblacklist")
                .send(nullRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);   // NOTE: NULL BECOMES EMPTY OBJECT
                  done();
            });
          });

    // 3) Unblacklisting a reapirOrder that is empty
          it("should return a 400 Bad Request status code when Deleting a repairOrder that is empty", function(done){
            let emptyRepairOrder = {};
            chai.request(server)
                .put("/repairOrder/unblacklist")
                .send(emptyRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);
                  done();
            });
          });

    // 4) Unblacklisting a reapirOrder that does not exist
          it("should return a 404 Resource Not Found status code for unblacklisting a repairOrder that does not exist", function(done){
            let notExistingRepairOrder = { "sroID": "65535" };
            chai.request(server)
                .put("/repairOrder/unblacklist")
                .send(notExistingRepairOrder)
                .end(function(err, response){
                  response.should.have.status(404);
                  done();
            });
          });

    // 5) Unblacklisting a repairOrder
          it("should unblacklist a repairOrder", function(done){
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

    // 1) Deleting a repairOrder that is undefined
          it("should return a 400 Bad Request status code when Deleting a repairOrder that is undefined", function(done){
            let undefinedRepairOrder = undefined;
            chai.request(server)
                .delete("/repairOrder/delete")
                .send(undefinedRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);   // NOTE: UNDEFINED BECOMES EMPTY OBJECT
                  done();
            });
          });

    // 2) Deleting a repairOrder that is null
          it("should return a 400 Bad Request status code when Deleting a repairOrder that is null", function(done){
            let nullRepairOrder = null;
            chai.request(server)
                .delete("/repairOrder/delete")
                .send(nullRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);   // NOTE: NULL BECOMES EMPTY OBJECT
                  done();
            });
          });

    // 3) Deleting a repairOrder that is empty
          it("should return a 400 Bad Request status code when Deleting a repairOrder that is empty", function(done){
            let emptyRepairOrder = {};
            chai.request(server)
                .delete("/repairOrder/delete")
                .send(emptyRepairOrder)
                .end(function(err, response){
                  response.should.have.status(400);
                  done();
            });
          });

    // 4) Deleting a repairOrder that does not exist
          it("should return a 404 Resource Not Found status code for deleting a repairOrder that does not exist", function(done){
            let notExistingRepairOrder = { "sroID": "65535" };
            chai.request(server)
                .delete("/repairOrder/delete")
                .send(notExistingRepairOrder)
                .end(function(err, response){
                  response.should.have.status(404);
                  done();
            });
          });

    // 5) Deleting a repairOrder
          it("should delete a repairOrder", function(done){
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
