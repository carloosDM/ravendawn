import './SideBar.css';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <a href="https://www.example.com">
                <img src="/public/img/beer.png" alt="beer"/>
            </a>
            <p>Ravendawn Tavern</p>
            <a href="https://www.example.com">
                <i className="fas fa-search"></i>
            </a>
            <p>Hunts</p>
            <a href="https://www.example.com">
                <i className="far fa-calendar-alt"></i>
            </a>
            <p>Events</p>
            <a href="https://ravendawndb.com">
                <i className="fas fa-database"></i>
            </a>
            <p>DataBase</p>
        </div>
    );
};

export default Sidebar;
