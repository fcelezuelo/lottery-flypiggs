import { useCallback, useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

import axios from 'axios';

import { Card } from '../components/Card';
import { Alert } from '../components/Alert';
import logoImg from '../assets/images/logo.png';

import '../styles/new-sort.scss';
import { SortContext } from '../contexts/SortContext';

const MySwal = withReactContent(Swal);

type ParticipantsParsed = {
  name: string;
  entries: number;
  avatar: string;
}[]

export function NewSort() {
  const [sort] = useContext(SortContext);
  const [profiles, setProfiles] = useState<any>(null)

  const history = useHistory();

  const [participants, setParticipants] = useState<string>('');
  const [totalEntries, setTotalEntries] = useState(0);
  const [participantsParsed, setParticipantsParsed] = useState<ParticipantsParsed>([]);

  const getAvatar = useCallback(async () => {
    const entries = sort.participants?.split(',');
    const single: string[] = []
    let params = '';
    entries?.forEach(entry => {
      entry = entry.trim();
      if (!single.includes(entry)) {
        single.push(entry);
        params += `${entry},`
      }
    })

    params = params.substr(0, params.length - 1);

    const { data } = await axios.get(`https://api.twitch.tv/kraken/users?login=${params}`, {
      headers: {
        'Client-ID': 'o2ie168kex5r4s6o0xpee997ch8obk',
        'Accept': 'application/vnd.twitchtv.v5+json'
      }
    });
    const object = data.users.reduce((obj: any, item: any) => ((obj[item.display_name.toLowerCase()] = { avatar: item.logo, display_name: item.display_name }), obj), {});
    setProfiles(object);
  }, [])

  useEffect(() => {
    setParticipants(sort.participants ? sort.participants : '');
    getAvatar();
  }, [])

  useEffect(() => {
    // console.log(profiles);
    if (sort.name === undefined || sort.participants === undefined) {
      history.push('/');
      return;
    } else if (sort.name === '' || sort.participants === '') {
      history.push('/');

      Swal.fire({
        icon: 'warning',
        title: 'Atenção',
        text: 'Preencha o nome do sorteio e os participantes.',
        showConfirmButton: false,
        showCloseButton: true,
      })
      return;
    }

    if (profiles) {
      const participantsArray = participants.split(',');
      const singleParticipants: string[] = [];

      setTotalEntries(participantsArray.length);

      // participantsArray.filter(participantArray => {
      participantsArray.forEach(participantArray => {
        participantArray = participantArray.trim();
        if (!singleParticipants.includes(participantArray)) {
          singleParticipants.push(participantArray);
        }
      })

      // if (profiles) {
      const result = singleParticipants.map(singleParticipant => {
        if (profiles[`${singleParticipant.toLocaleLowerCase()}`] === undefined) {
          return {
            name: singleParticipant,
            entries: (participantsArray.filter(x => x === singleParticipant).length),
            avatar: ''
          };
        } else {
          return {
            name: profiles[`${singleParticipant.toLocaleLowerCase()}`].display_name,
            entries: (participantsArray.filter(x => x === singleParticipant).length),
            avatar: profiles[`${singleParticipant.toLocaleLowerCase()}`].avatar
          };
        }
      });

      setParticipantsParsed(result);
    }

    }, [participants, sort.name, sort.participants, history, profiles])
  // }, [participants, profiles])

  function handleGetWinner() {
    const participantsArray = participants.split(',');
    const winnerKey: number = Math.floor(Math.random() * participantsArray.length)

    const winner = {
      name: '',
      avatar: ''
    }

    if (profiles) {
      if (profiles[`${participantsArray[winnerKey].toLocaleLowerCase()}`] === undefined) {
        winner.name = participantsArray[winnerKey];
        winner.avatar = '';
      } else {
        winner.name = profiles[`${participantsArray[winnerKey].toLocaleLowerCase()}`].display_name;
        winner.avatar = profiles[`${participantsArray[winnerKey].toLocaleLowerCase()}`].avatar;
      }
      MySwal.fire({
        html: <Alert
          name={winner.name}
          avatar={winner.avatar}
        />,
        showConfirmButton: false,
        showCancelButton: false,
        background: 'transparent',
      })
    }
  }

  return (
    <div id="page-new-sort">
      <header>
        <div>
          <img src={logoImg} alt="Lottery FlyPiggs" />
          <span>FLYPIGGS</span>
        </div>
        <div>
          <Link className="navbar-button" to="/">Novo Sorteio</Link>
        </div>
      </header>

      <main>
        <div className="main-title">
          <div>
            <span>{participantsParsed.length > 1 ? 'Participantes' : 'Participante'}: <strong>{participantsParsed.length}</strong></span>
            <span>{totalEntries > 1 ? 'Entradas' : 'Entrada'}: <strong>{totalEntries}</strong></span>
          </div>

          <div className="sort-name">
            <h1>{sort.name}</h1>
            {/* <span>{sort.date}</span> */}
          </div>

          <div className="main-controller">
            <button onClick={handleGetWinner}>Sortear</button>
          </div>
        </div>

        <div className="main-content">

          {participantsParsed.map(({ name, entries, avatar }) => {
            return (
              <Card
                key={name}
                name={name}
                entries={entries}
                avatar={avatar}
              />
            );
          })}

        </div>
      </main>
      <footer>FLYPIGGS - Copyright © 2021</footer>
    </div>
  );
}

