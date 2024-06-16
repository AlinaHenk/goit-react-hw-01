import css from "./Profile.module.css";

export default function Profile({
  userData: { username, tag, location, avatar, stats },
}) {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <div className={css.mainInfo}>
          <div className={css.avatarWrapper}>
            <img className={css.avatar} src={avatar} alt="User avatar" />
          </div>
          <p className={css.name}>{username}</p>
          <p className={css.tag}>{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
        <ul className={css.bottomLine}>
          <li className={css.bottomItem}>
            <span>Followers</span>
            <span className={css.boldItem}>{stats.followers}</span>
          </li>
          <li className={css.bottomItem}>
            <span>Views</span>
            <span className={css.boldItem}>{stats.views}</span>
          </li>
          <li className={css.bottomItem}>
            <span>Likes</span>
            <span className={css.boldItem}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
