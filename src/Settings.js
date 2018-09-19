import Storable from './Storable';

export default class Settings extends Storable {
  qamus = {
    it: true,
    el: true,
    ph: true,
    mt: true,
    ch: true,
    mc: true,
    ec: true,
  };
  lang = 'ar'; // ar, en, jp
}
