import * as AuthActions from '../../components/auth/login/actions';
import * as RegisterAction from '../../components/auth/Register/action';

const actions = {
    ...AuthActions,
    ...RegisterAction,
    
}

export default actions;