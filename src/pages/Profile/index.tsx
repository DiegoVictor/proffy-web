import { Container, Avatar } from './styles';
import Header from '../../components/Header';
interface User {
  name: string;
  email: string;
  avatar?: string;
  whatsapp: string;
  bio?: string;
}

function Profile() {
  const {
    user: { id: userId, name: userName, surname: userSurname } = {},
    updateProfile,
  } = useAuth();
  const fullName = `${userName} ${userSurname}`.trim();

  const [user, setUser] = useState<User & { subject: string }>();
  useEffect(() => {
    (async () => {
      const [
        { data: profile },
        {
          data: { subject },
        },
      ] = await Promise.all([
        api.get(`/users/${userId}`),
        api.get('/classes/my-class'),
      ]);

      setUser({
        ...profile,
        subject,
      });
    })();
  }, [userId]);

  return (
    <Container>
      <Header
        options={{
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
