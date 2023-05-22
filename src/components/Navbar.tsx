import { Container, Nav,  Navbar as NavbarBS } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
	<NavbarBS className="bg-dark shadow-sm mb-3">
		<Container>
			<Nav>
				<Nav.Link className="text-white" to='/' as ={NavLink}>Home</Nav.Link>
				<Nav.Link className="text-white" to='/about' as ={NavLink}>About</Nav.Link>
				<Nav.Link className="text-white" to='/store' as ={NavLink}>Store</Nav.Link>
			</Nav>
		</Container>
	</NavbarBS>
  )
}

export default Navbar