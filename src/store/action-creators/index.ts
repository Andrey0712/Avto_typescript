import * as AuthActions from '../../components/auth/login/actions';
import * as RegisterAction from '../../components/auth/Register/action';
import * as ProductActions from '../../components/products/actions';

const actions = {
    ...AuthActions,
    ...RegisterAction,
    ...ProductActions
    
}

export default actions;