import * as AuthActions from '../../components/auth/login/actions';
import * as RegisterAction from '../../components/auth/Register/action';
import * as ProductActions from '../../components/products/actions';
import * as AddFotoActions from '../../action/newFoto';

const actions = {
    ...AuthActions,
    ...RegisterAction,
    ...ProductActions,
    ...AddFotoActions
    
}

export default actions;