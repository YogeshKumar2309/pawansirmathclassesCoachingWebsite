const roleCheck = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.session.user.role;
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        message: "Access denied",
      });
    }
    next();
  };
};

export default roleCheck;
