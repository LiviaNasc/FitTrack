import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import * as C from './styles';

const Layout = ({ children, userType }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/signin');
    }
  }, [navigate]);

    return (
    <>
        <Header />
        <C.Wrapper>
        <Sidebar userType={userType} />
        <C.MainContent>
            {children}
        </C.MainContent>
        </C.Wrapper>
    </>
    );
};

export default Layout;