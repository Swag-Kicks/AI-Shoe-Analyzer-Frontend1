import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Slider from "react-slick";
import { FaEye, FaCheck, FaTimes, FaTrashAlt } from 'react-icons/fa'; 
import "./styles.css";
import { AiOutlineDelete } from 'react-icons/ai';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';


const ImageCard = ({ imageUrl }) => {
    return (
      <div className="image-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
    );
};

const ProductInspection = () => {
    const [inputs, setInputs] = useState({ email: '', password: '', username: '' });
    const { email, password, username } = inputs;
    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
      };
    return (
        <div id='tog-sidebar'>
            <div className="row mt-40">
                <div className="col-xl-12">
                    <Slider className='project__slider'>
                        <div className="project__item uploadheading"> 
                            <div className="project__content">
                                <div className="foropacity" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <h1 style={{color:"white"}}>Product Inspection</h1>
                                </div>
                            </div>
                            <div className="project__thumb m-img foropacity">
                                Shoe Analysis: Detecting shoe flaws and evaluating condition accurately.
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

            <div className="row mt-40 justify-content-center">
                <div className="col-xl-10">
                    <div className="table-responsive mx-auto">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Brand</th>
                                    <th>Damages</th>
                                    <th>Condition</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example row, replace with dynamic data */}
                                <tr>
                                    <td>Response 1</td>
                                    <td>Skechers</td>
                                    <td>Scuff, Destressed</td>
                                    <td>8</td>
                                    <td>
                                        <button className="btn btn-primary mr-10 mb-5" title="View"><FaEye /></button>
                                        <button className="btn btn-success mr-10 mb-5" title="Accept"><FaCheck /></button>
                                        <button className="btn btn-danger mb-5" title="Reject"><FaTimes /></button>
                                    </td>

                                </tr>
                                {/* Add more rows here */}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            
            <div className="about__area-2 pt-130 ">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-xl-4 col-lg-6" style={{alignContent:"center"}}>
                        <div className=" p-relative m-img">
                            <main>
                   
                 
                                <ImageCard imageUrl= "https://res.cloudinary.com/dkkv1pkcu/image/upload/v1716252376/wfj3f0kqigvfk1ypk2bs.jpg" />
                                <ImageCard imageUrl="https://res.cloudinary.com/dkkv1pkcu/image/upload/v1716252378/cqyce9hlklgqieph7ium.jpg" />
                                <ImageCard imageUrl="https://res.cloudinary.com/dkkv1pkcu/image/upload/v1716252378/pr1pclsboqmutdd7m44v.jpg" />
                                <ImageCard imageUrl= "https://res.cloudinary.com/dkkv1pkcu/image/upload/v1716252379/upgbsoyhsgbtiwtsgtvl.jpg" />
                                <ImageCard imageUrl= "https://res.cloudinary.com/dkkv1pkcu/image/upload/v1716252377/ddv0bky1szdknssxgfgj.jpg" />
                            </main>
                        </div>
                     </div>
                <div className="col-xl-5 col-lg-6" style={{alignContent:"center"}}>
                    <div className="about__content">
                        <div className="section__title section__title-3 mb-25">
                            <h2>Shoe Condition Details</h2>
                                </div>
                                <div className="about__list">
                                    <ul>
                                    <span className="d-block"><h3>Brand</h3></span>
                                        <li class="list-group-item">brand</li>
                                        <span className="d-block"><h3>Damage</h3> </span>
                                        <ul class="list-group">
                                        <li class="list-group-item">Left
                                            <ul class="list-group">
                                            <li className="list-group-item">Scuff</li> 
                                           
                                            </ul>
                                        </li>
                                        <li class="list-group-item">Right
                                            <ul class="list-group">
                                                <li class="list-group-item">Scuff</li>
                                                
                                            </ul>
                                        </li>
                                        <li class="list-group-item"> Bottom
                                            <ul class="list-group">
                                                <li class="list-group-item">Distressed</li>
                                            </ul>
                                        </li>
                                        <li class="list-group-item"> Back
                                            <ul class="list-group">
                                                <li class="list-group-item">Distressed</li>
                                            </ul>
                                        </li>
                                        <li class="list-group-item"> Front
                                            <ul class="list-group">
                                                <li class="list-group-item">Distressed</li>
                                                <li class="list-group-item">Scuff</li>
                                            </ul>
                                        </li>
                                        <button className="login-btn"> 
                                           Evalaute
                                        </button>
                                        <br/>
                                    </ul>
                                    <span className="d-block"><h3>Condition</h3></span>
                                        <li class="list-group-item">8</li>
                                     </ul>
                                </div>
                          
                        </div>
                    </div>    
                </div>
            </div> 
        </div>
    );
};

export default ProductInspection;
