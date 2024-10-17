import React, { useState, useContext } from 'react'

//router
import { Link, useLocation } from 'react-router-dom'

//react-bootstrap
import { Accordion, useAccordionButton, AccordionContext, Nav, Tooltip, OverlayTrigger } from 'react-bootstrap'



function CustomToggle({ children, eventKey, onClick }) {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({ state: !active, eventKey: eventKey }));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={(e) => {
            decoratedOnClick(isCurrentEventKey)
        }}>
            {children}
        </Link>
    );
}

const Verticalnav = React.memo(() => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [active, setActive] = useState('')
    //location
    let location = useLocation();
    // console.log(document);


    return (
        <React.Fragment>
            <Accordion as="ul" className="navbar-nav iq-main-menu" id="sidebar-menu">


                <li className={`${location.pathname === '/' ? 'active' : ''} nav-item `}>
                    <Link className={`${location.pathname === '/' ? 'active' : ''} nav-link `} aria-current="page"
                          to="/">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Newsfeed</Tooltip>}>
                            <i className="icon material-symbols-outlined">
                                newspaper
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Newsfeed</span>
                    </Link>
                </li>
                <li>
                    <hr className="hr-horizontal"/>
                </li>
                <li className={`${location.pathname === '/' ? 'active' : ''} nav-item `}>
                    <Link className={`${location.pathname === '/dashboard/app/profile' ? 'active' : ''} nav-link`}
                          to="/dashboard/app/profile">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Profile</Tooltip>}>
                            <i className="icon material-symbols-outlined">
                                person
                            </i>
                        </OverlayTrigger>
                        <span className="item-name"> Profile </span>
                    </Link>
                </li>

                <li>
                    <hr className="hr-horizontal"/>
                </li>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboard/app/notification' ? 'active' : ''} nav-link `}
                          aria-current="page" to="/dashboard/app/notification">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Notification</Tooltip>}>
                            <i className="icon material-symbols-outlined">
                                notifications
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Notification</span>
                    </Link>
                </Nav.Item>
                <li>
                    <hr className="hr-horizontal"/>
                </li>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === 'dashboards/app/chat' ? 'active' : ''} nav-link `}
                          aria-current="page" to="dashboards/app/chat">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Chat</Tooltip>}>
                            <i className="icon material-symbols-outlined">
                                message
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Chat</span>
                    </Link>
                </Nav.Item>
                <li>
                    <hr className="hr-horizontal"/>
                </li>
                <Accordion.Item as="li" eventKey="store-menu" bsPrefix="nav-item">
                    <CustomToggle eventKey="store-menu" active={activeMenu === 'store-menu' ? true : false}
                                  onClick={(activeKey) => setActiveMenu(activeKey)}>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Store</Tooltip>}>
                            <i className="icon material-symbols-outlined">
                                storefront
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Store</span>
                        <i className="right-icon material-symbols-outlined">chevron_right</i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="store-menu">
                        <ul className="sub-nav">
                            <Nav.Item as="li">
                                <Link
                                    className={`${location.pathname === '/dashboards/store/store-category-grid' ? 'active' : ''} nav-link`}
                                    to="/dashboards/store/store-category-grid">
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Category Grid</Tooltip>}>
                                        <i className="sidenav-mini-icon"> CG </i>
                                    </OverlayTrigger>
                                    <i className="icon material-symbols-outlined filled">fiber_manual_record</i>
                                    <span className="item-name">Category Grid</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link
                                    className={`${location.pathname === '/dashboards/store/store-category-list' ? 'active' : ''} nav-link`}
                                    to="/dashboards/store/store-category-list">
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Category list</Tooltip>}>
                                        <i className="sidenav-mini-icon"> CL </i>
                                    </OverlayTrigger>
                                    <i className="icon material-symbols-outlined filled">fiber_manual_record</i>
                                    <span className="item-name">Category list</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link
                                    className={`${location.pathname === '/dashboards/store/store-detail' ? 'active' : ''} nav-link`}
                                    to="/dashboards/store/store-detail">
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Store Detail</Tooltip>}>
                                        <i className="sidenav-mini-icon"> SD </i>
                                    </OverlayTrigger>
                                    <i className="icon material-symbols-outlined filled">fiber_manual_record</i>
                                    <span className="item-name">Store Detail</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link
                                    className={`${location.pathname === '/dashboards/store/product-detail' ? 'active' : ''} nav-link`}
                                    to="/dashboards/store/product-detail">
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Product Detail</Tooltip>}>
                                        <i className="sidenav-mini-icon"> PD </i>
                                    </OverlayTrigger>
                                    <i className="icon material-symbols-outlined filled">fiber_manual_record</i>
                                    <span className="item-name">Product Detail</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link
                                    className={`${location.pathname === '/dashboards/store/store-checkout' ? 'active' : ''} nav-link`}
                                    to="/dashboards/store/store-checkout">
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Checkout</Tooltip>}>
                                        <i className="sidenav-mini-icon"> CO </i>
                                    </OverlayTrigger>
                                    <i className="icon material-symbols-outlined filled">fiber_manual_record</i>
                                    <span className="item-name">Checkout</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>


            </Accordion>
        </React.Fragment>
    )
})

export default Verticalnav
