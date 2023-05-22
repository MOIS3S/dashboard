import { useState } from 'react';
import { fetchUsers } from '../customHooks/FetchUsers';
import useAppStore from '../store';
import { CustomModal } from '../components/CustomModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import AppFrame from '../components/AppFrame';
import { ContainerButton, ButtonAddUser, Container } from './styles';
import CustomTableUsers from '../components/CustomTableUsers';
import { ProfileInfoContainer } from '../components/ProfileInfoContainer/indext';
import { User } from '../interfaces';



export function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users] = useAppStore(state => [state.users]);
  fetchUsers(currentPage);

  const showInfoUser = (id: string) => {
    const user = users.find((user: User) => user._id === id);
    if(!user) return console.log('No se encontro el usuario');
    setSelectedUser(user);
    setIsOpen(true);
  }


  return (
    <AppFrame>
      <Container> 
        <ContainerButton>
          <ButtonAddUser> 
            <FontAwesomeIcon icon={faCirclePlus} fontSize={'19px'} />
            <span>Nuevo estudiante</span>
          </ButtonAddUser>
        </ContainerButton>
        { users ? <CustomTableUsers data={users} onClick={showInfoUser} /> : <h1>Cargando...</h1>}
        <button onClick={() => setCurrentPage((prv) => prv + 1)}>Cargar mas</button>
      {modalIsOpen && 
      <CustomModal close={setIsOpen}>
        {selectedUser && <ProfileInfoContainer user={selectedUser} /> }
      </CustomModal>}
      </Container> 
    </AppFrame> 
    );
}

export default Users;