import "./styles.css";
import logo from "./Logo.svg";
import AirLines from "./Airline";

export default function App() {
    return (
        <div className="body">
            <header className="header">
                <img src={logo} alt="logo" className="logo" />
            </header>
            <div className="container">
                <h1 className="h1">{"AirLines"}</h1>
                <h4 className="h4">{"Filter by Alliances"}</h4>

                <AirLines />
            </div>
        </div>
    );
}
