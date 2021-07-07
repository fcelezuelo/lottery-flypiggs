import Fires from '../assets/images/fogos.gif';
import defaultAvatar from '../assets/images/flypiggstext.png';

import '../styles/alert.scss';

type AlertProps = {
  name: string;
  avatar: string;
}

export function Alert({ name, avatar }: AlertProps) {
  return (
    <div id="alert">
      <img src={Fires} alt="fogos" />
      <strong>Vencedor</strong>
      <img className="avatar-winner" src={avatar || defaultAvatar} alt={name} />
      <span>{name}</span><br />
    </div>
  );
}