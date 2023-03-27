import { Container, Avatar } from './styles';
import Header from '../../components/Header';

function Profile() {
  return (
    <Container>
      <Header
        options={{
          title: '',
          page: 'Meu perfil',
        }}
      >
      </Header>
    </Container>
  );
}

export default Profile;
