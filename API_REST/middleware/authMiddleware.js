import jwt from 'jsonwebtoken';

export const authRequired = (req, res, next)=>{
  const {token} = req.cookies;
  if (!token) return res.status(401).json({
    message:'No hay token, autorización denegada'
  })

  jwt.verify(token, "/7hIuz79_^#i", (err, user) =>{
    if (err) return res.status(401).json({
      message:'Token no válido'
  })
  req.user = user

  next();})
}

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.rol === 'Admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Acceso denegado: se requiere rol de administrador' });
  }
};
