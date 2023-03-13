import "./Result.sass";
import React from "react";
import TwitterIcon from "../assets/images/icon-twitter.svg";
import LocationIcon from "../assets/images/icon-location.svg";
import CompanyIcon from "../assets/images/icon-company.svg";
import WebsiteIcon from "../assets/images/icon-website.svg";

interface Props {
  user: {
    avatar_url: string;
    name: string;
    created_at: string;
    html_url: string;
    login: string;
    public_repos: number;
    followers: number;
    following: number;
    location: string | null;
    bio: string | null;
    twitter_username: string | null;
    blog: string | null;
    company: string | null;
  };
}

const Result: React.FC<Props> = ({ user }) => {
  return (
    <article className="profile">
      <header>
        <img className="user-avatar" src={user.avatar_url} alt="User Avatar" />
        <div className="user-info">
          <div className="user-name">
            <h1>{user.name}</h1>
            <a className="login" href={user.html_url} target="_blank">
              @{user.login}
            </a>
          </div>
          <p className="joined-date">
            {"Joined " +
              new Date(user.created_at)?.toLocaleDateString("us", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
          </p>
        </div>
      </header>
      <section className={user.bio ? "bio available" : "bio not-available"}>
        {user.bio || "This profile has no bio"}
      </section>
      <section className="statistic">
        <div>
          <p>Repos</p>
          <span>{user.public_repos}</span>
        </div>
        <div>
          <p>Followers</p>
          <span>{user.followers}</span>
        </div>
        <div>
          <p>Flowing</p>
          <span>{user.following}</span>
        </div>
      </section>
      <footer className="links">
        <div>
          <a
            href={`https://maps.google.com/?q= ${user.location}`}
            target="_blank"
            className={user.location ? "available" : "not-available"}
          >
            <img src={LocationIcon} alt="Location Icon" />
            {user.location || "Not Available"}
          </a>
        </div>
        <div>
          <a
            href={`https://twitter.com/search/?q=${user.twitter_username}`}
            target="_blank"
            className={user.twitter_username ? "available" : "not-available"}
          >
            <img src={TwitterIcon} alt="Twitter Icon" />
            {user.twitter_username || "Not Available"}
          </a>
        </div>
        <div>
          <a
            href={user.blog || "#"}
            target="_blank"
            className={user.blog ? "available" : "not-available"}
          >
            <img src={WebsiteIcon} alt="Blog Icon" />
            {user.blog || "Not Available"}
          </a>
        </div>
        <div>
          <a
            href={`https://www.google.com/search?q=${user.company}`}
            target="_blank"
            className={user.company ? "available" : "not-available"}
          >
            <img src={CompanyIcon} alt="Company Icon" />
            {user.company || "Not Available"}
          </a>
        </div>
      </footer>
    </article>
  );
};

export default Result;
