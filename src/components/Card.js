import React, { useState } from 'react';

const Card = ({ title, content, maxContentLength }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>

            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>

                    {expanded ? (
                        <p className="card-text">{content}</p>
                    ) : (
                        <div>
                            {content.length > maxContentLength ? (
                                <>
                                    {`${content.substring(0, maxContentLength)}...`}
                                    <br />
                                    <button className="btn btn-primary" onClick={handleExpand} >Read more</button>
                                </>
                            ) : (
                                <p className="card-text">{content}</p>
                            )}
                        </div>
                    )}
                </div>
            </div>

        </>

    );
};

export default Card;
