import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Thead, Tr, Td, ButtonIsOnline } from './styles';


export function CustomTableUsers({ data, onClick }: any) {

  const renderButtonIsOnline = (isOnline: boolean) => { 
    return isOnline ? <ButtonIsOnline style={{ backgroundColor: '#0ABB87'}}>online</ButtonIsOnline> : <ButtonIsOnline style={{ backgroundColor: '#F0F4F3'}}>offline</ButtonIsOnline>
  }

  return (
    <Table>
      <Thead>
        <Tr>
          <th>Conexion</th>
          <th>Nombre y apellidos</th>
          <th>Nombre de usuario</th>
          <th>Email</th>
          <th>Movil</th>
          <th></th>
        </Tr>
      </Thead>
      <tbody>
        {data && data.map((user: any) => (
          <tr key={user._id} onClick={() => onClick(user._id)}>
            <Td>{renderButtonIsOnline(user.isOnline)}</Td>
            <Td>{user.name} {user.lastName}</Td>
            <Td>{user.username}</Td>
            <Td>{user.email}</Td>
            <Td>{user.phone}</Td>
            <Td><FontAwesomeIcon icon={faCircleInfo} fontSize={'20px'} /></Td>
          </tr>
        ))}
      </tbody>
    </Table> 
    );
}

export default CustomTableUsers;