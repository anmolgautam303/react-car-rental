import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="/">Car Rental App</Navbar.Brand>
            </Navbar>
        )
    }
}

export default Navigation;