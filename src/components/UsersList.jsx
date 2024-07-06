import { useState } from 'react'
import UserRow from './UserRow.jsx'
import UsersFiltered from './UsersFiltered.jsx'
import style from './UsersList.module.css'

const UsersList = ({ users }) => {
	const [search, setSearch] = useState('')
	const [onlyActive, setOnlyActive] = useState(false)
	const [sortBy, setSortBy] = useState(0)

	let usersFiltered = filterUsersByName(users, search)
	usersFiltered = filterActiveUsers(usersFiltered, onlyActive)
	usersFiltered = sortUsers(usersFiltered, sortBy)
	const usersRendered = renderUsers(usersFiltered)

	return (
		<div className={style.wrapper}>
			<h1>Listado de usuarios</h1>
			<UsersFiltered
				{...{
					search,
					setSearch,
					onlyActive,
					setOnlyActive,
					sortBy,
					setSortBy
				}}
			/>
			{usersRendered}
		</div>
	)
}

const filterUsersByName = (users, search) => {
	if (!search) return users

	const lowerCasedSearch = search.toLowerCase()

	return users.filter(user =>
		user.name.toLowerCase().startsWith(lowerCasedSearch)
	)
}

const filterActiveUsers = (users, active) => {
	if (!active) return [...users]

	return users.filter(user => user.active)
}

const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users]

	switch (sortBy) {
		case 1:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1
				if (a.name < b.name) return -1
				return 0
			})
		default:
			return sortedUsers
	}
}

const renderUsers = users => {
	if (users.length <= 0) return <p>No hay usuarios</p>

	return users.map(user => <UserRow key={user.name} {...user} />)
}

export default UsersList
