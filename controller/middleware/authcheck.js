const jwt = require('jsonwebtoken');
const user=require('/home/navya/Desktop/mern-ecommerce/ecommerce-back-end/model/authM')


module.exports=async(req,res,next)  => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        try {
            const {id,username} = jwt.verify(token,"Tiger");
            const user=await user.findOne({ token,status:true})
            if(!user)
            {
                return res.status(403).json({
                 
                    message: "invalid login",
                  });
            }
            req.UserData =  {
                          "user_id":id,
                          "username":username
                      }
              
          } catch (error) {
            if (error.message === "jwt expired") {
                return res.status(403).json({
                 
                  message: "TOKEN EXPIRED",
                });
              } else {
                return res.status(403).json({
                  message: "INVALID TOKEN",
                });
              }      
          } 
        } else {
          return res.status(401).json({ message: "Authentication required" });
        }
        next();
      };
      
      
// .catch(err => {
//     return res.status(200).json({'status': 'error', 'message': 'Technical Error: '+err});
// });


// //-------------------------
    
// } catch (error){
//     return res.status(401).json({  status: 'error',message: 'Login access invalid'});
//   }




// }