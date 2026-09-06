'use client';

import React from 'react';
import {
  Bot,
  Brain,
  Cpu,
  Settings,
  TrendingUp,
  TrendingDown,
  Database,
  Network,
  MessageSquare,
  Flame,
  Sparkles,
  GitBranch,
  Server,
  ShieldCheck,
  Layers,
  UserCheck,
  RefreshCw,
  Laptop,
  Code2,
  Cloud,
  Palette,
  Smartphone,
  Lock,
  ShoppingCart,
  ShoppingBag,
  Building2,
  Rocket,
  Store,
  Zap,
  Send,
  Tag,
  CircleDollarSign,
  Headphones,
  Landmark,
  Activity,
  Factory,
  GraduationCap,
  Search,
  Megaphone,
  Share2,
  BarChart3,
  Users,
  Clock,
  AlertTriangle,
  Globe,
  CheckCircle2,
  Award,
  Briefcase,
  Copy,
  Eye,
  EyeOff,
  UserX,
  PieChart,
  Target,
  Filter,
  PenTool,
  Mail,
  MousePointer,
  Camera,
  MapPin,
  Link2,
  Timer,
  Maximize2,
  FileText,
  CheckSquare,
  LogIn,
  Sliders,
  Check,
  ArrowRight,
  Gauge,
  Coins
} from 'lucide-react';

// Direct mapping dictionary to Lucide components
const ICONS = {
  // AI & Tech
  'fas fa-robot': Bot,
  'robot': Bot,
  'bot': Bot,
  'fas fa-brain': Brain,
  'brain': Brain,
  'fas fa-cogs': Cpu,
  'cogs': Cpu,
  'fas fa-cog': Settings,
  'cog': Settings,
  'fas fa-chart-line': TrendingUp,
  'chart-line': TrendingUp,
  'fas fa-database': Database,
  'database': Database,
  'fas fa-network-wired': Network,
  'network-wired': Network,
  'fas fa-comments': MessageSquare,
  'comments': MessageSquare,
  'fas fa-fire': Flame,
  'fire': Flame,
  'fas fa-smile-beam': Sparkles,
  'smile-beam': Sparkles,
  'fas fa-eye': Eye,
  'eye': Eye,
  'fas fa-copy': Copy,
  'copy': Copy,

  // Development, Infrastructure & Security
  'fas fa-code-branch': GitBranch,
  'code-branch': GitBranch,
  'fas fa-server': Server,
  'server': Server,
  'fas fa-shield-alt': ShieldCheck,
  'shield-alt': ShieldCheck,
  'fas fa-shield': ShieldCheck,
  'shield': ShieldCheck,
  'fas fa-layer-group': Layers,
  'layer-group': Layers,
  'fas fa-user-tie': UserCheck,
  'user-tie': UserCheck,
  'fas fa-sync-alt': RefreshCw,
  'sync-alt': RefreshCw,
  'fas fa-sync': RefreshCw,
  'sync': RefreshCw,
  'fas fa-laptop-code': Laptop,
  'laptop-code': Laptop,
  'fas fa-code': Code2,
  'code': Code2,
  'fas fa-cloud': Cloud,
  'cloud': Cloud,
  'fas fa-paint-brush': Palette,
  'paint-brush': Palette,
  'fas fa-mobile-alt': Smartphone,
  'mobile-alt': Smartphone,
  'fas fa-lock': Lock,
  'lock': Lock,
  'fas fa-tachometer-alt': Gauge,
  'tachometer-alt': Gauge,
  'fas fa-unlink': Sliders,
  'fas fa-link': Link2,

  // Business, Commerce & Growth
  'fas fa-shopping-cart': ShoppingCart,
  'shopping-cart': ShoppingCart,
  'fas fa-shopping-bag': ShoppingBag,
  'shopping-bag': ShoppingBag,
  'fas fa-building': Building2,
  'building': Building2,
  'fas fa-rocket': Rocket,
  'rocket': Rocket,
  'fas fa-store': Store,
  'store': Store,
  'fas fa-bolt': Zap,
  'bolt': Zap,
  'fas fa-paper-plane': Send,
  'paper-plane': Send,
  'fas fa-tags': Tag,
  'tags': Tag,
  'fas fa-dollar-sign': CircleDollarSign,
  'dollar-sign': CircleDollarSign,
  'fas fa-money-bill-wave': Coins,
  'money-bill-wave': Coins,
  'fas fa-headset': Headphones,
  'headset': Headphones,
  'fas fa-university': Landmark,
  'university': Landmark,
  'fas fa-heartbeat': Activity,
  'heartbeat': Activity,
  'fas fa-industry': Factory,
  'industry': Factory,
  'fas fa-graduation-cap': GraduationCap,
  'graduation-cap': GraduationCap,

  // Marketing, Search & Analytics
  'fas fa-search': Search,
  'search': Search,
  'fas fa-bullhorn': Megaphone,
  'bullhorn': Megaphone,
  'fas fa-share-alt': Share2,
  'share-alt': Share2,
  'fas fa-chart-bar': BarChart3,
  'chart-bar': BarChart3,
  'fas fa-chart-pie': PieChart,
  'chart-pie': PieChart,
  'fas fa-users': Users,
  'users': Users,
  'fas fa-users-slash': UserX,
  'users-slash': UserX,
  'fas fa-user-clock': Clock,
  'user-clock': Clock,
  'fas fa-clock': Clock,
  'clock': Clock,
  'fas fa-hourglass-half': Clock,
  'hourglass-half': Clock,
  'fas fa-exclamation-triangle': AlertTriangle,
  'exclamation-triangle': AlertTriangle,
  'fas fa-globe': Globe,
  'globe': Globe,
  'fas fa-globe-americas': Globe,
  'fas fa-check-circle': CheckCircle2,
  'fas fa-award': Award,
  'award': Award,
  'fas fa-briefcase': Briefcase,
  'briefcase': Briefcase,
  'fas fa-bullseye': Target,
  'bullseye': Target,
  'fas fa-filter': Filter,
  'filter': Filter,
  'fas fa-ad': Megaphone,
  'fas fa-hashtag': Sliders,
  'fas fa-pen-nib': PenTool,
  'fas fa-pen-fancy': PenTool,
  'fas fa-envelope-open-text': Mail,
  'fas fa-mouse-pointer': MousePointer,
  'fas fa-camera': Camera,
  'fas fa-eye-slash': EyeOff,
  'fas fa-user-md': UserCheck,
  'fas fa-arrow-up': TrendingUp,
  'fas fa-arrow-down': TrendingDown,
  'fas fa-map-marker-alt': MapPin,
  'fas fa-map-marked-alt': MapPin,
  'fas fa-stopwatch': Timer,
  'fas fa-gem': Sparkles,
  'fas fa-users-cog': Users,
  'fas fa-expand-arrows-alt': Maximize2,
  'fas fa-file-contract': FileText,
  'fas fa-clipboard-check': CheckSquare,
  'fas fa-door-open': LogIn,
  'fas fa-sitemap': Network,

  // Programming & Platforms
  'fab fa-python': Code2,
  'fab fa-react': Code2,
  'fab fa-node-js': Server,
  'fab fa-aws': Cloud,
  'fab fa-google': Globe,
  'fab fa-wordpress': Globe,
  'fab fa-shopify': ShoppingBag,
};

export default function SmartIcon({ icon, className = '', size = 26, color = 'currentColor', strokeWidth = 2, style = {} }) {
  if (!icon) {
    return <Zap size={size} color={color} strokeWidth={strokeWidth} className={`smart-icon ${className}`} style={style} />;
  }

  // 1. If it's already a valid React element
  if (React.isValidElement(icon)) {
    return icon;
  }

  // 2. If it's a string, look up in direct ICONS dictionary
  if (typeof icon === 'string') {
    const trimmed = icon.trim();

    // Check if it's an emoji
    const emojiRegex = /\p{Extended_Pictographic}/u;
    if (emojiRegex.test(trimmed) && trimmed.length <= 4) {
      return <span style={{ fontSize: `${size}px`, lineHeight: 1, display: 'inline-block', verticalAlign: 'middle', ...style }}>{trimmed}</span>;
    }

    const Component = ICONS[trimmed] || ICONS[trimmed.toLowerCase()] || Zap;

    return (
      <Component
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        className={`smart-icon ${className}`}
        style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
      />
    );
  }

  // Fallback icon
  return <Zap size={size} color={color} strokeWidth={strokeWidth} className={`smart-icon ${className}`} style={style} />;
}

