import { Container, Avatar } from './styles';
import Header from '../../components/Header';

function Profile() {
  const [user, setUser] = useState<User>();
  const { user: { id: userId } = {} } = useAuth();
  const [subject, setSubject] = useState<string>('');
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/users/${userId}`);
      setUser(data);
    })();
  }, [userId]);
  useEffect(() => {
    (async () => {
      const { data } = await api.get('/classes/my-class');
      setSubject(data.subject);
    })();
  }, []);

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
