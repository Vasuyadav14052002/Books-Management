import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Flame, Users, BookOpen, MessageSquare, ChevronRight, Hash, Star } from 'lucide-react';
import { books } from './data';

export function CommunityPage() {
  return (
    <main className="page commLayout">
      <div className="commHeader">
        <div className="chHero">
          <small>READING IS BETTER TOGETHER</small>
          <h1>Community</h1>
          <p>Join clubs, read reviews, and talk about the books you can't put down.</p>
        </div>
        <div className="chSearch">
          <Search size={18}/>
          <input placeholder="Search clubs, discussions or members..."/>
          <button className="primaryBtn">Search</button>
        </div>
      </div>
      <div className="commGrid">
        <div className="commMain">
          <div className="commSection">
            <div className="sectionHead row">
              <h2>Trending Discussions</h2>
              <Link to="/community/discussions">View all <ChevronRight size={16}/></Link>
            </div>
            <div className="discussList">
              <div className="discussCard">
                <div className="dcMeta">
                  <div className="badge"><Hash size={12}/> SciFi</div>
                  <span>Posted 2 hours ago by <b>Arjun R.</b></span>
                </div>
                <h3>The ending of Project Hail Mary - let's talk!</h3>
                <p>I just finished the book and I'm still processing it. The way Andy Weir handled the relationship between Grace and Rocky was just incredible. Did anyone else feel like the final chapter was a bit rushed though?</p>
                <div className="dcFooter">
                  <span><MessageSquare size={14}/> 42 Replies</span>
                  <span><Flame size={14}/> Hot</span>
                </div>
              </div>
              <div className="discussCard">
                <div className="dcMeta">
                  <div className="badge"><Hash size={12}/> Classics</div>
                  <span>Posted 5 hours ago by <b>Meera N.</b></span>
                </div>
                <h3>Why isn't 1984 considered more terrifying today?</h3>
                <p>Rereading it for the 3rd time and it hits different now. What are your thoughts on the updated introductions in the new editions?</p>
                <div className="dcFooter">
                  <span><MessageSquare size={14}/> 18 Replies</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="commSection">
            <div className="sectionHead row">
              <h2>Recent Reviews</h2>
              <Link to="/community/reviews">View all <ChevronRight size={16}/></Link>
            </div>
            <div className="reviewGrid">
              <div className="revCard">
                <div className="rcUser">
                  <div className="avatar">KB</div>
                  <div>
                    <b>Kabir Bose</b>
                    <span>Reviewed <Link to={`/book/${books[4].id}`}>{books[4].title}</Link></span>
                  </div>
                </div>
                <div className="rcStars"><Star fill="#ca5d40" color="#ca5d40" size={14}/><Star fill="#ca5d40" color="#ca5d40" size={14}/><Star fill="#ca5d40" color="#ca5d40" size={14}/><Star fill="#ca5d40" color="#ca5d40" size={14}/><Star fill="#ca5d40" color="#ca5d40" size={14}/></div>
                <p>"Absolutely stunning. The prose is beautiful and the pacing kept me up until 3 AM. A must read for anyone."</p>
              </div>
              <div className="revCard">
                <div className="rcUser">
                  <div className="avatar">JD</div>
                  <div>
                    <b>Jane Doe</b>
                    <span>Reviewed <Link to={`/book/${books[0].id}`}>{books[0].title}</Link></span>
                  </div>
                </div>
                <div className="rcStars"><Star fill="#ca5d40" color="#ca5d40" size={14}/><Star fill="#ca5d40" color="#ca5d40" size={14}/><Star fill="#ca5d40" color="#ca5d40" size={14}/><Star fill="#ca5d40" color="#ca5d40" size={14}/></div>
                <p>"Very informative, though some chapters dragged on. Good for beginners."</p>
              </div>
            </div>
          </div>
        </div>
        
        <aside className="commSidebar">
          <div className="commSideCard">
            <h3>Active Clubs</h3>
            <div className="clubList">
              <div className="clubItem">
                <div className="ciIcon" style={{background: '#dcebe2', color: '#285645'}}><BookOpen size={18}/></div>
                <div className="ciInfo">
                  <b>Sci-Fi Saturdays</b>
                  <span>1.2k members</span>
                </div>
                <button className="ghostBtn">Join</button>
              </div>
              <div className="clubItem">
                <div className="ciIcon" style={{background: '#f3e1d9', color: '#a84830'}}><Users size={18}/></div>
                <div className="ciInfo">
                  <b>Non-Fiction Fanatics</b>
                  <span>850 members</span>
                </div>
                <button className="ghostBtn">Join</button>
              </div>
            </div>
            <button className="fullBtn">View all clubs</button>
          </div>
          
          <div className="commSideCard">
            <h3>Top Contributors</h3>
            <div className="leaderboard">
              <div className="lbItem">
                <b>1</b>
                <div className="avatar">AK</div>
                <div className="lbInfo">
                  <b>Amit Kumar</b>
                  <span>342 points</span>
                </div>
              </div>
              <div className="lbItem">
                <b>2</b>
                <div className="avatar">RN</div>
                <div className="lbInfo">
                  <b>Riya N.</b>
                  <span>298 points</span>
                </div>
              </div>
              <div className="lbItem">
                <b>3</b>
                <div className="avatar">JD</div>
                <div className="lbInfo">
                  <b>Jane Doe</b>
                  <span>245 points</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
