import style from './UsersFiltered.module.css'

const UsersFiltered = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => (
	<form className={style.form}>
		<input
			type='text'
			value={search}
			onChange={ev => setSearch(ev.target.value)}
		></input>
		<div className='style.active'>
			<input
				type='checkbox'
				checked={onlyActive}
				onChange={ev => setOnlyActive(ev.target.checked)}
			></input>
			<span>Solo activos</span>
		</div>
		<select value={sortBy} onChange={ev => setSortBy(Number(ev.target.value))}>
			<option value={0}>Por defecto</option>
			<option value={1}>Por nombre</option>
		</select>
	</form>
)

export default UsersFiltered
