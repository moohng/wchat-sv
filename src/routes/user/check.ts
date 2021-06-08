import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {

  if (req.session.username) {
    next();
  } else {
    console.log('未登录');
    res.send({
      code: 10001,
      status: 'not login'
    });
  }
}
