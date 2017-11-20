
// Used for:
// repairOrder.getAllRepairOrdersByEmail
exports.isCustomer = function(req, res, next){
    if(req['user'] == undefined){
      return res.status(401).send('Unauthorized');
    }
    else{
      let userRole = req['user'].userRole;
      if(userRole == 'Customer'){
        next();
      }
      else{
        return res.status(401).send('Unauthorized');
      }
    }
};

// Used for: user.add | user.getAllUsers | user.delete
//           repairOrder.add | repairOrder.delete
exports.isAdmin = function(req, res, next){
    if(req['user'] == undefined){
      return res.status(401).send('Unauthorized');
    }
    else{
      let userRole = req['user'].userRole;
      if(userRole == 'Admin'){
        next();
      }
      else{
        return res.status(401).send('Unauthorized');
      }
    }
};

// Used for: repairOrder.getAllRepairOrders | repairOrder.blacklist
//           repairOrder.unblacklist
exports.isTechnicianOrAdmin = function(req, res, next){
    if(req['user'] == undefined){
      return res.status(401).send('Unauthorized');
    }
    else{
      let userRole = req['user'].userRole;
      if(userRole == 'Technician' || userRole == 'Admin'){
        next();
      }
      else{
        return res.status(401).send('Unauthorized');
      }
    }
};
