import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Palette, Briefcase, Compass, Clock, Monitor, Heart, Sparkles, ChevronRight, Search } from 'lucide-react';
import { categories, books } from './data';

export function CategoriesPage() {
  const getCatDetails = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'literary fiction': return { icon: BookOpen, color: '#285645', bg: '#dcebe2', desc: 'Award-winning prose and captivating storytelling.' };
      case 'design & art': return { icon: Palette, color: '#a84830', bg: '#f3e1d9', desc: 'Visual culture, typography, and creative process.' };
      case 'business': return { icon: Briefcase, color: '#b2860b', bg: '#fff2cd', desc: 'Strategy, economics, and professional growth.' };
      case 'self growth': return { icon: Compass, color: '#287158', bg: '#eef4f0', desc: 'Habits, mindfulness, and personal development.' };
      case 'history': return { icon: Clock, color: '#ca5d40', bg: '#fcf1ef', desc: 'Understanding our past to navigate the future.' };
      case 'technology': return { icon: Monitor, color: '#203354', bg: '#e6ebf5', desc: 'Software, innovation, and digital culture.' };
      case 'romance': return { icon: Heart, color: '#c53d3d', bg: '#fae6e6', desc: 'Love stories, contemporary romance, and more.' };
      case 'young adult': return { icon: Sparkles, color: '#8a6a1c', bg: '#fff8e1', desc: 'Coming of age stories and youthful adventures.' };
      default: return { icon: BookOpen, color: '#6c7772', bg: '#f0f2f0', desc: 'Discover something new.' };
    }
  };

  return (
    <main className="page catsLayout">
      <div className="catsHeader">
        <div className="chHero">
          <small>BROWSE BY GENRE</small>
          <h1>Categories</h1>
          <p>Find your next obsession among our curated collections of reader-verified books.</p>
        </div>
        <div className="chSearch">
          <Search size={18}/>
          <input placeholder="Search categories..." />
        </div>
      </div>
      
      <div className="catsGrid">
        {categories.map(cat => {
          const details = getCatDetails(cat);
          const Icon = details.icon;
          const catBooks = books.filter(b => b.cat.toLowerCase() === cat.toLowerCase());
          
          return (
            <Link to={`/explore?cat=${encodeURIComponent(cat)}`} key={cat} className="catCardBox">
              <div className="catIcon" style={{ color: details.color, backgroundColor: details.bg }}>
                <Icon size={24} />
              </div>
              <div className="catInfo">
                <h3>{cat}</h3>
                <p>{details.desc}</p>
                <span>{catBooks.length > 0 ? `${catBooks.length} books` : 'Explore collection'} <ChevronRight size={14} /></span>
              </div>
              {catBooks.length > 0 && (
                <div className="catPreview">
                  {catBooks.slice(0, 3).map((b, i) => (
                    <div key={b.id} className="miniCoverWrap" style={{ zIndex: 3 - i, transform: `translateX(-${i * 18}px)` }}>
                      <div className="miniCover" style={{ background: b.color, color: 'white' }}>
                        <div className="mcOrb" style={{ background: b.accent }}></div>
                        <small>{b.author.split(' ').pop()}</small>
                        <b>{b.title.substring(0, 10)}...</b>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Link>
          );
        })}
      </div>
      
      <div className="popularSection">
        <div className="sectionHead">
          <h2>Popular right now</h2>
        </div>
        <div className="popularTags">
          {['Psychological Thriller', 'Memoir', 'Productivity', 'Startup', 'Historical Fiction', 'Minimalism', 'Sci-Fi'].map(tag => (
            <Link to={`/explore?q=${tag}`} key={tag} className="popTag">
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
