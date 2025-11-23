import React from "react";
import { Navbar, Nav, NavDropdown, Container, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css"; 

import Logo from '../img/logo.png';
import { Dropdown } from 'react-bootstrap';


export default function Header() {
  return (
    <Navbar fixed="top" expand="lg" className="navbar-custom shadow-lg">
      <Container>
        <Navbar.Brand href="/">
   <img src={Logo} alt="MyWebsite Logo" height="70" />
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown title="ข่าว" id="news-dropdown">
              <NavDropdown.Item href="/news">ข่าว</NavDropdown.Item>
              <Dropdown.Divider />
              <NavDropdown.Item href="/video">วิดีโอ</NavDropdown.Item>
              <Dropdown.Divider />
              <NavDropdown.Item href="/gallery">แกลอรี่</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ทีม & โปรแกรม" id="team-dropdown">
              <NavDropdown.Item href="/schedule">ตารางการแข่งขัน</NavDropdown.Item>
              <Dropdown.Divider />
              <NavDropdown.Item href="/result-match">ผลการแข่งขัน</NavDropdown.Item>
              <Dropdown.Divider />
              <NavDropdown.Item href="/table">ตารางคะแนน</NavDropdown.Item>
              <Dropdown.Divider />
              <NavDropdown.Item href="/player-staff">ผู้เล่นและสต้าฟ</NavDropdown.Item>
              <Dropdown.Divider />
              <NavDropdown.Item href="/team-stat">สถิติ</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="บัตรเข้าชม" id="ticket-dropdown">
              <NavDropdown.Item href="/match-ticket">ซื้อบัตรเข้าชม</NavDropdown.Item>
              <Dropdown.Divider />
              <NavDropdown.Item href="/year-ticket">บัตรเข้าชมรายปี</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/shop">
              <FaShoppingCart /> ร้านค้า <Badge bg="danger">3</Badge>
            </Nav.Link>
            <NavDropdown title="สโมสร" id="club-dropdown">
              <NavDropdown.Item href="/history">ประวัติ</NavDropdown.Item>
              <Dropdown.Divider />
              <NavDropdown.Item href="/ceo">ผู้บริหาร</NavDropdown.Item>
              <Dropdown.Divider />
              <NavDropdown.Item href="/maps">แผนที่</NavDropdown.Item>
              <Dropdown.Divider />
              <NavDropdown.Item href="/achievement">ความสำเร็จ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/partners">พาร์ทเนอร์</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
