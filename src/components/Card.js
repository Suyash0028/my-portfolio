import React, { useState } from 'react';

const Card = ({ title, content, maxContentLength, link }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const handleCollapse = () => {
        setExpanded(false);
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
                        <button className="btn m-2" onClick={handleExpand} style={{backgroundColor: "#6c757d"}}>
                            Read more
                        </button>
                        <a className="btn btn-success" href={link} style={{backgroundColor: "#007bff"}}>
                            Open
                        </a>
                    </div>
                )}
                {expanded && (
                    <button className="btn btn-danger ml-3" onClick={handleCollapse}>
                        Collapse
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;