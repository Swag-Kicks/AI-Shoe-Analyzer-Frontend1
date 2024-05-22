import React, { useState } from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css'; 
import Slider from "react-slick";
import "./styles.css"



const DesignDashboard = () => {
 


    return (
        <>
    <div id='tog-sidebar'>
   
        <div className="row mt-40">
            <div className="col-xl-12">
                <Slider className='project__slider'>
                {/* grey-bg-15 */}
                    <div className="project__item uploadheading"> 
                        <div className="project__content">
                            <div className="foropacity" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <h1 style={{color:"white"}}>Dashboard</h1>
                              
                            </div>
                        </div>
                        <div className="project__thumb m-img foropacity" >
                            Shoe Analysis: Detecting shoe flaws and evaluating condition accurately.
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
      

</div>
     
        </>
    );
};

export default DesignDashboard;
