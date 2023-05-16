import "./navbar.css";
import { Phone, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../public/img/logo.png";
import { logoutUser } from "../../redux/apiCalls";

export const Navbar = () => {
  const quantity = useSelector((state) => state.card.quantity);
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    logoutUser(dispatch);
  };

  return (
    <div className="navbarContainer">
      <div className="navbarItem">
        <div className="navbarCallButton">
          <Phone className="navbarImg" />
        </div>
        <div className="navbarTexts">
          <div className="navbarText">ORDER NOW!</div>
          <div className="navbarText navbarPhone">+214 58 74 96</div>
        </div>
      </div>
      <div className="navbarItem">
        <ul className="navbarItemLists">
          <li className="navbarItemList">
            <a href="/#featured">Homepage</a>
          </li>
          <li className="navbarItemList">
            {" "}
            <a href="/#pizzas">Products</a>
          </li>
          <li className="navbarItemList logo"><a href="/about">Abouts</a></li>
          <Link to="/">
            <img className="navbarLogo" src={logo} alt="Yalla" />
          </Link>
          <li className="navbarItemList"><a href="/contact">Contact</a></li>
          {user ? <li className="navbarItemList" onClick={handleLogout}>Logout</li> : <li className="navbarItemList"><a href="/register">Register</a></li>}
          {user ? <li className="navbarItemList">{user?.username}</li> : <li className="navbarItemList"><a href="/login">Login</a></li>}
        </ul>
      </div>
      <Link to="/card">
        <div className="navbarItem">
          <div className="cart">
            <Badge
              badgeContent={quantity}
              color="secondary"
              className="navbarItemBadge"
            >
              <ShoppingCartOutlined className="navbarItemCart" />
            </Badge>
          </div>
        </div>
      </Link>
    </div>
  );
};
