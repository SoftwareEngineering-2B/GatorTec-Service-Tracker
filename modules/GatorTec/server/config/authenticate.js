
// Used for:
// repairOrder.getAllRepairOrdersByEmail
exports.isCustomer = function(req, res, next){
    if(req['user'] == undefined){
      res.send(401);
    }
    else{
      let userRole = req['user'].userRole;
      if(userRole == 'Customer' || userRole == 'customer'){
        next();
      }
      else{
        res.send(401);
      }
    }
};

// Used for: user.add | user.getAllUsers | user.delete
//           repairOrder.add | repairOrder.delete
exports.isAdmin = function(req, res, next){
    if(req['user'] == undefined){
      res.send(401);
    }
    else{
      let userRole = req['user'].userRole;
      if(userRole == 'Admin' || userRole == 'admin'){
        next();
      }
      else{
        res.send(401);
      }
    }
};

// Used for: repairOrder.getAllRepairOrders | repairOrder.blacklist
//           repairOrder.unblacklist
exports.isTechnicianOrAdmin = function(req, res, next){
    if(req['user'] == undefined){
      res.send(401);
    }
    else{
      let userRole = req['user'].userRole;
      if(userRole == 'Technician' || userRole == 'Admin' || userRole == 'technician' || userRole == 'admin'){
        next();
      }
      else{
        res.send(401);
      }
    }
};
