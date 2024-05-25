import React from 'react';
import SingleCount from '../../../components/SingleCount/SingleCount';

const HomeTwoCounter = () => {
    return (
        <>
            <section className="counter__area counter__area-2 pt-85 pb-85">
                <div className="container">
                    <div className="row">
                        <SingleCount counter={2} title="Happy Clients" color="blue-2-color" />
                        <SingleCount counter={10} title="Times Faster" color="pink-color" />
                        <SingleCount counter={50} title="% Less Cost" color="green-4-color" />
                        <SingleCount counter={98} title="% Accuracy"  color="orange-color" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTwoCounter;