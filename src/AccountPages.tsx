import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  User, MapPin, Star, Heart, Repeat2, BookOpen, Package, Wallet, MessageCircle, 
  Settings, Bell, Search, Filter, ShieldCheck, ChevronRight, UploadCloud,
  CheckCircle2, Clock, XCircle, CreditCard, ArrowUpRight, ArrowDownLeft,
  Trash2, Mail, Lock, Smartphone, Globe, Eye, Plus
} from 'lucide-react';
import { books } from './data';

const money = (n: number) => `₹${n.toLocaleString('en-IN')}`;

export function ProfilePage() {
  return (
    <main className="page accPage">
      <div className="profileHeaderBanner">
        <div className="coverPhoto">
          <button className="editCoverBtn"><UploadCloud size={16}/> Edit Cover</button>
        </div>
        <div className="profileInfoBox">
          <div className="profilePicWrap">
            <div className="profilePic">JD</div>
            <div className="verifiedBadge"><ShieldCheck size={14}/></div>
          </div>
          <div className="profileText">
            <h1>Jane Doe</h1>
            <p><MapPin size={14}/> Mumbai, Maharashtra • Joined May 2024</p>
            <div className="profileTags">
              <span>Fiction</span><span>Sci-Fi</span><span>History</span>
            </div>
          </div>
          <button className="primaryBtn editProfileBtn">Edit Profile</button>
        </div>
      </div>
      <div className="profileGrid">
        <div className="profileSidebar">
          <div className="bioCard">
            <h3>About me</h3>
            <p>Avid reader of sci-fi and historical fiction. Always looking for the next great space opera or medieval drama. Happy to exchange books in good condition!</p>
          </div>
          <div className="statsCard">
            <div>
              <b><Star fill="#ca5d40" color="#ca5d40" size={16}/> 4.9</b>
              <span>Reader Rating</span>
            </div>
            <div>
              <b>24</b>
              <span>Books Shared</span>
            </div>
            <div>
              <b>18</b>
              <span>Books Received</span>
            </div>
          </div>
          <div className="achievementsCard">
            <h3>Achievements</h3>
            <div className="badgeList">
              <span className="bGold">Top Sender</span>
              <span className="bSilver">Fast Shipper</span>
              <span className="bBronze">10+ Exchanges</span>
            </div>
          </div>
        </div>
        <div className="profileContent">
          <div className="sectionTitle">
            <h3>Recently Listed</h3>
            <Link to="/profile/books">View all</Link>
          </div>
          <div className="listedBooksGrid">
            {books.slice(0, 3).map(b => (
              <div key={b.id} className="listedBookCard">
                <div className="lbcCover" style={{ background: b.color }}>
                  <b>{b.title}</b>
                </div>
                <div className="lbcInfo">
                  <h4>{b.title}</h4>
                  <p>{b.author}</p>
                  <span>{b.condition} • {money(b.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="sectionTitle" style={{ marginTop: '30px' }}>
            <h3>Activity Timeline</h3>
          </div>
          <div className="profileTimeline">
            <div className="ptItem">
              <div className="ptIcon"><Repeat2 size={14}/></div>
              <div className="ptText">
                <p>Exchanged <b>Dune</b> with Arjun</p>
                <span>2 days ago</span>
              </div>
            </div>
            <div className="ptItem">
              <div className="ptIcon"><Star size={14}/></div>
              <div className="ptText">
                <p>Received a 5-star review from Riya</p>
                <span>1 week ago</span>
              </div>
            </div>
            <div className="ptItem">
              <div className="ptIcon"><Heart size={14}/></div>
              <div className="ptText">
                <p>Added <b>Project Hail Mary</b> to wishlist</p>
                <span>2 weeks ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function OrdersPage() {
  const [tab, setTab] = useState('Active');
  
  return (
    <main className="page accPage">
      <div className="pageHeaderRow">
        <div>
          <h1>My Orders</h1>
          <p>Track, manage, and review your book deliveries.</p>
        </div>
        <div className="searchBox">
          <Search size={18}/>
          <input placeholder="Search orders by title or ID..." />
        </div>
      </div>
      <div className="orderTabs">
        {['Active', 'Completed', 'Cancelled', 'Pending'].map(t => (
          <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>{t}</button>
        ))}
        <button className="filterBtn"><Filter size={16}/> Filter</button>
      </div>
      <div className="orderList">
        {[1, 2].map((_, i) => (
          <div key={i} className="orderCardFull">
            <div className="ocHeader">
              <div className="ocMeta">
                <span>Order #ORD-84930{i}</span>
                <span>Placed on 12 Oct 2026</span>
              </div>
              <div className={`ocStatus ${i === 0 ? 'in-transit' : 'delivered'}`}>
                {i === 0 ? <Clock size={16}/> : <CheckCircle2 size={16}/>}
                {i === 0 ? 'In Transit' : 'Delivered'}
              </div>
            </div>
            <div className="ocBody">
              <div className="ocCover" style={{background: books[i].color}}>
                <b>{books[i].title}</b>
              </div>
              <div className="ocDetails">
                <h3>{books[i].title}</h3>
                <p>By {books[i].author}</p>
                <div className="ocSeller">Sold by <b>Readers' Corner</b></div>
                <div className="ocPrice">{money(books[i].price)}</div>
              </div>
              <div className="ocTimeline">
                <h4>Delivery Status</h4>
                <p className="expectedDate">Expected by {i === 0 ? '16 Oct' : '14 Oct'}</p>
                <div className="progressTrack">
                  <div className="ptStep done"></div>
                  <div className="ptStep done"></div>
                  <div className={`ptStep ${i === 1 ? 'done' : 'active'}`}></div>
                  <div className={`ptStep ${i === 1 ? 'done' : ''}`}></div>
                </div>
                <span className="ptLabel">{i === 0 ? 'Out for delivery' : 'Delivered successfully'}</span>
              </div>
            </div>
            <div className="ocFooter">
              <button className="ghostBtn">View Details</button>
              <button className="ghostBtn">Invoice</button>
              <button className="primaryBtn">{i === 0 ? 'Track Order' : 'Return Book'}</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export function WalletPage() {
  return (
    <main className="page accPage">
      <div className="pageHeaderRow">
        <div>
          <h1>Wallet</h1>
          <p>Manage your balances, credits, and transaction history.</p>
        </div>
      </div>
      
      <div className="walletTopGrid">
        <div className="walletBalanceCard">
          <p>Current Balance</p>
          <h2>{money(2480)}</h2>
          <div className="walletActions">
            <button className="primaryBtn"><Plus size={16}/> Add Money</button>
            <button className="secondaryBtn">Withdraw</button>
          </div>
          <div className="walletMiniStats">
            <span><b>{money(420)}</b> Pending Credits</span>
            <span><b>{money(120)}</b> Cashback Earned</span>
          </div>
        </div>
        <div className="walletAnalyticsCard">
          <div className="waHeader">
            <h3>Monthly Spending</h3>
            <select><option>October</option><option>September</option></select>
          </div>
          <div className="chartPlaceholder">
            <div className="barWrap"><div className="bar" style={{height:'40%'}}></div><span>W1</span></div>
            <div className="barWrap"><div className="bar" style={{height:'70%'}}></div><span>W2</span></div>
            <div className="barWrap"><div className="bar" style={{height:'30%'}}></div><span>W3</span></div>
            <div className="barWrap"><div className="bar" style={{height:'85%'}}></div><span>W4</span></div>
          </div>
          <div className="waFooter">
            <div><span className="dot spent"></span> Total Spent: {money(1420)}</div>
            <div><span className="dot earned"></span> Total Earned: {money(850)}</div>
          </div>
        </div>
      </div>

      <div className="walletBottomGrid">
        <div className="transactionHistory">
          <div className="thHeader">
            <h3>Recent Transactions</h3>
            <Link to="/wallet/history">View all</Link>
          </div>
          <div className="txList">
            <div className="txItemFull">
              <div className="txIcon expense"><ArrowDownLeft size={18}/></div>
              <div className="txInfo">
                <b>Purchased "The Midnight Library"</b>
                <span>Today, 10:42 AM • Order #8493</span>
              </div>
              <div className="txAmount negative">-{money(399)}</div>
            </div>
            <div className="txItemFull">
              <div className="txIcon income"><ArrowUpRight size={18}/></div>
              <div className="txInfo">
                <b>Sold "Atomic Habits"</b>
                <span>Yesterday, 04:15 PM</span>
              </div>
              <div className="txAmount positive">+{money(250)}</div>
            </div>
            <div className="txItemFull">
              <div className="txIcon cashback"><Star size={18}/></div>
              <div className="txInfo">
                <b>Cashback on Exchange</b>
                <span>12 Oct 2026</span>
              </div>
              <div className="txAmount positive">+{money(45)}</div>
            </div>
          </div>
        </div>
        <div className="paymentMethods">
          <div className="thHeader">
            <h3>Payment Methods</h3>
            <button className="addBtn"><Plus size={16}/> Add</button>
          </div>
          <div className="pmList">
            <div className="pmCard">
              <CreditCard size={24}/>
              <div className="pmInfo">
                <b>HDFC Bank Debit Card</b>
                <span>**** **** **** 4892</span>
              </div>
              <button className="delBtn"><Trash2 size={16}/></button>
            </div>
            <div className="pmCard">
              <Wallet size={24}/>
              <div className="pmInfo">
                <b>UPI (Google Pay)</b>
                <span>jane.doe@okaxis</span>
              </div>
              <button className="delBtn"><Trash2 size={16}/></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function NotificationsPage() {
  const [filter, setFilter] = useState('All');
  const cats = ['All', 'Exchange', 'Orders', 'Wallet', 'Community', 'System'];
  
  return (
    <main className="page narrow accPage">
      <div className="pageHeaderRow">
        <div>
          <h1>Notifications</h1>
          <p>Your latest updates from BookLoop.</p>
        </div>
        <button className="ghostBtn">Mark all as read</button>
      </div>
      <div className="notifLayout">
        <aside className="notifSidebar">
          {cats.map(c => (
            <button key={c} className={filter === c ? 'active' : ''} onClick={() => setFilter(c)}>
              {c} {c === 'All' && <span className="badge">4</span>}
            </button>
          ))}
        </aside>
        <div className="notifContent">
          <div className="notifGroup">
            <h4>Today</h4>
            <div className="notifCard unread">
              <div className="ncIcon" style={{background: '#eef4f0', color: '#287158'}}><Repeat2 size={18}/></div>
              <div className="ncBody">
                <b>Exchange Request Accepted</b>
                <p>Arjun agreed to exchange "Dune" for your copy of "Foundation".</p>
                <span className="time">2 hours ago</span>
              </div>
              <button className="ncAction">Review Setup</button>
            </div>
            <div className="notifCard unread">
              <div className="ncIcon" style={{background: '#f3e1d9', color: '#a84830'}}><Wallet size={18}/></div>
              <div className="ncBody">
                <b>Wallet Credited</b>
                <p>You received ₹120 cashback from your last order.</p>
                <span className="time">5 hours ago</span>
              </div>
            </div>
          </div>
          <div className="notifGroup">
            <h4>Yesterday</h4>
            <div className="notifCard">
              <div className="ncIcon" style={{background: '#e9efeb', color: '#285645'}}><Package size={18}/></div>
              <div className="ncBody">
                <b>Order Delivered</b>
                <p>Your order #ORD-8392 for "The Silent Patient" was delivered successfully.</p>
                <span className="time">1 day ago</span>
              </div>
            </div>
            <div className="notifCard">
              <div className="ncIcon" style={{background: '#fff2cd', color: '#b2860b'}}><Star size={18}/></div>
              <div className="ncBody">
                <b>New Wishlist Match</b>
                <p>"Project Hail Mary" is now available in Like New condition for ₹399.</p>
                <span className="time">1 day ago</span>
              </div>
              <button className="ncAction">View Book</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function ChatPage() {
  return (
    <main className="chatLayout">
      <div className="chatSidebar">
        <div className="csHeader">
          <h2>Messages</h2>
          <div className="chatSearch">
            <Search size={16}/>
            <input placeholder="Search conversations..." />
          </div>
        </div>
        <div className="chatList">
          <div className="chatListItem active">
            <div className="avatar">A</div>
            <div className="chatItemInfo">
              <div className="ciTop"><b>Arjun R.</b><span>10:42 AM</span></div>
              <p>Great! I'll ship it by tomorrow morning.</p>
            </div>
            <div className="unreadDot"></div>
          </div>
          <div className="chatListItem">
            <div className="avatar">RM</div>
            <div className="chatItemInfo">
              <div className="ciTop"><b>Riya M.</b><span>Yesterday</span></div>
              <p>Is the book still available?</p>
            </div>
          </div>
          <div className="chatListItem">
            <div className="avatar">KB</div>
            <div className="chatItemInfo">
              <div className="ciTop"><b>Kabir B.</b><span>Monday</span></div>
              <p>Thanks for the quick exchange!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="chatWindow">
        <div className="cwHeader">
          <div className="cwUser">
            <div className="avatar">A</div>
            <div>
              <b>Arjun R.</b>
              <span>Online</span>
            </div>
          </div>
          <button className="ghostBtn"><Search size={18}/></button>
        </div>
        <div className="cwMessages">
          <div className="dateDivider"><span>Today</span></div>
          <div className="msg bubble-them">
            <p>Hey, I just accepted the exchange request for Dune.</p>
            <span>10:30 AM</span>
          </div>
          <div className="msg bubble-me">
            <p>Awesome! I have packed Foundation securely.</p>
            <span>10:35 AM</span>
          </div>
          <div className="msg bubble-them">
            <p>Great! I'll ship it by tomorrow morning.</p>
            <span>10:42 AM</span>
          </div>
          <div className="typingInd">Arjun is typing...</div>
        </div>
        <div className="cwInput">
          <button className="attachBtn"><UploadCloud size={20}/></button>
          <input placeholder="Type a message..." />
          <button className="sendBtn"><Repeat2 size={16} style={{transform: 'rotate(90deg)'}}/></button>
        </div>
      </div>
    </main>
  );
}

export function SettingsPage() {
  const [section, setSection] = useState('Profile');
  const sections = [
    {id: 'Profile', icon: User},
    {id: 'Privacy', icon: Eye},
    {id: 'Security', icon: Lock},
    {id: 'Notifications', icon: Bell},
    {id: 'Payment Methods', icon: CreditCard},
    {id: 'Address', icon: MapPin}
  ];

  return (
    <main className="page accPage">
      <div className="pageHeaderRow">
        <div>
          <h1>Settings</h1>
          <p>Manage your account preferences and configurations.</p>
        </div>
      </div>
      <div className="settingsLayout">
        <aside className="settingsNav">
          {sections.map(s => (
            <button key={s.id} className={section === s.id ? 'active' : ''} onClick={() => setSection(s.id)}>
              <s.icon size={18}/> {s.id}
            </button>
          ))}
        </aside>
        <div className="settingsContent">
          <div className="settingsCard">
            <h2>{section} Settings</h2>
            
            {section === 'Profile' && (
              <form className="settingsForm">
                <div className="formGroup">
                  <label>Full Name</label>
                  <input defaultValue="Jane Doe" />
                </div>
                <div className="formGroup">
                  <label>Email Address</label>
                  <input defaultValue="jane.doe@example.com" />
                </div>
                <div className="formGroup">
                  <label>Bio</label>
                  <textarea defaultValue="Avid reader of sci-fi and historical fiction..." />
                </div>
                <div className="formDivider"></div>
                <h3>Social Links</h3>
                <div className="formGroup">
                  <label>Twitter/X Profile</label>
                  <input placeholder="https://twitter.com/..." />
                </div>
                <div className="formActions">
                  <button type="button" className="primaryBtn">Save Changes</button>
                </div>
              </form>
            )}

            {section === 'Security' && (
              <div className="securitySettings">
                <div className="secItem">
                  <div>
                    <h4>Password</h4>
                    <p>Last changed 3 months ago</p>
                  </div>
                  <button className="secondaryBtn">Update</button>
                </div>
                <div className="secItem">
                  <div>
                    <h4>Two-Factor Authentication</h4>
                    <p>Add an extra layer of security to your account.</p>
                  </div>
                  <button className="primaryBtn">Enable 2FA</button>
                </div>
                <div className="secItem">
                  <div>
                    <h4>Active Sessions</h4>
                    <p>You are logged in on 2 devices.</p>
                  </div>
                  <button className="secondaryBtn">Manage Devices</button>
                </div>
                <div className="formDivider"></div>
                <div className="secItem danger">
                  <div>
                    <h4>Delete Account</h4>
                    <p>Permanently remove your account and all data.</p>
                  </div>
                  <button className="dangerBtn">Delete Account</button>
                </div>
              </div>
            )}
            
            {section !== 'Profile' && section !== 'Security' && (
              <div className="placeholderContent">
                <Settings size={40} style={{opacity: 0.2, margin: '20px auto', display: 'block'}}/>
                <p style={{textAlign: 'center', color: '#68736e'}}>Configure your {section.toLowerCase()} preferences here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
