import { Request, Response } from 'express';
import UserModel from '../../model/user';

export default (req: Request, res: Response) => {

  // 判断是否存在 这个动作
  const fields = {
    _id: 0,
    pre_friends: 1,
    friends: 1
  };
  UserModel.find(req.query, fields).exec()
    .then(docs => {
      const pre_friends = docs[0].pre_friends;
      if (docs.length === 0 || !pre_friends?.includes(req.session.username as string)) {
        // 该操作无效
        console.log('该操作无效');
        res.send({
          code: 99999,
          status: 'invalid operation'
        });
      }
      else {
        // 1. 更新对方数据库
        // 删除该记录
        const index = pre_friends.findIndex(username => username === req.session.username);
        pre_friends.splice(index, 1);
        // 添加对方好友
        const to_friends = docs[0].friends;
        to_friends?.push(req.session.username as string);
        // 双方建立好友关系
        UserModel.update(req.query, { friends: to_friends, pre_friends });

        // 2. 更新自己的数据库
        UserModel.find({ username: req.session.username }).exec()
          .then(docs => {
            // 添加自己好友记录
            const my_friends = docs[0].friends;
            my_friends?.push(req.query.username as string);

            UserModel.update({ username: req.session.username }, { friends: my_friends });

            console.log('已建立好友关系');
            res.send({
              code: 0,
              status: 'add friend success'
            });
          })
          .catch(err => {
            console.log('数据库错误');
            res.send({
              code: 99999,
              status: 'data base error'
            });
          });

      }
    })
    .catch(err => {
      console.log('数据库错误');
      res.send({
        code: 99999,
        status: 'data base error'
      });
    });

}
