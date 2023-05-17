import './HuntsList.css';

// Resto do código do componente HuntList


const HuntCard = ({ title, location, level, description, image, profit, xp }) => {
    return (
        <div className="hunt-card">
            {image && <img src={image} alt={title} />}
            <h2>{title}</h2>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Level:</strong> {level}</p>
            <p><strong>Profit Por Hora:</strong> {profit}</p>
            <p><strong>Xp Por Hora:</strong> {xp}</p>
            <p>{description}</p>
        </div>
    );
};

const HuntList = () => {
    const hunts = [
        {
            title: 'Hunt 1',
            location: 'Location 1',
            level: 'Level 100+',
            description: 'Description of hunt 1.',
            profit: '150k',
            xp: '200k',
            image: 'https://cdn.ravendawn.online/img/backgrounds/screenshots/Rohna_Woods_small.jpg?v=0'
        },
        {
            title: 'Hunt 2',
            location: 'Location 2',
            level: 'Level 200+',
            description: 'Description of hunt 2.',
            profit: '150k',
            xp: '200k',
            image: 'https://cdn.ravendawn.online/img/backgrounds/screenshots/Rohna_Woods_small.jpg?v=0'
        },
        {
            title: 'Hunt 3',
            location: 'Location 2',
            level: 'Level 200+',
            description: 'Description of hunt 2.',
            profit: '150k',
            xp: '200k',
            image: 'https://cdn.ravendawn.online/img/backgrounds/screenshots/Rohna_Woods_small.jpg?v=0'
        },

        {
            title: 'Hunt 4',
            location: 'Location 2',
            level: 'Level 200+',
            description: 'Description of hunt 2.',
            profit: '150k',
            xp: '200k',
            image: 'https://cdn.ravendawn.online/img/backgrounds/screenshots/Rohna_Woods_small.jpg?v=0'
        },

        {
            title: 'Hunt 5',
            location: 'Location 2',
            level: 'Level 200+',
            description: 'Description of hunt 2.',
            profit: '150k',
            xp: '200k',
            image: 'https://cdn.ravendawn.online/img/backgrounds/screenshots/Rohna_Woods_small.jpg?v=0'
        },
        // Add more hunt objects here
    ];

    return (
        <div className="hunt-list">
            {hunts.map((hunt, index) => (
                <HuntCard
                    key={index}
                    title={hunt.title}
                    location={hunt.location}
                    level={hunt.level}
                    description={hunt.description}
                    profit={hunt.profit}
                    xp={hunt.xp}
                    image={hunt.image}
                />
            ))}
        </div>
    );
};

export default HuntList;
