import {styles} from './style';
import { View } from 'react-native';

type Props = {
  progress: number;
}

export function Progress({ progress }: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, {width: `${progress}%`}]} />
    </View>
  );
}