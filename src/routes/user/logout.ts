import { Request, Response } from 'express';

export default (req: Request, res: Response) => {

  const username = req.session.username;
  req.session.destroy(err => {
    if (err) {
      console.log('注销失败');
      res.send({
        code: 99999,
        status: 'logout error'
      });
      return;
    }

    console.log('用户%s已注销', username);
    // 清除cookie
    res.clearCookie('wchat.user');
    res.send({
      code: 0,
      status: 'logout success'
    });
  });
}
