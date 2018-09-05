import Storable from './Storable';

export default class Settings extends Storable {
  qamus = {
    it: true,
    el: true,
    ph: true,
    mt: true,
    ch: true,
    ic: true,
    me: true,
    ec: true,
  };
  lang = 'ar'; // ar, en, jp
}
