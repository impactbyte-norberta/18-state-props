import React from 'react';

import Card from '../../components/Card/Card';

import image from '../../assets/images/image.jpg';
import database from '../../assets/images/database.png';

class LandingPage extends React.Component {
    state = {
        image: [image, database],
        title: 'foto gita',
    };

    changeTitle = () => {
        this.setState({ title: 'foto Sarah' });
    };

    render() {
        console.log(this.state.title);
        let cards = this.state.image.map((card, index) => (
            <Card key={index} image={card} title={this.state.title} />
        ));

        return (
            <>
                <h1>Ini halaman landing page</h1>

                {cards}

                <button onClick={this.changeTitle}>klik</button>
            </>
        );
    }
}

export default LandingPage;
