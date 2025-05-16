import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
        { name: "Find Jobs", url: "/Find-Jobs" },
        { name: "Find Talent", url: "/Find-Talent" },
        { name: "Post Job", url: "/post-Job" },
        { name: "About Us", url: "/About-Us" },
    ];
    const location = useLocation();

    return (
        <div className="flex gap-3 text-gray-400 h-full items-center">
            {links.map((link, index) => (
                <div
                    key={index}
                    className={`h-full flex items-center ${
                        location.pathname === link.url ? "border-t-4 border-blue-500" : ""
                    }`}
                >
                    <Link to={link.url} className="px-3 py-2">
                        {link.name}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default NavLinks;
