const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const user = require('../../server/controllers/userController');
const server = require("../../server.js");
chai.use(chaiHttp);

  describe("User", function(){

    describe("Adding a user", function(){

      // 1) Adding a user that is undefined
            it("should return a 400 Bad Request status code when adding a user that is undefined", function(done){
              let undefinedUser = undefined;
              chai.request(server)
                  .post("/user/add")
                  .send(undefinedUser)
                  .end(function(err, response){
                    response.should.have.status(400);   // NOTE: UNDEFINED BECOMES EMPTY OBJECT
                    done();
              });
            });

      // 2) Adding a user that is null
            it("should return a 400 Bad Request status code when adding a user that is null", function(done){
              let nullUser = null;
              chai.request(server)
                  .post("/user/add")
                  .send(nullUser)
                  .end(function(err, response){
                    response.should.have.status(400);   // NOTE: NULL BECOMES EMPTY OBJECT
                    done();
                  });
            });

      // 3) Adding a user that is empty
            it("should return a 400 Bad Request status code when adding a user that is empty", function(done){
              let emptyUser = {};
              chai.request(server)
                  .post("/user/add")
                  .send(emptyUser)
                  .end(function(err, response){
                    response.should.have.status(400);
                    done();
                  });
            });

      // 4) Adding a user that already exists
            it("should return a 409 Conflict status code if the user already exists", function(done){
              let existingUser = {
                "name": "Renzo Rodriguez",
                "username": "renzo@ufl.edu",
                "userPassword": "7864268468",
                "userRole": "Admin"
              }
              chai.request(server)
                  .post("/user/add")
                  .send(existingUser)
                  .end(function(err, response){
                    response.should.have.status(409);
                    done();
                  });
            });

      // 5) Adding a user missing required fields
            it("should return a 400 Bad Request if a required field is missing from the user object", function(done){
              let missingFieldUser = {
                "name": "Missing UserPassword",
                "username": "missing@ufl.edu",
                // userPassword is missing in this case
                "userRole": "Admin"
              }

              chai.request(server)
                  .post("/user/add")
                  .send(missingFieldUser)
                  .end(function(err, response){
                    response.should.have.status(400);
                    done();
                  });
            });

      // 6) Adding a user with all the required fields
            it("should add user with the required fields as expected", function(done){
              let allFieldsUser = {
                "name": "Dummy User",
                "username": "dummy@email.com",
                "userPassword": "1234567890",
                "userRole": "technician"
              }
              chai.request(server)
                  .post("/user/add")
                  .send(allFieldsUser)
                  .end(function(err, response){
                    response.should.have.status(200);
                    done();
                  });
            });

    });

    describe("Getting all users", function(){

      // 1) Getting all the users
            it("should get all the technicians and employees", function(done){
              chai.request(server)
                  .get("/user/getAllUsers")
                  .end(function(err, response){
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eql(3);
                    done();
                  });
              });

    });

    describe("Deleting a user", function(){

      // 1) Deleting a user that is undefined
            it("should return a 400 Bad Request status code when deleting a user that is undefined", function(done){
              let undefinedUser = undefined;
              chai.request(server)
                  .delete("/user/delete")
                  .send(undefinedUser)
                  .end(function(err, response){
                    response.should.have.status(400);       // NOTE: UNDEFINED BECOMES EMPTY OBJECT
                    done();
              });
            });

      // 2) Deleting a user that is null
            it("should return a 400 Bad Request status code when deleting a user that is null", function(done){
              let nullUser = null;
              chai.request(server)
                  .delete("/user/delete")
                  .send(nullUser)
                  .end(function(err, response){
                    response.should.have.status(400);       // NOTE: NULL BECOMES EMPTY OBJECT
                    done();
              });
            });

      // 3) Deleting a user missing required fields or is empty
            it("should return a 400 Bad Request status code if a field is missing from the object", function(done){
              let emptyUser = {};
              chai.request(server)
                  .delete("/user/delete")
                  .send(emptyUser)
                  .end(function(err, response){
                    response.should.have.status(400);
                    done();
              });
            });

      // 4) Deleting a user that does not exist
            it("should return a 404 Resource Not Found status code for a user that does not exist", function(done){
              let notExistingUser = { "username": "missing@ufl.edu" };
              chai.request(server)
                  .delete("/user/delete")
                  .send(notExistingUser)
                  .end(function(err, response){
                    response.should.have.status(404);
                    done();
              });
            });

      // 5) Deleting a user with all the required fields
            it("should delete the user", function(done){
              let deleteUser = { "username": "dummy@email.com" };
              chai.request(server)
                  .delete("/user/delete")
                  .send(deleteUser)
                  .end(function(err, response){
                    response.should.have.status(200);
                    done();
              });
            });

    });

    describe("Logging In", function(){
      // 1) Logging in as a user that is undefined
            it("should return a 404 Resource Not Found status code when logging in as a user that is undefined", function(done){
              let undefinedUser = undefined;
              chai.request(server)
                  .delete("/user/login")
                  .send(undefinedUser)
                  .end(function(err, response){
                    response.should.have.status(404);       // NOTE: UNDEFINED BECOMES EMPTY OBJECT
                    done();
              });
            });

      // 2) Logging in as a user that is null
            it("should return a 404 Resource Not Found status code when logging in as a user that is null", function(done){
              let nullUser = undefined;
              chai.request(server)
                  .delete("/user/login")
                  .send(nullUser)
                  .end(function(err, response){
                    response.should.have.status(404);       // NOTE: UNDEFINED BECOMES EMPTY OBJECT
                    done();
              });
            });

      // 3) Logging in as a user that is null
            it("should return a 404 Resource Not Found status code when logging in as a user that is empty", function(done){
              let emptyUser = {};
              chai.request(server)
                  .delete("/user/login")
                  .send(emptyUser)
                  .end(function(err, response){
                    response.should.have.status(404);
                    done();
              });
            });

      // 4) Logging in as a user that has missing required fields
            it("should return a 404 Resource Not Found status code when logging in as a user that is missing fields", function(done){
              let missingUser = { "username": "renzo@ufl.edu" };
              chai.request(server)
                  .delete("/user/login")
                  .send(missingUser)
                  .end(function(err, response){
                    response.should.have.status(404);
                    done();
              });
            });

      // 5) Logging in as an employee that does not exist
            it("should return a 404 Resource Not Found status code when logging in as an employee that does not exist", function(done){
              let notExistingEmployee = { "username": "dummy@email.com", "userPassword": "1234567890" };
              chai.request(server)
                  .delete("/user/login")
                  .send(notExistingEmployee)
                  .end(function(err, response){
                    response.should.have.status(404);
                    done();
              });
            });

      // 6) Logging in as an customer that does not exist
            it("should return a 404 Resource Not Found status code when logging in as an customer that does not exist", function(done){
              let notExistingCustomer = { "username": "65535", "userPassword": "1234567890" };
              chai.request(server)
                  .delete("/user/login")
                  .send(notExistingCustomer)
                  .end(function(err, response){
                    response.should.have.status(404);
                    done();
              });
            });

      // 7) Logging in as an admin
            it("should let an admin log in", function(done){
              let loginAdmin = {
                "username": "renzo@ufl.edu",
                "userPassword": "7864268468"
              };
              chai.request(server)
                  .post("/user/login")
                  .send(loginAdmin)
                  .end(function(err, response){
                    response.should.have.status(200);
                    done();
                  });
            });

      // 8) Logging in as an technician
            it("should let a technician log in", function(done){
              let loginTechnician = {
                "username": "zack@ufl.edu",
                "userPassword": "7864268468"
              };
              chai.request(server)
                  .post("/user/login")
                  .send(loginTechnician)
                  .end(function(err, response){
                    response.should.have.status(200);
                    done();
                  });
            });

      // 9) Logging in as a customer
            it("should let a customer log in", function(done){
              let loginCustomer = {
                "username": "1",
                "userPassword": "9876543210"
              };
              chai.request(server)
                  .post("/user/login")
                  .send(loginCustomer)
                  .end(function(err, response){
                    response.should.have.status(200);
                    done();
                  });
            });

    });

    // describe("Logging Out", function(){
    //
    // });

  });
