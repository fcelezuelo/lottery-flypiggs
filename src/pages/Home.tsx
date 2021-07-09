import { FormEvent, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SortContext } from '../contexts/SortContext';
import Swal from 'sweetalert2';

import logoImg from '../assets/images/logo.png';
import { AuthContext } from '../contexts/AuthContext';

import '../styles/home.scss';
import { useEffect } from 'react';

export function Home() {
  const history = useHistory();

  const [, setSort] = useContext(SortContext);
  const { auth } = useContext(AuthContext);

  const [participants, setParticipants] = useState('');
  const [sortName, setSortName] = useState('');
  // const [sortDate, setSortDate] = useState('');
  // const [profile, setProfile] = useState([{}]);

  useEffect(() => {
    console.log(auth);
    if (auth === false) {
      history.push('/');
    }
  }, [])

  async function handleCreateSort(event: FormEvent) {
    event.preventDefault();

    if (sortName === '' || participants === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Atenção',
        text: 'Preencha o nome do sorteio e os participantes.',
        showConfirmButton: false,
        showCloseButton: true,
      })
      return;
    }

    // await getAvatar(participants)

    setSort({ name: sortName, participants: participants });
    history.push('/newSort');
  }

  return (
    <div id="page-home">
      <header>
        <div>
          <img src={logoImg} alt="Lottery FlyPiggs" />
          <span>FLYPIGGS</span>
        </div>

        {/* <div>
          <a href="https://id.twitch.tv/oauth2/authorize?client_id=o2ie168kex5r4s6o0xpee997ch8obk&redirect_uri=http://localhost:3000&response_type=token&scope=viewing_activity_read">login</a>
        </div> */}
      </header>

      <main>
        <div className="main-title">

          <h1>
            Criar Sorteio
          </h1>

          <form onSubmit={handleCreateSort}>
            <input
              onChange={event => setSortName(event.target.value)}
              placeholder="Nome do sorteio"
            />
            {/* <input
              type='Date'
              onChange={event => setSortDate(event.target.value)}
              placeholder="Data do sorteio"
            /> */}
            <textarea
              onChange={event => setParticipants(event.target.value)}
              placeholder="Adicionar os participantes ao sorteio"
            />

            <button type='submit'>Criar Sorteio</button>
          </form>

        </div>
      </main>
      <footer>FLYPIGGS - Copyright © 2021</footer>
    </div>
  );
}
