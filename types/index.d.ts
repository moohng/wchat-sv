// import 'express';

// declare module 'express' {
//   interface Application {
//     user?: any;
//   }
//   interface Express {
//     user?: any;
//   }
// }

import 'express-session';

declare module 'express-session' {
  interface SessionData {
    username: string;
  }
}
