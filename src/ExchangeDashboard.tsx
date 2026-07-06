import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, ShoppingBag, Package, Wallet, Bell, MessageCircle, User, Settings, Repeat2, BookOpen, 
  Star, ChevronRight, Check, Award, ArrowRight, BookPlus, Search, ScanLine, 
  Activity, ArrowUpRight, ArrowDownRight, Clock, MapPin, Leaf, TrendingUp, Plus
} from 'lucide-react';
import { books } from './data';

export function ExchangeDashboard() {


  return (
    <main className="page">
      <div className="pageTitle">
        <small>YOUR BOOKLOOP</small>
        <h1>Exchange</h1>
        <p>Trade stories, not just books. Manage your marketplace activity.</p>
      </div>

      <div className="dashboardContent" style={{ marginTop: '45px' }}>
          {/* Profile & Badges Header */}
          <div className="profileCompletionBanner">
            <div className="profileInfo">
              <div className="profileAvatar">AS</div>
              <div>
                <h2>Arjun's Reading Room</h2>
                <span><Star size={14} fill="currentColor" /> 4.9 Reader Rating</span>
              </div>
            </div>
            <div className="badgesContainer">
              <div className="badgeCard">
                <Award size={18} />
                <div>
                  <b>Top Exchanger</b>
                  <span>Unlocked this month</span>
                </div>
              </div>
              <div className="profileProgress">
                <div><span>Profile completion</span><b>80%</b></div>
                <div className="progressBar"><div style={{ width: '80%' }}></div></div>
              </div>
            </div>
          </div>

          {/* Expanded Statistics Grid */}
          <div className="dashboardStatsGrid">
            <div className="statCard">
              <div className="statIcon"><BookOpen size={18} /></div>
              <div className="statData">
                <span>Books Listed</span>
                <b>24</b>
                <small className="positive"><TrendingUp size={12}/> 3 this week</small>
              </div>
            </div>
            <div className="statCard">
              <div className="statIcon" style={{background: '#eef4f0', color: '#287158'}}><Repeat2 size={18} /></div>
              <div className="statData">
                <span>Books Exchanged</span>
                <b>18</b>
                <small className="positive"><TrendingUp size={12}/> 6 this year</small>
              </div>
            </div>
            <div className="statCard">
              <div className="statIcon" style={{background: '#f3e1d9', color: '#a84830'}}><Wallet size={18} /></div>
              <div className="statData">
                <span>Wallet Credits</span>
                <b>₹2,480</b>
                <small>Available to spend</small>
              </div>
            </div>
            <div className="statCard">
              <div className="statIcon" style={{background: '#fff2cd', color: '#b2860b'}}><Star size={18} /></div>
              <div className="statData">
                <span>Reader Rating</span>
                <b>4.9</b>
                <small>From 42 interactions</small>
              </div>
            </div>
            <div className="statCard">
              <div className="statIcon" style={{background: '#f3e6ed', color: '#904576'}}><Heart size={18} /></div>
              <div className="statData">
                <span>Wishlist Count</span>
                <b>12</b>
                <small>2 available nearby</small>
              </div>
            </div>
            <div className="statCard">
              <div className="statIcon" style={{background: '#e3ebf3', color: '#2c5885'}}><Activity size={18} /></div>
              <div className="statData">
                <span>Active Requests</span>
                <b>3</b>
                <small>Requires attention</small>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboardSection">
            <div className="sectionHeader">
              <h3>Quick Actions</h3>
            </div>
            <div className="quickActionsGrid">
              <Link to="/exchange" className="actionBtn primaryAction"><Repeat2 /> <span>Exchange Book</span></Link>
              <Link to="/sell" className="actionBtn"><BookPlus /> <span>Sell Book</span></Link>
              <Link to="/explore" className="actionBtn"><Search /> <span>Browse Books</span></Link>
              <button className="actionBtn"><ScanLine /> <span>Scan ISBN</span></button>
            </div>
          </div>

          <div className="dashboardSplit">
            {/* Left Column */}
            <div className="splitLeft">
              {/* Active Exchanges */}
              <div className="dashboardSection">
                <div className="sectionHeader">
                  <h3>Active Exchanges</h3>
                  <Link to="/orders" className="viewAll">View all <ArrowRight size={14} /></Link>
                </div>
                <div className="activeExchangesList">
                  <div className="exchangeItemCard">
                    <div className="exchangeBooks">
                      <div className="bookMiniCover" style={{background: books[0].color}}></div>
                      <Repeat2 size={16} className="swapIcon" />
                      <div className="bookMiniCover" style={{background: books[2].color}}></div>
                    </div>
                    <div className="exchangeDetails">
                      <div className="exHeader">
                        <b>Trading with Riya</b>
                        <span className="statusBadge inProgress">In Progress</span>
                      </div>
                      <p>You are exchanging "{books[0].title}" for "{books[2].title}".</p>
                      <div className="exProgress">
                        <div className="exSteps">
                          <span className="done"><Check size={10}/></span>
                          <span className="done"><Check size={10}/></span>
                          <span className="active"></span>
                          <span></span>
                        </div>
                        <small>Expected delivery: Tomorrow</small>
                      </div>
                      <div className="exActions">
                        <button className="smBtn">Track Shipment</button>
                        <button className="smBtn ghost"><MessageCircle size={14}/> Chat</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Incoming / Outgoing Requests */}
              <div className="dashboardSection">
                <div className="sectionHeader">
                  <h3>Pending Requests</h3>
                </div>
                <div className="requestsTabs">
                  <button className="active">Incoming (2)</button>
                  <button>Outgoing (1)</button>
                </div>
                <div className="requestsList">
                  <div className="requestCard">
                    <div className="reqUser">
                      <div className="avatar">MK</div>
                      <div>
                        <b>Mohit K.</b>
                        <span><Star size={12} fill="currentColor"/> 4.8 · Wants to exchange</span>
                      </div>
                    </div>
                    <div className="reqOffer">
                      <div className="offerSide">
                        <small>THEY OFFER</small>
                        <b>Atomic Habits</b>
                      </div>
                      <Repeat2 size={14}/>
                      <div className="offerSide">
                        <small>FOR YOUR</small>
                        <b>Deep Work</b>
                      </div>
                    </div>
                    <div className="reqActions">
                      <button className="acceptBtn">Accept Exchange</button>
                      <button className="rejectBtn">Decline</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="dashboardSection">
                <div className="sectionHeader">
                  <h3>Recommended for You</h3>
                  <Link to="/explore" className="viewAll">More <ArrowRight size={14}/></Link>
                </div>
                <div className="recommendationsRow">
                  {books.slice(1, 4).map(b => (
                    <Link to={`/book/${b.id}`} key={b.id} className="recBookCard">
                      <div className="recCover" style={{background: b.color}}>
                        <div className="orb" style={{background: b.accent}}></div>
                      </div>
                      <div className="recInfo">
                        <b>{b.title}</b>
                        <span>{b.author}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="splitRight">
              {/* Wallet Overview */}
              <div className="dashboardSection">
                <div className="walletOverviewCard">
                  <div className="walletHeader">
                    <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                      <Wallet size={20} />
                      <h3>Wallet Balance</h3>
                    </div>
                  </div>
                  <div className="walletBalance">
                    <h1>₹2,480</h1>
                    <Link to="/wallet">Add Funds <Plus size={14}/></Link>
                  </div>
                  <div className="walletStats">
                    <div><ArrowUpRight size={14}/> ₹1,200 earned</div>
                    <div><ArrowDownRight size={14}/> ₹450 spent</div>
                  </div>
                  <div className="walletTransactions">
                    <div className="txItem">
                      <div className="txIcon"><ArrowUpRight size={14}/></div>
                      <div className="txInfo"><b>Sold "Dune"</b><small>Yesterday</small></div>
                      <b className="txAmount positive">+₹450</b>
                    </div>
                    <div className="txItem">
                      <div className="txIcon"><ArrowDownRight size={14}/></div>
                      <div className="txInfo"><b>Exchange diff</b><small>3 days ago</small></div>
                      <b className="txAmount">-₹120</b>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reading Insights */}
              <div className="dashboardSection">
                <div className="insightsCard">
                  <h3>Reading Insights</h3>
                  <div className="insightMetric">
                    <i><Leaf size={16}/></i>
                    <div>
                      <b>Eco Impact</b>
                      <p>You've saved roughly 2 trees by participating in the circular economy.</p>
                    </div>
                  </div>
                  <div className="insightMetric">
                    <i><Wallet size={16}/></i>
                    <div>
                      <b>Money Saved</b>
                      <p>You've saved ₹3,200 this year compared to buying new books.</p>
                    </div>
                  </div>
                  <div className="insightChartPlaceholder">
                    <div className="bars">
                      <div style={{height: '40%'}}></div>
                      <div style={{height: '70%'}}></div>
                      <div style={{height: '30%'}}></div>
                      <div style={{height: '90%'}}></div>
                      <div style={{height: '50%'}}></div>
                      <div style={{height: '80%', background: 'var(--brand)'}}></div>
                    </div>
                    <small>Monthly Activity</small>
                  </div>
                </div>
              </div>

              {/* Wishlist Summary */}
              <div className="dashboardSection">
                <div className="sectionHeader">
                  <h3>Wishlist Matches</h3>
                </div>
                <div className="wishlistMatchesCard">
                  <p className="muted">2 books from your wishlist are now available nearby.</p>
                  <div className="wishlistItems">
                    <div className="wishlistItem">
                      <div className="miniThumb" style={{background: books[4].color}}></div>
                      <div className="wishlistInfo">
                        <b>{books[4].title}</b>
                        <span><MapPin size={10}/> 2.5km away · ₹299</span>
                      </div>
                      <button className="smBtn">View</button>
                    </div>
                    <div className="wishlistItem">
                      <div className="miniThumb" style={{background: books[3].color}}></div>
                      <div className="wishlistInfo">
                        <b>{books[3].title}</b>
                        <span><MapPin size={10}/> 4.1km away · Exchange</span>
                      </div>
                      <button className="smBtn">View</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="dashboardSection">
                <div className="sectionHeader">
                  <h3>Timeline</h3>
                </div>
                <div className="timelineEnhanced">
                  <div className="timelineItem">
                    <div className="timelineIcon"><Package size={14}/></div>
                    <div className="timelineContent">
                      <b>Quality check passed</b>
                      <p>"The Midnight Library" is ready for dispatch.</p>
                      <small><Clock size={10}/> 2 hours ago</small>
                    </div>
                  </div>
                  <div className="timelineItem">
                    <div className="timelineIcon" style={{background: '#eef4f0', color: '#287158'}}><Repeat2 size={14}/></div>
                    <div className="timelineContent">
                      <b>Exchange completed</b>
                      <p>Both parties received their books.</p>
                      <small><Clock size={10}/> Yesterday</small>
                    </div>
                  </div>
                  <div className="timelineItem">
                    <div className="timelineIcon" style={{background: '#f3e1d9', color: '#a84830'}}><Wallet size={14}/></div>
                    <div className="timelineContent">
                      <b>Funds added</b>
                      <p>₹120 cashback added to your wallet.</p>
                      <small><Clock size={10}/> 2 days ago</small>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
      </div>
    </main>
  );
}
