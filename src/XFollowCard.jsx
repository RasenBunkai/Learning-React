import { useState } from 'react';
import PropTypes from 'prop-types';
export function XFollowCard({userName, name}) {
    const [isFollowing,setIsFollowing ] = useState(false);
    const text = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = isFollowing
    ? 'follow-card-button is-following'
    : 'follow-card-button';
    const handleClic = () =>{
        setIsFollowing(!isFollowing);
    }
    const addAt = (userName) => `@${userName}`
    return(
    <article className='follow-card'>
        <header className='follow-card-header'>
            <img
            className='follow-card-icon'
            src={`https://unavatar.io/${userName}`}
            alt="IconImg"
            />
            <div className='follow-card-info'>
                <strong>{name}</strong>
                <span className='follow-card-username'>{addAt(userName)}</span>
            </div>
        </header>
            <aside>
                <button className={buttonClassName} onClick={handleClic}>
                    <span className='button-follow'>{text}</span>
                    <span className='button-unfollow'>Unfollow</span>
                </button>
            </aside>
    </article>
    );
};
XFollowCard.propTypes = {
    userName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired
};