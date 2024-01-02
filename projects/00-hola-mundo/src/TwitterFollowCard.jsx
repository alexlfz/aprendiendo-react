import './App.css'

export function TwitterFollowCard({ userName = 'unknown', children, isFollowing}) {

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    src={`https://unavatar.io/${userName}`} 
                    className="tw-followCard-avatar"
                />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}