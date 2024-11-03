import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FormStepOne} from '../screen/FormStepOne';
import { FormStepTwo} from '../screen/FormStepTwo';
import { FormStepThree} from '../screen/FormStepThree';
import  { Finish } from '../screen/Finish';

const { Navigator, Screen } = createNativeStackNavigator();

export function AccountRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="formStepOne" component={FormStepOne} />
      <Screen name="formStepTwo" component={FormStepTwo} />
      <Screen name="formStepThree" component={FormStepThree} />
      <Screen name="finish" component={Finish} />
    </Navigator>
  );
}