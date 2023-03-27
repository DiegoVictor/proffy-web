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
        <div>
          <Avatar src={user?.avatar} alt={user?.name} />
          <h2>{user?.name}</h2>
          <h3>{subject}</h3>
        </div>
      </Header>
    </Container>
  );
}

export default Profile;
