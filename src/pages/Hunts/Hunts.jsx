import './Hunts.css';
import HuntList from '../../components/HuntsList';

const Hunts = () => {

    return (
        <div className="hunts-container">
            <div className='filter'>
                <div className='filter-container'>
                    <p>Order Hunts By:</p>
                    <select>
                        <option value="profit">Profit</option>
                        <option value="xp">XP</option>
                        <option value="recent">Recent</option>
                        <option value="level">Level</option>
                    </select>
                </div>
            </div>
            <HuntList/>
        </div>
    );
};

export default Hunts;