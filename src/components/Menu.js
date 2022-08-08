import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Menu() {
  return (
    <div className='menu'>
      <div className='purpose'>
        <div className='purposeTitle'>
          <h1>Our purpose</h1>
        </div>
        <div className='purposeText'>
          <div className='ppurposetext'>To make people happy trough our food,</div><div className='ppurposetext'>come and get a taste!!!</div>
        </div>
      </div>
      <div className='menuMenu'>
        <p>Menu</p>
      </div>
      <div className='menuImages'>
        <Container>
          <Row className='firstRow'>
            <Col className='colLeft'><a href='h'><img
              src="https://images.unsplash.com/photo-1611688370466-0e415a5c922e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnJ1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            /></a>
            <h2>Chilaquiles</h2>
            <h3>Crispy tortilla chips with our delicious sauces</h3>
            </Col>
            <Col className='colRight'><a href='h'><img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            /></a></Col>
          </Row>
          <Row className='secondRow'>
            <Col className='colCenter'><a href='h'> <img
              src="https://images.unsplash.com/photo-1650330151304-5db3ca9b3b6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpbGFxdWlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            /></a>
            <h2>Football</h2>
            </Col>
          </Row>
          <Row className='thirdRow'>
            <Col className='colLeft'><a href="h"><img className='thirdRowImg'
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            /></a></Col>
            <Col className='colRight'><a href='h'> <img className='thirdRowImg'
              src="https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzc2VydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            /></a></Col>
          </Row>
        </Container>
      </div>
      <div className='locationTitle'>
        <h1>Location</h1>
      </div>
    </div>
  )
}

export default Menu

