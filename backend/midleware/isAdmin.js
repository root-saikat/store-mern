import userModel from '../models/user.js'

const isAdmin = async (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    try {
        const user = await userModel.findById(req.user.id);
        if (user.role !== 1) {
          return res.status(401).send({
            success: false,
            message: "UnAuthorized Access",
          });
        } else {
          next();
        }
      } catch (error) {
        console.log(error);
        res.status(401).send({
          success: false,
          error,
          message: "Error in admin middelware",
        });
      }
};
 

export default isAdmin;