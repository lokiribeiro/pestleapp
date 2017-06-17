import {app} from '/client/app.js';
import { name as Login } from '../login/login';
import Profiles from '/imports/models/profiles.js';

class RegisterCtrl{

      constructor($scope, $reactive, $state) {
        'ngInject';

        $('body').addClass('grad-2');      
      }
};

app.component('register', {

    templateUrl: 'client/components/register/register.html',
    controllerAs: 'register',
    controller: RegisterCtrl
});
