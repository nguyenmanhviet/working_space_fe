import { useState, Fragment, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PropertiesPage from './components/properties/ProperitesPage';
import RoomPage from './components/room/RoomPage';
import SingleRoomPage from './components/room/SingleRoomPage';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Backdrop from './components/backdrop/Backdrop';
import ModalLogin from './components/modal/ModalLogin';
import ModalSignup from './components/modal/ModalSignup';
import ModalSort from './components/modal/ModalSort';
import ModalFilter from './components/modal/ModalFilter';
import AuthContext from './store/authContext';
import ModalRoom from './components/modal/ModalRoom';
import ModalRent from './components/modal/ModalRent';
import ModalPayment from './components/modal/ModalPayment';
import MyAccount from './components/account/MyAccount';
import AccountSetting from './components/account/AccountSetting';

function App() {
  const authCtx = useContext(AuthContext);
  const [room, setRoom] = useState({});
  const [isPaying, setPay] = useState(false);
  const [isBackdrop, setBackdrop] = useState(false);
  const [isFormLogin, setFormLogin] = useState(false);
  const [isFormRegister, setFormRegister] = useState(false);
  const [isModalSort, setModalSort] = useState(false);
  const [isModalFilter, setModalFilter] = useState(false);
  const [isModalRoom, setModalRoom] = useState(false);
  const [isModalRent, setModalRent] = useState(false);
  const [isModalPayment, setModalPayment] = useState(false);
  
  const onBackdropHandler = () => {
    setBackdrop(false);
    setFormLogin(false);
    setFormRegister(false);
    setModalSort(false);
    setModalFilter(false);
    setModalRoom(false);
    setModalRent(false);
    setModalPayment(false);
    setPay(false);
  }

  const onActiveModalPayment = () => {
    setModalRent(false);
    setPay(true);
    if(authCtx.isLoggedIn){
       setModalPayment(true);
      //  setModalRent(false);
    }
    else{
      setFormLogin(true);
    }
  }

  const onActivePaymentFromLogin = () => {
    setPay(false);
    setFormLogin(false);
    setModalPayment(true);
  }

  const onExitModalPayment = () => {
    setBackdrop(false);
    setModalPayment(false);
    setPay(false);
  }

  const onActiveModalRent = (room1) => {
    setModalRoom(false);
    setModalRent(true);
  }

  const onExitModalRent = () => {
    setBackdrop(false);
    setModalRent(false);
  }

  const onActiveModalRoom = (room1) => {
    setBackdrop(true);
    setModalRoom(true);
    setRoom(room1);
  }

  const onExitModalRoom = () => {
    setBackdrop(false);
    setModalRoom(false);
  }

  const onActiveLogin = () => {
    setBackdrop(true);
    setFormLogin(true);
  }

  const onActiveModalSort = () => {
    setBackdrop(true);
    setModalSort(true);
  }

  const onActiveModalFilter = () => {
    setBackdrop(true);
    setModalFilter(true);
  }

  const onExitFormLoginHandler = () => {
    setFormLogin(false);
    setBackdrop(false);
  }

  const onExitFormRegisterHandler = () => {
    setFormRegister(false);
    setBackdrop(false);
  }

  const onExitModalSort = () => {
    setModalSort(false);
    setBackdrop(false);
  }

  const onExitModalFilter = () => {
    setModalFilter(false);
    setBackdrop(false);
  }

  const onTranferFrom = () => {
    setFormLogin(!isFormLogin);
    setFormRegister(!isFormRegister);
  }

  return (
    <Fragment>
    {isBackdrop && <Backdrop onBackdrop={onBackdropHandler}/>}
    {isFormLogin && <ModalLogin onExitLogin={onExitFormLoginHandler} onTranferFrom={onTranferFrom} onActiveModalPayment={onActivePaymentFromLogin} isPaying={isPaying}/>}
    {isFormRegister && <ModalSignup onExitRegister={onExitFormRegisterHandler} onTranferFrom={onTranferFrom}/>}
    {isModalSort && <ModalSort onExitModalSort={onExitModalSort}/>}
    {isModalFilter && <ModalFilter onExitModalFilter={onExitModalFilter}/>}
    {isModalRoom && <ModalRoom onExitModalRoom={onExitModalRoom} room={room} onActiveModalRent={onActiveModalRent}/>}
    {isModalRent && <ModalRent onExitModalRent={onExitModalRent} room={room} onActiveModalPayment={onActiveModalPayment}/>}
    {isModalPayment && <ModalPayment onExitModalPayment={onExitModalPayment} room={room}/>}
    <Layout onBackdrop={onActiveLogin}>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/properties' exact>
          <PropertiesPage onActiveModalSort={onActiveModalSort} onActiveModalFilter={onActiveModalFilter}/>
        </Route>
        <Route path='/properties/:propertyId/rooms'>
          <RoomPage onActiveModalRoom={onActiveModalRoom}/>
        </Route>
        <Route path='/properties/rooms/room'>
          <SingleRoomPage />
        </Route>
        <Route path='/my_account/profile'>
           <AccountSetting />
        </Route>
        <Route path='/my_account'>
          {authCtx.isLoggedIn && <MyAccount />}
        </Route>
        
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>

    </Fragment>
  );
}

export default App;
