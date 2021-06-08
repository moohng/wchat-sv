import production from './production';
import development from './development';

export default process.env.NODE_ENV === 'production' ? production : development;
