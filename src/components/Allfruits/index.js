export const AllFruits =  ({ fruits }) => {

	return (
		<ul>
			{fruits.map((fruit, index) => (
				<li key={index}> {fruit.name} </li>
			))}
		</ul>
	)
}
