import Proptypes from "prop-types";

const Navbar = ({ navLinks = [] }) => {
	return (
		<nav className="flex justify-center space-x-4 border-b-2">
			{navLinks.map((link, index) => (
				<a
					key={index}
					href={`/${link.toLowerCase()}`}
					className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
				>
					{link}
				</a>
			))}
		</nav>
	);
};

Navbar.propTypes = {
	navLinks: Proptypes.arrayOf(Proptypes.string),
};

export default Navbar;
