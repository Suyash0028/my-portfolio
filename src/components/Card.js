import React, { useState } from 'react';

const Card = ({ title, content, maxContentLength }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>

                {expanded || content.length <= maxContentLength ? (
                    <p className="card-text">{content}</p>
                ) : (
                    <div>
                        <p className="card-text">{`${content.substring(0, maxContentLength)}...`}</p>
                        <button className="btn btn-link" onClick={handleExpand}>
                            Read more
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;