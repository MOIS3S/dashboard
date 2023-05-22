import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Header, ContainerLogoHeader, Container, Aside, Section, UlAside } from './styles';

interface AppFrameProps {
  children?: React.ReactNode;
}


export function AppFrame({ children }: AppFrameProps) {

  const listNav = [ 
    { icon: faChartLine, name: 'Dashboard' },
  ];

  return (
    <main>
      <Header>
        <ContainerLogoHeader>
          <img src="https://images.teamtailor-cdn.com/images/s3/teamtailor-production/logotype-v3/image_uploads/75e35695-a97d-42e6-ab7f-b27c6bb1f10b/original.png"/>
        </ContainerLogoHeader>
      </Header>
      <Container>
      <Aside>
        <nav>
          <UlAside>
            {listNav.map((item, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={item.icon} />
                {item.name}
              </li>
            ))}
          </UlAside>
        </nav>
      </Aside>
      <Section>
        {children}
      </Section>
    </Container> 
    </main> 
    );
}

export default AppFrame;