import UsersList from './components/UsersList'

const USERS = [
	{
		name: 'Alejandro Costich',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Arseniy Filippov',
		active: false,
		role: 'what'
	},
	{
		name: 'Carlos Parra',
		active: false,
		role: 'student'
	}
]

const App = () => (
	<UsersList users={USERS}>
		<h1>Listado de usuarios</h1>
	</UsersList>
)

export default App
