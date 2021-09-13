import App from '../App';
import Error from './error';

function HandleLogin(values) {

	const savedEmail = localStorage.getItem('email');
	const savedPassword = localStorage.getItem('password');
	const nameEmail = values.email;
	const namePassword = values.password;

	const initialValueEmail = JSON.parse(savedEmail);
	const initialValue = JSON.parse(savedPassword);
  
   if (initialValueEmail === nameEmail && initialValue === namePassword) {
		 <App/>
	} else {
		<Error />
	}
	return

}

export default HandleLogin;








