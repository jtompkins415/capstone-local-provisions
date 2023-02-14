import {Button} from 'reactstrap';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <h1>LOCAL PROVISIONS</h1>
            <h3>FIND YOUR COMMUNITY</h3>
            <div className="Home-body">
                <Button
                    color='success'
                    href="/main"
                    tag="a"
                >
                    ENTER
                </Button>
            </div>
        </div>
    )
};

export default Home;