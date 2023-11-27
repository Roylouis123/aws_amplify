import {View,Button,Heading,Image,Card,withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import YourComponent from './lamda';

function App({signOut}) {
  return (
<View>
  <Card>
    <Heading>You are Auth!  <Button onClick={signOut}>Sign out</Button>
</Heading>
    <div><YourComponent/></div>
  </Card>
</View>);
}

export default withAuthenticator(App);
