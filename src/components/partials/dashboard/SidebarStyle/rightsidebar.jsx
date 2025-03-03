import React, { useEffect } from "react";
import { Button, Card, Form, Image, Nav, Tab, Tabs } from "react-bootstrap";

//image
import user1 from "../../../../assets/images/user/01.jpg";
import user2 from "../../../../assets/images/user/02.jpg";
import user3 from "../../../../assets/images/user/03.jpg";
import user4 from "../../../../assets/images/user/04.jpg";
import user5 from "../../../../assets/images/user/11.jpg";
import user6 from "../../../../assets/images/user/12.jpg";
import user7 from "../../../../assets/images/user/13.jpg";
import user8 from "../../../../assets/images/user/14.jpg";
import user9 from "../../../../assets/images/user/15.jpg";
import user10 from "../../../../assets/images/user/16.jpg";

import { Link, useNavigate } from "react-router-dom";

const Rightsidebar = () => {
  const minirightsidebar = () => {
    document.getElementById("rightSidebar").classList.toggle("right-sidebar");
    document.body.classList.toggle("right-sidebar-close");
  };

  const history = useNavigate();

  useEffect(() => {
    let clickableElements = document.querySelectorAll(
      '[data-target="chat-popup-modal"]'
    );

    clickableElements.forEach(function (clickableElement) {
      clickableElement.addEventListener("click", function () {
        let targetId = clickableElement.getAttribute("data-target");
        let targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.classList.add("show");
        }
      });
    });

    let closeBtn = document.querySelector(".chat-popup-modal-close");

    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        let chatModal = document.getElementById("chat-popup-modal");
        if (chatModal.classList.contains("show")) {
          chatModal.classList.remove("show");
        }
      });
    }
  });
  return (
    <>
      <div className="right-sidebar-mini" id="rightSidebar">
        <div className="right-sidebar-panel p-0">
          <Card className="shadow-none m-0 h-100">
            <Card.Body className="px-0 pt-0">
              <div className="p-4">
                <h6 className="fw-semibold m-0">Chats</h6>
                <div className="mt-4 iq-search-bar device-search ">
                  <Form action="#" className="searchbox position-relative">
                    <Link className="search-link" to="#">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="7.82491"
                          cy="7.82495"
                          r="6.74142"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.5137 12.8638L15.1567 15.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <Form.Control
                      type="text"
                      className="text search-input  bg-light-subtle"
                      placeholder="Search for people...."
                    />
                  </Form>
                </div>
              </div>
              <Tab.Container defaultActiveKey="first">
                {/* <div className='tabs'> */}
                <Nav
                  className="nav-tabs right-sidebar-tabs"
                  id="right-sidebar-tabs"
                  role="tablist"
                >
                  <Nav.Link
                    eventKey={"first"}
                    className="text-center"
                    id="nav-friends-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-friends"
                    type="button"
                    role="tab"
                    aria-controls="nav-friends"
                    aria-selected="true"
                  >
                    <span className="text-body icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M9 9C8.175 9 7.46875 8.70625 6.88125 8.11875C6.29375 7.53125 6 6.825 6 6C6 5.175 6.29375 4.46875 6.88125 3.88125C7.46875 3.29375 8.175 3 9 3C9.825 3 10.5313 3.29375 11.1188 3.88125C11.7063 4.46875 12 5.175 12 6C12 6.825 11.7063 7.53125 11.1188 8.11875C10.5313 8.70625 9.825 9 9 9ZM3 15V12.9C3 12.475 3.10938 12.0844 3.32812 11.7281C3.54688 11.3719 3.8375 11.1 4.2 10.9125C4.975 10.525 5.7625 10.2344 6.5625 10.0406C7.3625 9.84688 8.175 9.75 9 9.75C9.825 9.75 10.6375 9.84688 11.4375 10.0406C12.2375 10.2344 13.025 10.525 13.8 10.9125C14.1625 11.1 14.4531 11.3719 14.6719 11.7281C14.8906 12.0844 15 12.475 15 12.9V15H3ZM4.5 13.5H13.5V12.9C13.5 12.7625 13.4656 12.6375 13.3969 12.525C13.3281 12.4125 13.2375 12.325 13.125 12.2625C12.45 11.925 11.7688 11.6719 11.0813 11.5031C10.3938 11.3344 9.7 11.25 9 11.25C8.3 11.25 7.60625 11.3344 6.91875 11.5031C6.23125 11.6719 5.55 11.925 4.875 12.2625C4.7625 12.325 4.67188 12.4125 4.60313 12.525C4.53438 12.6375 4.5 12.7625 4.5 12.9V13.5ZM9 7.5C9.4125 7.5 9.76563 7.35313 10.0594 7.05938C10.3531 6.76563 10.5 6.4125 10.5 6C10.5 5.5875 10.3531 5.23438 10.0594 4.94063C9.76563 4.64688 9.4125 4.5 9 4.5C8.5875 4.5 8.23438 4.64688 7.94063 4.94063C7.64688 5.23438 7.5 5.5875 7.5 6C7.5 6.4125 7.64688 6.76563 7.94063 7.05938C8.23438 7.35313 8.5875 7.5 9 7.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>{" "}
                    <span className="h6 font-size-14">Friends</span>
                  </Nav.Link>

                </Nav>
                {/* </div> */}
                <div className="media-height" data-scrollbar="init">
                  <Tab.Content className="right-sidebar-tabs-content">
                    <Tab.Pane eventKey="first">
                      <div
                        className="d-flex align-items-center justify-content-between chat-tabs-content border-bottom"
                        data-target="chat-popup-modal"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="iq-profile-avatar status-online">
                            <img
                              className="rounded-circle avatar-50"
                              src={user1}
                              alt="user-img"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h6 className="font-size-14 mb-0 fw-semibold">
                              Anna Sthesia
                            </h6>
                            <p className="mb-0 font-size-12 fw-medium">
                              hey! how are you?
                            </p>
                          </div>
                        </div>
                        <span className="font-size-12 fw-medium">2min</span>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-between chat-tabs-content border-bottom"
                        data-target="chat-popup-modal"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="iq-profile-avatar status-online">
                            <img
                              className="rounded-circle avatar-50"
                              src={user2}
                              alt="user-img"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h6 className="font-size-14 mb-0 fw-semibold">
                              Paul Molive
                            </h6>
                            <p className="mb-0 font-size-12 fw-medium">
                              hey! how are you?
                            </p>
                          </div>
                        </div>
                        <span className="font-size-12 fw-medium">1Day</span>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-between chat-tabs-content border-bottom"
                        data-target="chat-popup-modal"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="iq-profile-avatar status-online">
                            <img
                              className="rounded-circle avatar-50"
                              src={user3}
                              alt="user-img"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h6 className="font-size-14 mb-0 fw-semibold">
                              Anna Mull
                            </h6>
                            <p className="mb-0 font-size-12 fw-medium">
                              hey! how are you?
                            </p>
                          </div>
                        </div>
                        <span className="font-size-12 fw-medium">01 Nov</span>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-between chat-tabs-content border-bottom"
                        data-target="chat-popup-modal"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="iq-profile-avatar status-online">
                            <img
                              className="rounded-circle avatar-50"
                              src={user4}
                              alt="user-img"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h6 className="font-size-14 mb-0 fw-semibold">
                              Paige Turner
                            </h6>
                            <p className="mb-0 font-size-12 fw-medium">
                              hey! how are you?
                            </p>
                          </div>
                        </div>
                        <span className="font-size-12 fw-medium">33min</span>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-between chat-tabs-content border-bottom"
                        data-target="chat-popup-modal"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="iq-profile-avatar status-online">
                            <img
                              className="rounded-circle avatar-50"
                              src={user5}
                              alt="user-img"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h6 className="font-size-14 mb-0 fw-semibold">
                              Bob Frapples
                            </h6>
                            <p className="mb-0 font-size-12 fw-medium">
                              hey! how are you?
                            </p>
                          </div>
                        </div>
                        <span className="font-size-12 fw-medium">33min</span>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-between chat-tabs-content border-bottom"
                        data-target="chat-popup-modal"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="iq-profile-avatar status-online">
                            <img
                              className="rounded-circle avatar-50"
                              src={user6}
                              alt="user-img"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h6 className="font-size-14 mb-0 fw-semibold">
                              Barb Ackue
                            </h6>
                            <p className="mb-0 font-size-12 fw-medium">
                              hey! how are you?
                            </p>
                          </div>
                        </div>
                        <span className="font-size-12 fw-medium">33min</span>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-between chat-tabs-content border-bottom"
                        data-target="chat-popup-modal"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="iq-profile-avatar status-online">
                            <img
                              className="rounded-circle avatar-50"
                              src={user7}
                              alt="user-img"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h6 className="font-size-14 mb-0 fw-semibold">
                              Greta Life
                            </h6>
                            <p className="mb-0 font-size-12 fw-medium">
                              hey! how are you?
                            </p>
                          </div>
                        </div>
                        <span className="font-size-12 fw-medium">33min</span>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-between chat-tabs-content border-bottom"
                        data-target="chat-popup-modal"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="iq-profile-avatar status-online">
                            <img
                              className="rounded-circle avatar-50"
                              src={user8}
                              alt="user-img"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h6 className="font-size-14 mb-0 fw-semibold">
                              Ira Membrit
                            </h6>
                            <p className="mb-0 font-size-12 fw-medium">
                              hey! how are you?
                            </p>
                          </div>
                        </div>
                        <span className="font-size-12 fw-medium">33min</span>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-between chat-tabs-content border-bottom"
                        data-target="chat-popup-modal"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="iq-profile-avatar status-online">
                            <img
                              className="rounded-circle avatar-50"
                              src={user9}
                              alt="user-img"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h6 className="font-size-14 mb-0 fw-semibold">
                              Pete Sariya
                            </h6>
                            <p className="mb-0 font-size-12 fw-medium">
                              hey! how are you?
                            </p>
                          </div>
                        </div>
                        <span className="font-size-12 fw-medium">33min</span>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-between chat-tabs-content border-bottom"
                        data-target="chat-popup-modal"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="iq-profile-avatar status-online">
                            <img
                              className="rounded-circle avatar-50"
                              src={user10}
                              alt="user-img"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h6 className="font-size-14 mb-0 fw-semibold">
                              Monty Carlo
                            </h6>
                            <p className="mb-0 font-size-12 fw-medium">
                              hey! how are you?
                            </p>
                          </div>
                        </div>
                        <span className="font-size-12 fw-medium">33min</span>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
              <div
                className="right-sidebar-toggle bg-primary text-white mt-3 d-flex"
              >
                <span className="material-symbols-outlined">chat</span>
              </div>
              <div className="conversion-button">
                <Button
                  onClick={() => history('/chat/index')}
                  as="a"
                  className="btn btn-primary w-100 py-3 d-block rounded-0"
                >
                  View All Conversion
                </Button>
              </div>
              <div className="right-sidebar-toggle bg-primary text-white mt-3 d-flex" onClick={minirightsidebar}>
                <span className="material-symbols-outlined">chat</span>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="chat-popup-modal" id="chat-popup-modal">
        <div className="bg-primary p-3 d-flex align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="image flex-shrink-0">
              <img
                src={user7}
                alt="img"
                className="img-fluid avatar-45 rounded-circle object-cover"
              />
            </div>
            <div className="content">
              <h6 className="mb-0 font-size-14 text-white">Bob Frapples</h6>
              <span className="d-inline-block lh-1 font-size-12 text-white">
                <span className="d-inline-block rounded-circle bg-success border-5 p-1 align-baseline me-1"></span>
                Avaliable
              </span>
            </div>
          </div>
          <div className="chat-popup-modal-close lh-1" type="button">
            <span className="material-symbols-outlined font-size-18 text-white">
              close
            </span>
          </div>
        </div>
        <div className="chat-popup-body p-3 border-bottom">
          <ul className="list-inline p-0 mb-0 chat">
            <li>
              <div className="text-center">
                <span className="time font-size-12 text-primary">Today</span>
              </div>
            </li>
            <li className="mt-2">
              <div className="text-start">
                <div className="d-inline-block py-2 px-3 bg-gray-subtle chat-popup-message font-size-12 fw-medium">
                  Hello, How Are you Doing Today?
                </div>
                <span className="mt-1 d-block time font-size-10 fst-italic">
                  03:41 PM
                </span>
              </div>
            </li>
            <li className="mt-3">
              <div className="text-end">
                <div className="d-inline-block py-2 px-3 bg-primary-subtle chat-popup-message message-right font-size-12 fw-medium">
                  Hello, I'm Doing Well.
                </div>
                <span className="mt-1 d-block time font-size-10 fst-italic">
                  03:42 PM
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="chat-popup-footer p-3">
          <div className="chat-popup-form">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Start Typing..."
              />
              <button
                type="submit"
                className="chat-popup-form-button btn btn-primary"
              >
                <span className="material-symbols-outlined font-size-18 icon-rtl">
                  send
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightsidebar;
