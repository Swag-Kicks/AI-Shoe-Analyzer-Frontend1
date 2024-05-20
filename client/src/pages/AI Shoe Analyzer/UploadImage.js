import React, { useState } from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css'; 
import Slider from "react-slick";
import "./styles.css"

const ImageCard = ({ imageUrl }) => {
    return (
      <div className="image-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
    );
};

async function uploadImageToCloudinary(images) {
    try {
        const resultArray = [];
  
        for (let i = 0; i < images.length; i++) {
            const formData = new FormData();
            formData.append('file', images[i]);
            formData.append('upload_preset', 'Areesha');
            formData.append('Cloud_name', 'dkkv1pkcu');

            const uploadResponse = await fetch("https://api.cloudinary.com/v1_1/dkkv1pkcu/image/upload", {
                method: "post",
                body: formData
            });

            const uploadData = await uploadResponse.json();
            const imageUrl = uploadData.secure_url;
            resultArray.push(imageUrl);
        }
  
        return resultArray;
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        throw error;
    }
}

async function GetResults (imageUrls){
    const results = imageUrls.reduce((acc, url, index) => {
      acc[index] = url;
      return acc;
    }, {});
     console.log("Get results ",results);
    try {
      const response = await fetch('http://localhost:5000/getresults', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(results),
      });
  
      if (response.ok) {
        const resultData = await response.json();
        console.log('Result Data:', resultData);
        alert('Result Data:', resultData);
        // Handle the result data as needed
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Error processing images: ' + (errorData.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Request Error:', error);
      alert('An error occurred while processing the images.');
    }
  };
  

const UploadImagesscreen = () => {
    const [imagesUpload, setImagesUpload] = useState(false);
    const [detection, setDetection] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [result, setResult] = useState([]);

    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length !== 5) {
            alert('Please select exactly 5 images.');
            return;
        }

        const selected = [];

        // Use Promise.all to ensure all files are read before updating the state
        await Promise.all(
            files.map((file, index) => {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        selected[index] = e.target.result;
                        resolve();
                    };
                    reader.readAsDataURL(file);
                });
            })
        );

        setSelectedImages(selected);
        setImagesUpload(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(selected);

            const result = await uploadImageToCloudinary(files);

            console.log(result);
            setResult(result);

            alert("Images Upload Successful");

            const getresult = await GetResults(result);
            console.log(getresult);

            setDetection(true);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div id='tog-sidebar'>
                <div className="row mt-40">
                    <div className="col-xl-12">
                        <Slider className='project__slider'>
                            <div className="project__item uploadheading"> 
                                <div className="project__content">
                                    <div className="foropacity" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <h1 style={{color:"white"}}>Product Analysis</h1>
                                    </div>
                                </div>
                                <div className="project__thumb m-img foropacity">
                                    Shoe Analysis: Detecting shoe flaws and evaluating condition accurately.
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div>
                    <section className="services__area-1 mt-40 pt-20 pb-140 p-relative  mt-40  mr-25" style={{ background: `url(assets/img/bg/wave-bg-3.png)`, backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
                        <h2 style={{color:"#1f1841", margin:"50px"}}><center> Upload Shoe Images</center> </h2>
                        <div className="container">
                            {imagesUpload ? (
                                <div className="row g-2 sizing" style={{ display: "flex", justifyContent: "center" }}>
                                    <main>
                                        {selectedImages.map((image, index) => (
                                            <ImageCard key={index} imageUrl={image} />
                                        ))}
                                    </main>
                                </div>
                            ) : (
                                <div className="row g-2 sizing" style={{ display: "flex", justifyContent: "center" }}>
                                    <main>
                                        <ImageCard imageUrl="assets/img/case/1.png" />
                                        <ImageCard imageUrl="assets/img/case/2.png" />
                                        <ImageCard imageUrl="assets/img/case/3.png" />
                                        <ImageCard imageUrl="assets/img/case/4.png" />
                                        <ImageCard imageUrl="assets/img/case/5.png" />
                                    </main>
                                </div>
                            )}
                            <div style={{ textAlign: "center", marginTop: "20px" }}>
                                <input type="file" accept="image/*" multiple onChange={handleFileChange} style={{ display: "none" }} id="fileInput" />
                                <label htmlFor="fileInput" className="btn btn-primary">Upload Images</label>
                            </div>

                            <div className="about__area-2 pt-130">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-6">
                                        <div className="about__thumb-2 p-relative m-img">
                                            <img src="assets/img/about/Analysis_.png" alt="" />
                                        </div>
                                    </div>
                                    {detection ? (
                                        <div className="col-xl-5 col-lg-6">
                                            <div className="about__content">
                                                <div className="section__title section__title-3 mb-25">
                                                    <h2>Shoe</h2>
                                                </div>
                                                <p>Welcome.</p>
                                                <div className="about__list">
                                                    <ul>
                                                        <li><span><i><FaCheck /></i>Brand Recognition: Nike</span></li>
                                                        <li><span><i><FaCheck /></i>Damage Detection: Scuff</span></li>
                                                        <li><span><i><FaCheck /></i>Overall Condition Analysis: 10</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="col-xl-5 col-lg-6">
                                            <div className="about__content">
                                                <div className="section__title section__title-3 mb-25">
                                                    <h2>Enhancing Shoe Inspection</h2>
                                                </div>
                                                <p>In today's dynamic shoe market, stay ahead with our AI Shoe Analyzer.</p>
                                                <div className="about__list">
                                                    <ul>
                                                        <li><span><i><FaCheck /></i>Brand Recognition</span></li>
                                                        <li><span><i><FaCheck /></i>Damage Detection</span></li>
                                                        <li><span><i><FaCheck /></i>Overall Condition Analysis</span></li>
                                                    </ul>
                                                </div>
                                                <Link to="/about" className="z-btn">What we do<i><CgArrowLongRight /></i></Link>
                                            </div>
                                        </div>
                                    )}

                                    {detection && (
                                        <div>
                                            <br /><br />
                                            <h3 style={{ color: "#1f1841" }}><center>Images After Damage Detection</center> </h3>
                                            <br />
                                            <div className="row g-2" style={{ display: "flex", justifyContent: "center" }}>
                                                <main>
                                                    {result.map((image, index) => (
                                                        <ImageCard key={index} imageUrl={image} />
                                                    ))}
                                                </main>
                                            </div>

                                            <div style={{ textAlign: "center", marginTop: "20px" }}>
                                                <br />
                                                <button className="z-btn">Save Result</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default UploadImagesscreen;
