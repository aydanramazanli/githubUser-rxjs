
import Data from "./Data";
import Followers from "./Followers";
import Details from "./Details";
const Main = ({
  login,
  avatar_url,
  followers_url,
  name,
  public_repos,
  public_gists,
  followers,
  bio,
  html_url,
  company,
  blog,
  location,
  twitter_username,
  following,
  repos_url
}) => (
  <>
    <Data
      repos={public_repos}
      gists={public_gists}
      followers={followers}
      following={following}
    />
    <div className="container flex items-center justify-between">
    <Followers url={followers_url} />
  <Details url={avatar_url} name={name} company={company} blog={blog} bio={bio} location={location} username={twitter_username} html_url={html_url}/>
 
    </div>
   
  </>
);

export default Main;
