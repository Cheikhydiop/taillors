import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Dropdown,
  OverlayTrigger,
  Tooltip,
  Collapse,
  ProgressBar,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import CreatePost from "../../components/create-post";

//image
import user1 from "../../assets/images/user/1.jpg";
import user01 from "../../assets/images/user/01.jpg";
import user2 from "../../assets/images/user/02.jpg";
import user3 from "../../assets/images/user/03.jpg";

import user5 from "../../assets/images/page-img/fun.webp";
import user6 from "../../assets/images/user/13.jpg";
import user7 from "../../assets/images/user/17.jpg";
import user8 from "../../assets/images/user/16.jpg";
import user9 from "../../assets/images/user/09.jpg";
import user10 from "../../assets/images/user/10.jpg";
import user11 from "../../assets/images/user/14.jpg";
import user12 from "../../assets/images/user/15.jpg";
import profileBgImg from "../../assets/images/page-img/profile-bg9.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper React components

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import icon1 from "../../assets/images/icon/01.png";
import icon2 from "../../assets/images/icon/02.png";
import icon3 from "../../assets/images/icon/03.png";
import icon4 from "../../assets/images/icon/04.png";
import icon5 from "../../assets/images/icon/05.png";
import icon6 from "../../assets/images/icon/06.png";
import icon7 from "../../assets/images/icon/07.png";
import loader from "../../assets/images/page-img/page-load-loader.gif";
import boyImg from "../../assets/images/page-img/boy.webp";
import busImg from "../../assets/images/page-img/bus.webp";
import img11 from "../../assets/images/page-img/fd.webp";
import mountain from "../../assets/images/page-img/mountain.webp";
import pizza from "../../assets/images/page-img/pizza.webp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import bootstrapImg from "../../assets/images/icon/bootstrap-5.png";
import adsImg from "../../assets/images/page-img/ads.jpg";
import { FaPaperPlane } from 'react-icons/fa'; // Ajoutez cette ligne


// Story components
import Stories from "../../components/Stories";

// FsLightbox
import ReactFsLightbox from "fslightbox-react";

// Share-offcanvas
import ShareOffcanvasNew from "../../components/ShareOffcanvasNew";


//services


import { reactionService } from '../../services/ReactionService.js';
import { loadAllPosts } from '../../data/posts.js'
import { commentService } from "../../services/CommentService.js";




const FsLightbox = ReactFsLightbox.default
  ? ReactFsLightbox.default
  : ReactFsLightbox;

// import img from '../assets/images/user/1.jpg'

const Index2 = ({ post }) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);

  const [loadContent, setLoadContent] = useState(true);
  const [allPosts, setAllPosts] = useState([]);
  const [mainComment, setMainComment] = useState('');
  const [replyContents, setReplyContents] = useState({}); // Pour stocker les réponses à chaque commentaire
  const [isSubmittingMain, setIsSubmittingMain] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false); // Déclarez ici

  const [openComments, setOpenComments] = useState({}); // Un objet pour stocker l'état de chaque post
  const [replyingTo, setReplyingTo] = useState(null); // État pour suivre le commentaire en cours de réponse


  const toggleCommentSection = (postId) => {
    setOpenComments(prev => ({
      ...prev,
      [postId]: !prev[postId], // Inverse l'état d'ouverture du commentaire spécifique au post
    }));
  };


  const [imageController, setImageController] = useState({
    toggler: false,
    slide: 1,
  });
  function imageOnSlide(number) {
    setImageController({
      toggler: !imageController.toggler,
      slide: number,
    });
  }


  useEffect(() => {
    function handleScroll() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

        setTimeout(() => {
          setLoadContent(false);
        }, 2000);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  //All Posts

  useEffect(() => {
    const fetchData = async () => {
      const currentPostData = await loadAllPosts();
      if (currentPostData) {
        setAllPosts([currentPostData]);
        // console.log('Données utilisateur stockées dans le tableau :', currentPostData);
      } else {
        // console.log('Impossible de récupérer les données utilisateur.');
      }
    };

    fetchData();
  }, []);

  // console.log(allPosts);


  const DataPost = (Array.isArray(allPosts) ? allPosts : []).reduce((acc, user) => {
    acc.push({
      allPostData: user.data
    });
    return acc;
  }, []);


  // console.log('kkkkkkkkkkkkkk',DataPost);


  // Imprimer le tableau DataPost avant de le traiter
  console.log("DataPost:", DataPost); // Afficher le tableau original

  const Datas = (Array.isArray(DataPost) ? DataPost : []).reduce((acc, user) => {

    acc.push({ ...user });

    return acc;
  }, []);

  // console.log(Datas); // Afficher le tableau


  const formatage = (Array.isArray(Datas) ? Datas : []).reduce((acc, data) => {
    return {
      ...data.allPostData

    };
  }, {});

  // console.log('ffffffffffffff', formatage);



  const listes = (Array.isArray(formatage) ? formatage : []).reduce((acc, post) => {
    return [...acc, ...post.comments, ...post.media];
  }, []);

  //profile
  const retrievedData = localStorage.getItem('userData');

  // Vérifiez si des données ont été récupérées et parsez-les
  const DataFromStorage = retrievedData ? JSON.parse(retrievedData) : [];

  // Utilisation de DataFromStorage
  // console.log("Données kkkkkkkkkkkkkkkkkkkkkkkkkrécupérées :", DataFromStorage);

  const Profile = (Array.isArray(DataFromStorage) ? DataFromStorage : []).reduce((acc, data) => {
    return {
      ...data.ProfileData
    };
  }, {});
  const handleMainCommentSubmit = async (e, postId) => {
    e.preventDefault();
    setIsSubmittingMain(true);

    try {
      if (!postId) {
        console.error('Le post ID est manquant, impossible de soumettre le commentaire.');
        setIsSubmittingMain(false);
        return;
      }

      const commentData = { content: mainComment };
      await commentService.createComment(postId, commentData);
      // console.log('Commentaire principal soumis avec succès pour le post ID:', postId);

      // Réinitialiser le champ de commentaire
      setMainComment('');

      // Recharger les publications après soumission
      const currentPostData = await loadAllPosts();
      if (currentPostData) {
        setAllPosts([currentPostData]);
      }
    } catch (error) {
      // console.error('Erreur lors de la soumission du commentaire principal :', error);
    } finally {
      setIsSubmittingMain(false);
    }
  };

  const handleReplySubmit = async (commentId) => {
    setIsSubmitting(true);
    const replyContent = replyContents[commentId]?.trim() || ''; // Récupérer le contenu de la réponse

    console.log('Contenu de la réponse :', replyContent); // Log du contenu de la réponse

    if (!replyContent) {
      console.warn('Le contenu de la réponse est vide.'); // Log d'avertissement si le contenu est vide
      setIsSubmitting(false);
      return; // Si le contenu est vide, on ne fait rien
    }

    try {
      console.log('Soumission de la réponse pour le commentaire ID :', commentId); // Log avant la soumission
      // Soumission de la réponse via le service
      await commentService.createReply(commentId, { content: replyContent });
      console.log('Réponse soumise avec succès pour le commentaire ID :', commentId); // Log de succès

      // Réinitialiser le champ de réponse après une soumission réussie
      setReplyContents((prev) => ({ ...prev, [commentId]: '' }));
    } catch (error) {
      console.error('Erreur lors de la soumission de la réponse :', error); // Log de l'erreur
    } finally {
      setIsSubmitting(false);
      console.log('État de soumission réinitialisé.'); // Log après réinitialisation
      setReplyingTo(null); // Réinitialiser le commentaire en cours de réponse
    }
  };
  const handleReaction = async (currentPostId, reactionType) => {
    try {
      // Envoyer la réaction sélectionnée via le service approprié
      await reactionService.toggleReaction({
        postId: currentPostId, // ID du post concerné
        reactionType, // Type de la réaction : "like", "love", "happy", etc.
      });

      // Affiche une notification toast de succès
      toast.success(`Réaction "${reactionType}" envoyée avec succès !`, {
        position: 'top-center', // Position centrée en haut
        autoClose: 3000, // Ferme automatiquement après 3 secondes
      });

    } catch (error) {
      // Affiche une notification d'erreur si la requête échoue
      toast.error('Erreur lors de la gestion de la réaction.', {
        position: 'top-right', // Utilisez la chaîne directement
        autoClose: 3000,
      });
      console.error('Erreur lors de la gestion de la réaction :', error);
    }
  };

  // stories
  const stories = [
    {
      id: "yourstory",
      photo: user8,
      name: "Your Story",
      link: "https://ramon.codes",
      preview: [
        {
          storyid: "yourstory-1",
          type: "photo",
          length: 3,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
        {
          storyid: "yourstory-12",
          type: "video",
          length: 0,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "ali",
      photo: user1,
      name: "Ali",
      link: "",
      preview: [
        {
          storyid: "ali-1",
          type: "video",
          length: 0,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
        {
          storyid: "ali-2",
          type: "photo",
          length: 3,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },

        {
          storyid: "ali-3",
          type: "photo",
          length: 3,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
          link: "https://ramon.codes",
          linkText: "Visit my Portfolio",
          seen: "false",
        },
      ],
    },
    {
      id: "ammy",
      photo: user12,
      name: "Ammy",
      link: "",
      preview: [
        {
          storyid: "ammy-1",
          type: "photo",
          length: 5,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
        {
          storyid: "ammy-2",
          type: "photo",
          length: 3,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          link: "http://ladygaga.com",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "roger-1",
      photo: user3,
      name: "Roger",
      link: "",
      preview: [
        {
          storyid: "roger-1",
          type: "photo",
          length: 5,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "justin",
      photo: user11,
      name: "Justin",
      link: "",
      preview: [
        {
          storyid: "justin-1",
          type: "photo",
          length: 10,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
    {
      id: "sado",
      photo: user3,
      name: "Sado",
      link: "",
      preview: [
        {
          storyid: "sado-1",
          type: "photo",
          length: 10,
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          storypreview:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          link: "",
          linkText: "false",
          seen: "false",
        },
      ],
    },
  ]

  return (


    <>


      <div id="content-page" className="content-inner">
        <FsLightbox
          toggler={imageController.toggler}
          sources={[user5, boyImg, busImg, img11, mountain, pizza]}
          slide={imageController.slide}
        />
        <Container>
          <Row className="gx-4">
            <Col lg={8}>
              <div id="content">
                <Row>
                  <Col sm={12}>
                    <div className="mb-5">
                      <Stories stories={stories} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <CreatePost className="card-block card-stretch card-height" />
                  </Col>
                </Row>
                <Row className="special-post-container">
                  <Col sm={12} className="special-post">


                  </Col>
                  <Col sm={12} className="special-post">
                    <div className="card card-block card-stretch card-height">
                      <div className="card-body">


                        <div>

                          {Object.entries(formatage).map(([key, post]) => (


                            <div key={post.id} className="user-post mt-4">
                              { }
                              <div className="mt-4">
                                <p className="m-0">
                                </p>

                              </div>



                              <div className="w-100">
                                <div className="d-flex align-items-center justify-content-between">
                                  <div className="user-post-data">
                                    {/* Flex container for profile picture, name, and time */}
                                    <div className="d-flex justify-content-start align-items-center">
                                      {/* Profile Picture */}
                                      <div className="me-3 flex-shrink-0">
                                        <img
                                          className="border border-2 rounded-circle user-post-profile"
                                          src={post.user.profilePicture}
                                          alt=""
                                          style={{ width: '50px', height: '50px' }} // Adjust the size of the profile picture
                                        />
                                      </div>

                                      {/* User Name and Time */}
                                      <div className="w-100">
                                        <div className="d-flex flex-column">
                                          {/* Name and verification icon */}
                                          <div className="d-flex align-items-center">
                                            <h6 className="mb-0 text-dark fw-bold me-2">{post.user.name}</h6>
                                            <span className="text-primary">
                                              <svg
                                                className="align-text-bottom"
                                                width="17"
                                                height="17"
                                                viewBox="0 0 17 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M11.8457 0H4.34822C1.73547 0 0.0974121 1.84995 0.0974121 4.46789V11.5321C0.0974121 14.1501 1.72768 16 4.34822 16H11.8449C14.4663 16 16.0974 14.1501 16.0974 11.5321V4.46789C16.0974 1.84995 14.4663 0 11.8457 0Z"
                                                  fill="currentColor"
                                                />
                                                <path
                                                  d="M5.09741 7.99978L7.09797 9.9995L11.0974 6.00006"
                                                  stroke="white"
                                                  strokeWidth="1.5"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                />
                                              </svg>
                                            </span>
                                          </div>

                                          {/* Post Date and Time */}
                                          <div className="text-muted small">
                                            {new Date(post.createdAt).toLocaleDateString('fr-FR', {
                                              day: '2-digit',
                                              month: 'long',
                                              year: 'numeric',
                                              hour: '2-digit',
                                              minute: '2-digit',
                                            })}
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Post Content */}
                                    <div className="mt-2">
                                      <p className="text-dark text-capitalize" style={{ lineHeight: '1.6' }}>
                                        {post.content}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="card-post-toolbar">
                                    <Dropdown>
                                      <Dropdown.Toggle id="post-option" as="span" >
                                        <span className="material-symbols-outlined">more_horiz</span>
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="m-0 p-0">
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              save
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Save Post</h6>
                                              <p className="mb-0">
                                                Add this to your saved items
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className="p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              cancel
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Hide Post</h6>
                                              <p className="mb-0">
                                                See fewer posts like this.
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              person_remove
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Unfollow User</h6>
                                              <p className="mb-0">
                                                Stop seeing posts but stay
                                                friends.
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className=" p-3" to="#">
                                          <div className="d-flex align-items-top">
                                            <span className="material-symbols-outlined">
                                              notifications
                                            </span>
                                            <div className="data ms-2">
                                              <h6>Notifications</h6>
                                              <p className="mb-0">
                                                Turn on notifications for this
                                                post
                                              </p>
                                            </div>
                                          </div>
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </div>
                              </div>
                              <Link onClick={() => imageOnSlide(post.id)} to="#" className="rounded position-relative">
                                {post.media.length > 0 && (
                                  <img
                                    src={post.media[0].url}
                                    alt="post-images"
                                    className="img-fluid rounded w-100"
                                    loading="lazy"
                                  />
                                )}
                                {/* Afficher le compteur d'images supplémentaires */}
                                {post.media.length > 1 && (
                                  <span className="position-absolute top-0 end-0 bg-primary text-white rounded-full p-2" style={{ margin: '0.5rem', fontSize: '0.8rem' }}>
                                    <i className="fas fa-plus" aria-hidden="true"></i> {post.media.length - 1}
                                  </span>
                                )}
                              </Link>


                              <div className="post-meta-likes mt-4">
                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                  <ul className="list-inline m-0 p-0 post-user-liked-list">
                                    {post.reactions.slice(0, 4).map((reaction, index) => (
                                      <li key={index}>
                                        {post.media.length > 1 && (
                                          <img
                                            src={post.media[1].url}
                                            alt="userimg"
                                            className="rounded-circle img-fluid userimg"
                                            loading="lazy"
                                          />
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                  <div className="d-inline-flex align-items-center gap-1">
                                    <h6 className="m-0 font-size-14">{post.user.name}</h6>
                                    <span className="text-capitalize font-size-14 fw-medium">
                                      et {post.reactions.length} autres ont réagi
                                    </span>
                                  </div>
                                </div>
                              </div>




                              <div className="comment-area mt-4 pt-1 border-top">

                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                  <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                                    <div className="like-data">
                                      <div className="dropdown">
                                        <span
                                          className="dropdown-toggle"
                                          data-bs-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          role="button"
                                        >
                                          <span className="material-symbols-outlined align-text-top font-size-20">
                                            thumb_up
                                          </span>{" "}
                                          <span className="fw-medium"></span>
                                        </span>
                                        <div className="dropdown-menu py-2 shadow">
                                          <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>Aimer</Tooltip>}
                                            className="ms-2 me-2"
                                          >
                                            <img
                                              src={icon1}
                                              className="img-fluid me-2"
                                              alt="Like"
                                              onClick={() => handleReaction(post.id, 'like')} // Envoyer une réaction "Aimer"
                                            />
                                          </OverlayTrigger>

                                          <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>Amour</Tooltip>}
                                            className="me-2"
                                          >
                                            <img
                                              src={icon2}
                                              className="img-fluid me-2"
                                              alt="Amour"
                                              onClick={() => handleReaction(post.id, 'love')} // Envoyer une réaction "Amour"
                                            />
                                          </OverlayTrigger>

                                          <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>Heureux</Tooltip>}
                                            className="me-2"
                                          >
                                            <img
                                              src={icon3}
                                              className="img-fluid me-2"
                                              alt="Heureux"
                                              onClick={() => handleReaction(post.id, 'happy')} // Envoyer une réaction "Heureux"
                                            />
                                          </OverlayTrigger>

                                          <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>HaHa</Tooltip>}
                                            className="me-2"
                                          >
                                            <img
                                              src={icon4}
                                              className="img-fluid me-2"
                                              alt="HaHa"
                                              onClick={() => handleReaction(post.id, 'haha')} // Envoyer une réaction "HaHa"
                                            />
                                          </OverlayTrigger>

                                          <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>Triste</Tooltip>}
                                            className="me-2"
                                          >
                                            <img
                                              src={icon6}
                                              className="img-fluid me-2"
                                              alt="Triste"
                                              onClick={() => handleReaction(post.id, 'sad')} // Envoyer une réaction "Triste"
                                            />
                                          </OverlayTrigger>

                                          <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>Adorable</Tooltip>}
                                            className="me-2"
                                          >
                                            <img
                                              src={icon7}
                                              className="img-fluid me-2"
                                              alt="Adorable"
                                              onClick={() => handleReaction(post.id, 'lovely')} // Envoyer une réaction "Adorable"
                                            />
                                          </OverlayTrigger>
                                        </div>
                                        <ToastContainer
                                          position="top-center" // Positionnement du ToastContainer
                                          autoClose={3000} // Délai d'auto-fermeture
                                          hideProgressBar={false} // Affiche la barre de progression
                                          newestOnTop={false} // Les nouveaux toasts apparaissent en bas
                                          closeOnClick // Ferme le toast sur clic
                                          rtl={false} // Pas en mode RTL
                                          pauseOnFocusLoss // Met le toast en pause quand la fenêtre est hors focus
                                          draggable // Rendre le toast déplaçable
                                          pauseOnHover // Met le toast en pause au survol
                                        />

                                      </div>
                                    </div>
                                  </div>

                                  <div className="d-flex align-items-center gap-3 ">


                                    
                                  <ShareOffcanvasNew show={modalShow1} onHide={() => setModalShow1(false)} />
                                    <div className="post-actions-and-comments">
                                      {/* Boutons d'action (like, commentaire, partage) */}
                                      <div className="post-actions d-flex justify-content-between align-items-center mb-3">
                                      <div
                                      className="total-comment-block"
                                      type="button"
                                      aria-controls={`commentcollapes-${post.id}`} // Identifiant unique pour chaque post
                                      aria-expanded={openComments[post.id] || false} // Vérifie si les commentaires de ce post sont ouverts
                                      onClick={() => toggleCommentSection(post.id)} // Gère l'ouverture spécifique au post
                                       >
                                      <span className="material-symbols-outlined align-text-top font-size-20">
                                        comment
                                      </span>{" "}
                                      <span className="fw-medium">{post.commentsCount} Comment</span>
                                    </div>

                                    <div className="share-block d-flex align-items-center feather-icon">
                                      <Link
                                        to="#"
                                        onClick={() => setModalShow1(true)}
                                        aria-controls="share-btn"
                                        className="d-flex align-items-center"
                                      >
                                        <span className="material-symbols-outlined align-text-top font-size-20">
                                          share
                                        </span>
                                        <span className="ms-1 fw-medium">{post.sharesCount} Share</span>
                                      </Link>
                                    </div>

                                      </div>

                                      {/* Section des commentaires */}
                                      <Collapse in={openComments[post.id]}>
                                        <div id={`commentcollapes-${post.id}`} className="border-top mt-4 pt-4">
                                          <div className="post bg-white shadow-md rounded-lg p-4 mb-4 w-100">
                                            {/* Formulaire pour le commentaire principal */}
                                            <form onSubmit={(e) => handleMainCommentSubmit(e, post.id)} className="w-100">
                                              <input
                                                type="text"
                                                placeholder="Écrire un commentaire..."
                                                className="form-control border-0 rounded bg-white shadow-sm w-100"
                                                value={mainComment}
                                                onChange={(e) => setMainComment(e.target.value)}
                                                disabled={isSubmittingMain}
                                              />
                                              <button
                                                type="submit"
                                                className="btn btn-primary font-size-12 text-capitalize mt-2 w-100"
                                                disabled={!mainComment.trim() || isSubmittingMain}
                                              >
                                                {isSubmittingMain ? 'Envoi...' : 'Envoyer'}
                                              </button>
                                            </form>

                                            {/* Section de commentaires avec scroll */}
                                            <div
                                              style={{
                                                maxHeight: '300px',
                                                overflowY: 'auto',
                                                maxWidth: '100%',
                                                backgroundColor: '#f8f9fa',
                                                padding: '15px',
                                                borderRadius: '8px',
                                                marginTop: '20px'
                                              }}
                                              className="comment-list mt-3"
                                            >
                                              <ul className="list-unstyled m-0 p-0">
                                                {post.comments && post.comments.map((comment) => (
                                                  <li key={comment.id} className="mb-4">
                                                    <div className="comment-block bg-white p-3 rounded shadow-sm">
                                                      <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                          <img
                                                            src={Profile.profilePicture}
                                                            alt="userimg"
                                                            className="avatar-40 rounded-circle"
                                                            loading="lazy"
                                                          />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                          <div className="d-flex justify-content-between align-items-center mb-1">
                                                            <h6 className="mb-0 fw-bold">Utilisateur</h6>
                                                            <small className="text-muted">
                                                              {new Date(comment.createdAt).toLocaleDateString('fr-FR', {
                                                                day: '2-digit',
                                                                month: 'long',
                                                                year: 'numeric',
                                                                hour: '2-digit',
                                                                minute: '2-digit',
                                                              })}
                                                            </small>
                                                          </div>
                                                          <p className="mb-2">{comment.content}</p>
                                                          <div className="d-flex justify-content-between align-items-center">
                                                            <button
                                                              className="btn btn-link text-muted p-0"
                                                              onClick={() => setReplyingTo(comment.id)}
                                                            >
                                                              Répondre
                                                            </button>
                                                          </div>

                                                          {/* Zone de réponse */}
                                                          {replyingTo === comment.id && (
                                                            <div className="mt-3">
                                                              <form
                                                                onSubmit={(e) => {
                                                                  e.preventDefault();
                                                                  handleReplySubmit(comment.id);
                                                                }}
                                                              >
                                                                <div className="d-flex gap-2">
                                                                  <input
                                                                    type="text"
                                                                    placeholder="Écrire une réponse..."
                                                                    className="form-control flex-grow-1"
                                                                    value={replyContents[comment.id] || ''}
                                                                    onChange={(e) =>
                                                                      setReplyContents((prev) => ({
                                                                        ...prev,
                                                                        [comment.id]: e.target.value,
                                                                      }))
                                                                    }
                                                                    disabled={isSubmitting}
                                                                  />
                                                                  <button
                                                                    type="submit"
                                                                    className={`btn btn-primary ${isSubmitting ? 'disabled' : ''}`}
                                                                    disabled={isSubmitting}
                                                                  >
                                                                    {isSubmitting ? 'Envoi...' : 'Envoyer'}
                                                                  </button>
                                                                </div>
                                                              </form>
                                                            </div>
                                                          )}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </Collapse>
                                    </div>

                                  </div>
                                </div>

                              </div>
                            </div>


                          ))}

                        </div>


                      </div>
                    </div>
                  </Col>


                </Row>
              </div>
            </Col>

            <Col lg={4}>
              <Card>
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title text-capitalize">active users</h4>
                  </div>
                </div>
                <Card.Body className="pt-0">
                  <ul className="list-inline m-0 p-0">
                    <li className="d-flex align-items-center gap-3 mb-3">
                      <img
                        src={user01}
                        alt="story-img"
                        className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
                      />
                      <div>
                        <h5 className="d-inline-block">Arina Event</h5>
                        <span className="profile-status-online"></span>
                        <small className="text-capitalize d-block">
                          Active
                        </small>
                      </div>
                    </li>


                  </ul>
                </Card.Body>
              </Card>

              {/* <div className="fixed-suggestion mb-0 mb-lg-4">
                <Card>
                  <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title">Suggestions for you</h4>
                    </div>
                    <small className="fw-500 text-capitalize">See all</small>
                  </div>
                  <Card.Body className="pt-0">
                    <ul className="list-inline m-0 p-0">
                      <li className="mb-3">
                        <div className="d-flex align-items-center gap-2 justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={user14}
                              alt="story-img"
                              className="avatar-60 avatar-borderd object-cover avatar-rounded img-fluid d-inline-block"
                            />
                            <div>
                              <h5>Annette Black</h5>
                              <div className="d-flex align-items-center justify-content-between gap-2">
                              </div>
                              <small className="text-capitalize">
                                Followed by dribbble + 2 more
                              </small>
                            </div>
                          </div>
                          <div className="d-flex align-items-center flex-shrink-0 gap-2">
                            <button className="btn btn-primary-subtle p-1 lh-1">
                              <i className="material-symbols-outlined font-size-14">
                                add
                              </i>
                            </button>
                            <button className="btn btn-danger-subtle p-1 lh-1">
                              <i className="material-symbols-outlined font-size-14">
                                close
                              </i>
                            </button>
                          </div>
                        </div>
                      </li>
                     
                  
                    </ul>
                  </Card.Body>
                </Card>


              </div> */}
            </Col>

          </Row>
        </Container>


      </div>
    </>
  );
};

export default Index2;
