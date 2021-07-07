import defaultAvatar from '../assets/images/flypiggstext.png';

import '../styles/card.scss';

type User = {
  key: string;
  name: string;
  entries: number;
  avatar?: string;
}

export function Card({ name, entries, avatar }: User) {
  return (
    <div className="card" >
      <div>
        <img src={avatar || defaultAvatar} alt="avatar" />
        <h2>{name}</h2>
      </div>
      <span>{entries > 1 ? 'Entradas' : 'Entrada'}: {entries}</span>
    </div>
  );
}