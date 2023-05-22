import React from 'react';
import { ButtonTab, Button, CotainerButton, CotainerTabs } from './styles';
import  ProfileInfo  from '../ProfileInfo';
import UserInfoEdit from '../UserInfoEdit';
import { UserListCourses } from '../UserListCourses';
import { InfoUserProps } from '../../interfaces';

export function ProfileInfoContainer({ user }: InfoUserProps) {
  const [handleTabs, setHandleTabs] = React.useState<'info' | 'courses' | 'edit'>('info');

  const showEditUser = handleTabs !== 'edit' && handleTabs !== 'courses';
  const activeTab = (isActive: boolean) => isActive ? '4px solid #0abb87' : 'none';

  return (
    <>
    <CotainerButton>
      <CotainerTabs>
        <ButtonTab 
          onClick={() => setHandleTabs('info')} 
          style={{borderBottom: activeTab(handleTabs === 'info')}}>
            Perfil
        </ButtonTab>
        <ButtonTab 
          onClick={() => setHandleTabs('courses')} 
          style={{borderBottom: activeTab(handleTabs === 'courses')}}>
            Cursos
        </ButtonTab>
      </CotainerTabs>
      {showEditUser && <Button onClick={() => setHandleTabs('edit')}>Editar estudiante</Button>}
    </CotainerButton>
    {handleTabs === 'info' && <ProfileInfo user={user} />}
    {handleTabs === 'edit' && <UserInfoEdit user={user} handleCancel={setHandleTabs} />}
    {handleTabs === 'courses' && <UserListCourses courses={user.courses} />}
    </>  
    );
}

export default ProfileInfo;