import { Request, Response } from 'express';
import UserModel from '../../model/user';

export default (req: Request, res: Response) => {

  UserModel.find({ username: req.session.username }).exec()
    .then(docs => {
      const friends = docs[0].friends;

      console.log('获取好友列表成功');
      res.send({
        code: 0,
        status: 'get friends success',
        friends
      });
    })
    .catch(err => {
      console.log('数据库错误');
      res.send({
        code: 99999,
        status: 'data base error'
      });
    });
};
