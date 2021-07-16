import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import illustrationImg from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
  const { user } = useAuth();

  useEffect(() => {
    console.log("Mounted:", user?.name);
  }, [user?.name]);

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-context">
          <img src={logoImg} alt="Leatmeask" />
          <h2>Criar uma nova sala</h2>
          <form action="">
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit" >Criar sala</Button>
          </form>
          <p>Quert entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}
