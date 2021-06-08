import { Request, Response } from 'express';
import { UserModel } from '../../model';

export default (req: Request, res: Response) => {
  const fields = {
    _id: 0,
    username: 1,
    name: 1,
    age: 1,
    sex: 1,
    about_me: 1
  };
  UserModel.find({ username: req.session.username }, fields).exec()
    .then(docs => {
      const user = docs[0];
      console.log('获取用户信息成功');
      res.send({
        code: 0,
        status: 'get user success',
        user
      });
    })
    .catch(err => {
      console.log('数据库出错');
      res.send({
        code: 99999,
        status: 'data base error'
      });
    });
}
