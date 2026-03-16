import React from 'react';
import {
  LayoutGrid, AppWindow, Palette, BookOpen, Heart,
  Clock, Film, Globe, Code2, MoreHorizontal
} from 'lucide-react';
import { CATEGORIES } from '../data/articles';
import './CategoryFilter.css';

const ICONS = { LayoutGrid, AppWindow, Palette, BookOpen, Heart, Clock, Film, Globe, Code2, MoreHorizontal };

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="cat-filter-wrap">
      <div className="cat-filter">
        {CATEGORIES.map(cat => {
          const Icon = ICONS[cat.icon] || LayoutGrid;
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              className={`cat-btn${isActive ? ' active' : ''}`}
              style={isActive ? { '--c': cat.color } : { '--c': cat.color }}
              onClick={() => onChange(cat.id)}
            >
              <Icon size={14} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
