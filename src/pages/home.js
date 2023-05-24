import './home.css';
import { useEffect } from 'react';
import { Link, Outlet, Navigate, useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log("Home effect");
        navigate("/home/filesManager");
      }, []);

    return(
        <Row className="Home">
            <Col md={4} className="menu">
                <nav>
                    <ul className="list">
                        <Link to="/home/filesManager" className="list">
                            Files Manager
                        </Link>
                        <Link to="/home/uploadFile" className="list">
                            Upload File
                        </Link>                
                    </ul>
                </nav>
            </Col>
            <Col>
                <Outlet />
            </Col>
        </Row>
    )
};

export default Home;