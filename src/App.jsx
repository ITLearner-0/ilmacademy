import React, { useState } from 'react';
import { ShoppingCart, Book, Star, CheckCircle, X, Menu, Home, BookOpen, ShoppingBag, User, LogOut, CreditCard, Mail, Lock, Eye, EyeOff, FileText, Calendar, TrendingUp } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "La Science du Hadith",
    subtitle: "Manuel Interactif",
    description: "Découvrez les paroles du Prophète ﷺ à travers un manuel interactif complet : les 6 livres authentiques, l'Isnad, les types de hadiths, et bien plus.",
    price: 24.99,
    features: ["8 leçons complètes", "Exercices interactifs", "Quiz d'évaluation", "Système de progression"],
    image: "📚",
    color: "from-emerald-500 to-teal-600",
    preview: "Qu'est-ce qu'un Hadith ? C'est une parole, un acte ou une approbation du Prophète Muhammad ﷺ. Les hadiths nous aident à comprendre le Coran et à suivre l'exemple du Prophète dans notre vie quotidienne...",
    fileUrl: "La Science du Hadith - Manuel Interactif.html"
  },
  {
    id: 2,
    title: "Lettres Arabes",
    subtitle: "تعلم الحروف العربية",
    description: "Maîtrisez les 28 lettres de l'alphabet arabe avec leurs formes, leurs sons, et plus de 100 mots de vocabulaire.",
    price: 19.99,
    features: ["28 lettres détaillées", "4 formes par lettre", "Jeux de mémoire", "Exercices d'écriture"],
    image: "✍️",
    color: "from-blue-500 to-indigo-600",
    preview: "L'alphabet arabe compte 28 lettres magnifiques ! Chaque lettre a 4 formes différentes selon sa position dans le mot. Commençons par la première lettre : ا (Alif) qui fait le son 'A'...",
    fileUrl: "تعلم الحروف العربية - Manuel Interactif des Lettres Arabes.html"
  },
  {
    id: 3,
    title: "Ma Croyance Islamique",
    subtitle: "Les Fondements de l'Iman",
    description: "Apprenez les bases de la foi islamique : Allah, les anges, les prophètes, les piliers de l'Islam et de l'Iman.",
    price: 22.99,
    features: ["6 piliers de la foi", "5 piliers de l'Islam", "Quiz interactifs", "Illustrations pédagogiques"],
    image: "🕌",
    color: "from-purple-500 to-pink-600",
    preview: "Les 6 piliers de la foi (Iman) : Croire en Allah, aux anges, aux livres révélés, aux prophètes, au Jour Dernier, et au destin. Ces piliers sont les fondations de notre croyance...",
    fileUrl: "Ma Croyance Islamique.html"
  },
  {
    id: 4,
    title: "Ma Grammaire Arabe",
    subtitle: "Manuel Interactif",
    description: "Découvrez les règles fondamentales de la grammaire arabe : les types de mots, le I'rab, et construisez des phrases correctes.",
    price: 26.99,
    features: ["Règles grammaticales", "Exercices pratiques", "Jeux d'association", "Construction de phrases"],
    image: "📐",
    color: "from-amber-500 to-orange-600",
    preview: "La grammaire arabe se compose de 3 types de mots : Le Nom (Ism), le Verbe (Fi'l) et la Particule (Harf). Comprendre ces bases est essentiel pour lire et comprendre le Coran...",
    fileUrl: "Ma Grammaire Arabe - Manuel Interactif.html"
  }
];

const childrenBooks = [
  {
    id: 101,
    title: "Les Belles Histoires du Prophète ﷺ",
    subtitle: "Pour les 5-8 ans",
    description: "12 histoires magnifiquement illustrées racontant la vie du Prophète Muhammad ﷺ de manière adaptée aux jeunes enfants.",
    price: 16.99,
    age: "5-8 ans",
    pages: 64,
    features: ["12 histoires illustrées", "Vocabulaire simple", "Questions de réflexion", "Couverture cartonnée"],
    image: "📖",
    color: "from-pink-400 to-rose-500",
    category: "hadith",
    format: "Livre papier"
  },
  {
    id: 102,
    title: "Mes Premiers Hadiths",
    subtitle: "40 Hadiths pour enfants",
    description: "Une sélection de 40 hadiths faciles à comprendre et à mémoriser, avec des explications adaptées aux enfants.",
    price: 14.99,
    age: "7-12 ans",
    pages: 96,
    features: ["40 hadiths authentiques", "Explications simples", "Illustrations colorées", "Phonétique arabe"],
    image: "🌟",
    color: "from-emerald-400 to-teal-500",
    category: "hadith",
    format: "Livre papier"
  },
  {
    id: 103,
    title: "Mon Alphabet Arabe Magique",
    subtitle: "Apprendre en s'amusant",
    description: "Un livre interactif avec des rabats, des textures et des surprises pour découvrir les 28 lettres arabes.",
    price: 18.99,
    age: "3-6 ans",
    pages: 32,
    features: ["28 lettres animées", "Textures à toucher", "Rabats surprise", "Format cartonné"],
    image: "🎨",
    color: "from-blue-400 to-indigo-500",
    category: "arabic",
    format: "Livre papier"
  },
  {
    id: 104,
    title: "J'écris l'Arabe - Cahier d'activités",
    subtitle: "Tracer, colorier, apprendre",
    description: "Cahier d'exercices ludique pour apprendre à écrire les lettres arabes avec des activités variées et amusantes.",
    price: 12.99,
    age: "5-9 ans",
    pages: 80,
    features: ["Exercices progressifs", "Coloriages inclus", "Autocollants bonus", "Format A4"],
    image: "✏️",
    color: "from-cyan-400 to-blue-500",
    category: "arabic",
    format: "Cahier d'activités"
  },
  {
    id: 105,
    title: "Allah est Grand - Mon premier livre de Foi",
    subtitle: "Les bases de l'Iman",
    description: "Initier les tout-petits aux bases de la foi musulmane avec des illustrations tendres et des mots simples.",
    price: 15.99,
    age: "3-7 ans",
    pages: 48,
    features: ["6 piliers de la foi", "Illustrations douces", "Texte simple", "Pages plastifiées"],
    image: "🌙",
    color: "from-purple-400 to-pink-500",
    category: "faith",
    format: "Livre papier"
  },
  {
    id: 106,
    title: "Les 5 Piliers de l'Islam expliqués aux enfants",
    subtitle: "Comprendre l'Islam",
    description: "Guide illustré pour expliquer les 5 piliers de l'Islam aux enfants avec des exemples concrets de leur vie quotidienne.",
    price: 17.99,
    age: "8-12 ans",
    pages: 72,
    features: ["5 chapitres détaillés", "Activités pratiques", "Quiz amusants", "Conseils parents"],
    image: "🕌",
    color: "from-violet-400 to-purple-500",
    category: "faith",
    format: "Livre papier"
  },
  {
    id: 107,
    title: "Mes Premières Invocations (Dou'as)",
    subtitle: "Invocations quotidiennes",
    description: "Recueil d'invocations du quotidien en arabe, phonétique et français pour que les enfants puissent facilement les apprendre.",
    price: 13.99,
    age: "5-10 ans",
    pages: 56,
    features: ["20 invocations", "Arabe + phonétique", "Illustrations mignonnes", "Format poche"],
    image: "🤲",
    color: "from-amber-400 to-orange-500",
    category: "faith",
    format: "Livre papier"
  },
  {
    id: 108,
    title: "Mes Premiers Mots Arabes en Images",
    subtitle: "Dictionnaire illustré",
    description: "200 mots de vocabulaire arabe illustrés et classés par thème pour enrichir le vocabulaire des enfants.",
    price: 19.99,
    age: "4-10 ans",
    pages: 120,
    features: ["200 mots illustrés", "10 thématiques", "Prononciation", "Index bilingue"],
    image: "📚",
    color: "from-green-400 to-emerald-500",
    category: "arabic",
    format: "Livre papier"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Fatima Z.",
    role: "Maman de 2 enfants",
    rating: 5,
    text: "Mes enfants adorent les manuels ilmAcademy ! L'approche interactive rend l'apprentissage ludique. Le manuel sur les lettres arabes est particulièrement bien fait.",
    avatar: "👩"
  },
  {
    id: 2,
    name: "Ahmed K.",
    role: "Étudiant en sciences islamiques",
    rating: 5,
    text: "Le manuel sur la Science du Hadith est d'une qualité exceptionnelle. Les explications sont claires et les exercices permettent vraiment de bien assimiler les concepts.",
    avatar: "👨"
  },
  {
    id: 3,
    name: "Khadija M.",
    role: "Enseignante",
    rating: 5,
    text: "J'utilise ces manuels avec mes élèves. Le système de progression et les quiz sont excellents pour suivre l'apprentissage de chacun. Je recommande vivement !",
    avatar: "👩‍🏫"
  },
  {
    id: 4,
    name: "Youssef B.",
    role: "Converti à l'Islam",
    rating: 5,
    text: "En tant que nouveau musulman, ces manuels m'ont beaucoup aidé à comprendre les bases de l'Islam. Le contenu est accessible et bien structuré.",
    avatar: "👨‍💼"
  }
];

const blogPosts = [
  {
    id: 1,
    title: "Comment mémoriser l'alphabet arabe en 7 jours",
    excerpt: "Découvrez une méthode éprouvée pour maîtriser les 28 lettres arabes rapidement et efficacement...",
    date: "25 septembre 2025",
    category: "Apprentissage",
    image: "✍️",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "L'importance d'étudier la Science du Hadith",
    excerpt: "Comprendre pourquoi la connaissance des hadiths est essentielle pour tout musulman...",
    date: "22 septembre 2025",
    category: "Science Islamique",
    image: "📚",
    color: "bg-emerald-500"
  },
  {
    id: 3,
    title: "5 astuces pour enseigner l'Islam aux enfants",
    excerpt: "Des conseils pratiques pour transmettre la foi de manière ludique et bienveillante...",
    date: "18 septembre 2025",
    category: "Éducation",
    image: "👨‍👩‍👧‍👦",
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Les bienfaits de l'apprentissage de la grammaire arabe",
    excerpt: "Pourquoi la grammaire est la clé pour comprendre le Coran et la langue arabe...",
    date: "15 septembre 2025",
    category: "Langue Arabe",
    image: "📐",
    color: "bg-amber-500"
  }
];

export default function IlmAcademyShop() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [bookFilter, setBookFilter] = useState('all');
  
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    name: ''
  });

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change;
        return newQty > 0 ? {...item, quantity: newQty} : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredBooks = bookFilter === 'all' 
    ? childrenBooks 
    : childrenBooks.filter(book => book.category === bookFilter);

  const handleAuth = (e) => {
    e.preventDefault();
    if (authMode === 'login') {
      setUser({ name: authForm.name || 'Utilisateur', email: authForm.email });
    } else {
      setUser({ name: authForm.name, email: authForm.email });
    }
    setShowAuthModal(false);
    setAuthForm({ email: '', password: '', name: '' });
  };

  const handleLogout = () => {
    setUser(null);
    setPurchasedProducts([]);
    setCurrentPage('home');
  };

  const handleCheckout = () => {
    if (!user) {
      setShowAuthModal(true);
      setAuthMode('login');
      return;
    }
    setShowPaymentModal(true);
  };

  const processPayment = () => {
    // Simuler le traitement du paiement
    const newPurchases = cart.map(item => item.id);
    setPurchasedProducts([...new Set([...purchasedProducts, ...newPurchases])]);
    
    // Ouvrir automatiquement les manuels achetés dans de nouveaux onglets
    cart.forEach(item => {
      const product = products.find(p => p.id === item.id);
      if (product && product.fileUrl) {
        // Ouvrir chaque manuel dans un nouvel onglet
        window.open(product.fileUrl, '_blank');
      }
    });
    
    setCart([]);
    setShowPaymentModal(false);
    setShowCart(false);
    
    // Message de confirmation
    setTimeout(() => {
      alert(`✅ Paiement réussi ! ${cart.length} manuel(s) ouvert(s) dans de nouveaux onglets. Vous pouvez aussi les retrouver dans "Mes Manuels".`);
    }, 500);
    
    setCurrentPage('my-manuals');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              {/* Logo */}
              <div className="relative w-14 h-14 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500 rounded-2xl shadow-lg"></div>
                <div className="absolute inset-0.5 bg-white rounded-2xl flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Book */}
                    <path d="M8 6C8 4.89543 8.89543 4 10 4H26C27.1046 4 28 4.89543 28 6V34C28 35.1046 27.1046 36 26 36H10C8.89543 36 8 35.1046 8 34V6Z" 
                          fill="url(#bookGradient)" stroke="#059669" strokeWidth="1.5"/>
                    <path d="M12 10H24M12 15H24M12 20H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    
                    {/* Crescent Moon */}
                    <path d="M29 8C29 12 26 15 22 15C26 15 29 18 29 22C29 18 32 15 36 15C32 15 29 12 29 8Z" 
                          fill="#F59E0B" stroke="#D97706" strokeWidth="1"/>
                    
                    {/* Star */}
                    <circle cx="24" cy="8" r="1.5" fill="#FCD34D"/>
                    
                    <defs>
                      <linearGradient id="bookGradient" x1="8" y1="4" x2="28" y2="36">
                        <stop offset="0%" stopColor="#10B981"/>
                        <stop offset="100%" stopColor="#059669"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  ilmAcademy
                </h1>
                <p className="text-sm text-gray-600">Manuels Islamiques Interactifs</p>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${currentPage === 'home' ? 'bg-emerald-100 text-emerald-700' : 'hover:bg-gray-100'}`}
              >
                <Home size={18} />
                Accueil
              </button>
              <button 
                onClick={() => setCurrentPage('products')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${currentPage === 'products' ? 'bg-emerald-100 text-emerald-700' : 'hover:bg-gray-100'}`}
              >
                <BookOpen size={18} />
                Manuels
              </button>
              <button 
                onClick={() => setCurrentPage('library')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${currentPage === 'library' ? 'bg-emerald-100 text-emerald-700' : 'hover:bg-gray-100'}`}
              >
                <Book size={18} />
                Bibliothèque
              </button>
              <button 
                onClick={() => setCurrentPage('blog')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${currentPage === 'blog' ? 'bg-emerald-100 text-emerald-700' : 'hover:bg-gray-100'}`}
              >
                <FileText size={18} />
                Blog
              </button>
              <button 
                onClick={() => setCurrentPage('testimonials')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${currentPage === 'testimonials' ? 'bg-emerald-100 text-emerald-700' : 'hover:bg-gray-100'}`}
              >
                <Star size={18} />
                Avis
              </button>
              
              {user && (
                <button 
                  onClick={() => setCurrentPage('my-manuals')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${currentPage === 'my-manuals' ? 'bg-emerald-100 text-emerald-700' : 'hover:bg-gray-100'}`}
                >
                  <Book size={18} />
                  Mes Manuels
                </button>
              )}
              
              <button 
                onClick={() => setShowCart(true)}
                className="relative flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                <ShoppingCart size={20} />
                <span className="font-semibold">Panier</span>
                {cartCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {user ? (
                <div className="flex items-center gap-3 ml-2">
                  <div className="text-right">
                    <p className="font-semibold text-sm">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition"
                    title="Se déconnecter"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => { setShowAuthModal(true); setAuthMode('login'); }}
                  className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
                >
                  <User size={18} />
                  Connexion
                </button>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {showMenu && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4 space-y-2">
              <button 
                onClick={() => { setCurrentPage('home'); setShowMenu(false); }}
                className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                <Home size={18} />
                Accueil
              </button>
              <button 
                onClick={() => { setCurrentPage('products'); setShowMenu(false); }}
                className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                <BookOpen size={18} />
                Manuels
              </button>
              <button 
                onClick={() => { setCurrentPage('library'); setShowMenu(false); }}
                className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                <Book size={18} />
                Bibliothèque
              </button>
              <button 
                onClick={() => { setCurrentPage('blog'); setShowMenu(false); }}
                className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                <FileText size={18} />
                Blog
              </button>
              <button 
                onClick={() => { setCurrentPage('testimonials'); setShowMenu(false); }}
                className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                <Star size={18} />
                Avis
              </button>
              {user && (
                <button 
                  onClick={() => { setCurrentPage('my-manuals'); setShowMenu(false); }}
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  <Book size={18} />
                  Mes Manuels
                </button>
              )}
              <button 
                onClick={() => { setShowCart(true); setShowMenu(false); }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag size={18} />
                  <span className="font-semibold">Panier</span>
                </div>
                {cartCount > 0 && (
                  <span className="bg-white text-emerald-600 rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm">
                    {cartCount}
                  </span>
                )}
              </button>
              {user ? (
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-50 text-red-600"
                >
                  <LogOut size={18} />
                  Se déconnecter
                </button>
              ) : (
                <button 
                  onClick={() => { setShowAuthModal(true); setAuthMode('login'); setShowMenu(false); }}
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <User size={18} />
                  Connexion
                </button>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Home Page */}
      {currentPage === 'home' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🌟</div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Bienvenue chez ilmAcademy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez nos manuels islamiques interactifs conçus pour faciliter l'apprentissage de la science religieuse, de l'arabe et de la foi musulmane.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button 
                onClick={() => setCurrentPage('products')}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition"
              >
                Découvrir nos manuels
              </button>
              <button 
                onClick={() => setCurrentPage('blog')}
                className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition"
              >
                Lire le blog
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Contenu Riche</h3>
              <p className="text-gray-600">Manuels complets avec leçons détaillées et exemples concrets</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Interactif</h3>
              <p className="text-gray-600">Exercices, quiz et jeux pour un apprentissage ludique</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Progression</h3>
              <p className="text-gray-600">Suivez votre avancement et validez vos connaissances</p>
            </div>
          </div>

          {/* Preview Products */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Nos Manuels Interactifs</h3>
            <p className="text-gray-600">Une collection complète pour votre apprentissage</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
                <div className={`bg-gradient-to-br ${product.color} p-8 text-center`}>
                  <div className="text-6xl mb-2">{product.image}</div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2">{product.title}</h4>
                  <p className="text-2xl font-bold text-emerald-600 mb-4">{product.price}€</p>
                  <button 
                    onClick={() => { setSelectedProduct(product); setCurrentPage('products'); }}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition"
                  >
                    Voir le manuel
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Children Books Section */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 mb-16 border-2 border-pink-200">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-3xl font-bold mb-2">Bibliothèque pour Enfants</h3>
              <p className="text-gray-600">Livres papier magnifiquement illustrés pour vos petits musulmans</p>
            </div>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {childrenBooks.slice(0, 4).map(book => (
                <div key={book.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer" onClick={() => setCurrentPage('library')}>
                  <div className={`bg-gradient-to-br ${book.color} p-4 text-center h-48 flex flex-col justify-between`}>
                    <div className="flex justify-between items-start">
                      <div className="text-xl">
                        {book.id === 101 && <span>⭐</span>}
                        {book.id === 102 && <span>📿</span>}
                        {book.id === 103 && <span>🎨</span>}
                        {book.id === 104 && <span>✍️</span>}
                      </div>
                      <div className="bg-white/80 px-2 py-0.5 rounded-full text-xs font-bold text-gray-800">
                        {book.age}
                      </div>
                    </div>
                    <div className="text-5xl">{book.image}</div>
                    <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg text-white text-xs font-bold">
                      {book.format}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-1 line-clamp-2">{book.title}</h4>
                    <p className="text-xs text-gray-600 mb-2">{book.subtitle}</p>
                    <p className="text-xl font-bold text-emerald-600">{book.price}€</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button 
                onClick={() => setCurrentPage('library')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Découvrir toute la bibliothèque →
              </button>
            </div>
          </div>

          {/* Testimonials Preview */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Ce que disent nos utilisateurs</h3>
            <p className="text-gray-600">Plus de 1000 familles nous font confiance</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {testimonials.slice(0, 2).map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button 
              onClick={() => setCurrentPage('testimonials')}
              className="text-emerald-600 font-semibold hover:underline"
            >
              Voir tous les avis →
            </button>
          </div>
        </div>
      )}

      {/* Products Page */}
      {currentPage === 'products' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nos Manuels Interactifs</h2>
            <p className="text-gray-600 text-lg">Choisissez vos manuels et commencez votre apprentissage</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className={`bg-gradient-to-br ${product.color} p-12 text-center`}>
                  <div className="text-8xl mb-4">{product.image}</div>
                  <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                  <p className="text-white/90 mt-2">{product.subtitle}</p>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                  
                  {/* Aperçu gratuit */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-blue-700">
                      <Eye size={18} />
                      Extrait gratuit :
                    </h4>
                    <p className="text-sm text-gray-700 italic">{product.preview}</p>
                    <button 
                      onClick={() => alert(`Aperçu complet du manuel "${product.title}" disponible après l'achat !`)}
                      className="mt-3 text-blue-600 font-semibold text-sm hover:underline"
                    >
                      Lire la suite →
                    </button>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Star className="text-amber-500" size={18} />
                      Points forts :
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="text-emerald-500 flex-shrink-0" size={18} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <div>
                      <p className="text-3xl font-bold text-emerald-600">{product.price}€</p>
                      <p className="text-sm text-gray-500">Format numérique</p>
                    </div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition flex items-center gap-2"
                    >
                      <ShoppingCart size={20} />
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pack Offer */}
          <div className="mt-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-3xl font-bold mb-4">Pack Complet ilmAcademy</h3>
              <p className="text-lg mb-6 text-white/90">Obtenez les 4 manuels à un prix avantageux !</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-2xl line-through opacity-75">94.96€</span>
                <span className="text-5xl font-bold">79.99€</span>
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">-15€</span>
              </div>
              <button 
                onClick={() => products.forEach(p => addToCart(p))}
                className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition"
              >
                Ajouter le pack au panier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Library Page */}
      {currentPage === 'library' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-4xl font-bold mb-4">Bibliothèque Enfants</h2>
            <p className="text-gray-600 text-lg">Livres papier pour initier vos enfants à l'Islam et à l'arabe</p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setBookFilter('all')}
              className={`px-6 py-3 rounded-xl font-semibold transition transform hover:-translate-y-1 ${
                bookFilter === 'all'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              Tous les livres ({childrenBooks.length})
            </button>
            <button
              onClick={() => setBookFilter('hadith')}
              className={`px-6 py-3 rounded-xl font-semibold transition transform hover:-translate-y-1 ${
                bookFilter === 'hadith'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              📖 Hadith & Prophète
            </button>
            <button
              onClick={() => setBookFilter('arabic')}
              className={`px-6 py-3 rounded-xl font-semibold transition transform hover:-translate-y-1 ${
                bookFilter === 'arabic'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              ✍️ Langue Arabe
            </button>
            <button
              onClick={() => setBookFilter('faith')}
              className={`px-6 py-3 rounded-xl font-semibold transition transform hover:-translate-y-1 ${
                bookFilter === 'faith'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              🕌 Foi & Pratique
            </button>
          </div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map(book => (
              <div key={book.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
                {/* Book Cover */}
                <div className={`bg-gradient-to-br ${book.color} p-6 relative h-80 flex flex-col justify-between`}>
                  {/* Age Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-800 shadow-lg">
                    {book.age}
                  </div>
                  
                  {/* Book Cover Design */}
                  <div className="flex-1 flex flex-col items-center justify-center text-white">
                    {/* Top Decoration */}
                    <div className="flex gap-2 mb-4 text-4xl opacity-80">
                      {book.id === 101 && <><span>⭐</span><span>🌙</span><span>⭐</span></>}
                      {book.id === 102 && <><span>📿</span><span>✨</span><span>📿</span></>}
                      {book.id === 103 && <><span>🎨</span><span>✏️</span><span>🎨</span></>}
                      {book.id === 104 && <><span>✍️</span><span>📝</span><span>✍️</span></>}
                      {book.id === 105 && <><span>🌟</span><span>🕌</span><span>🌟</span></>}
                      {book.id === 106 && <><span>🕋</span><span>☪️</span><span>🕋</span></>}
                      {book.id === 107 && <><span>🤲</span><span>💫</span><span>🤲</span></>}
                      {book.id === 108 && <><span>📚</span><span>🌍</span><span>📚</span></>}
                    </div>
                    
                    {/* Main Icon */}
                    <div className="text-8xl mb-4 drop-shadow-2xl">
                      {book.image}
                    </div>
                    
                    {/* Title on Cover */}
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border-2 border-white/40 shadow-xl w-full">
                      <h3 className="font-bold text-xl text-center leading-tight mb-1">
                        {book.title}
                      </h3>
                      <p className="text-sm text-center opacity-90 font-medium">
                        {book.subtitle}
                      </p>
                    </div>
                    
                    {/* Bottom Decoration */}
                    <div className="flex gap-2 mt-4 text-3xl opacity-80">
                      {book.id === 101 && <><span>🌸</span><span>🦋</span><span>🌸</span></>}
                      {book.id === 102 && <><span>📖</span><span>✨</span><span>📖</span></>}
                      {book.id === 103 && <><span>🎪</span><span>🎨</span><span>🎪</span></>}
                      {book.id === 104 && <><span>🖍️</span><span>📐</span><span>🖍️</span></>}
                      {book.id === 105 && <><span>🌙</span><span>⭐</span><span>🌙</span></>}
                      {book.id === 106 && <><span>🕌</span><span>📿</span><span>🕌</span></>}
                      {book.id === 107 && <><span>🌟</span><span>💝</span><span>🌟</span></>}
                      {book.id === 108 && <><span>🎯</span><span>📝</span><span>🎯</span></>}
                    </div>
                  </div>
                  
                  {/* Format Badge */}
                  <div className="text-center">
                    <div className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold inline-block border-2 border-white/50 shadow-lg">
                      {book.format}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{book.subtitle}</p>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{book.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      📄 {book.pages} pages
                    </span>
                    <span className="flex items-center gap-1">
                      👶 {book.age}
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Contenu :</p>
                    <div className="flex flex-wrap gap-2">
                      {book.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-2xl font-bold text-emerald-600">{book.price}€</p>
                      <p className="text-xs text-gray-500">+ frais de port</p>
                    </div>
                    <button 
                      onClick={() => addToCart(book)}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition flex items-center gap-2"
                    >
                      <ShoppingCart size={16} />
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border-2 border-blue-200">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold mb-2">Livraison rapide</h3>
              <p className="text-sm text-gray-700">Expédition sous 48h partout en France</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold mb-2">Qualité premium</h3>
              <p className="text-sm text-gray-700">Illustrations magnifiques et papier de qualité</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border-2 border-emerald-200">
              <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold mb-2">Approuvé par les parents</h3>
              <p className="text-sm text-gray-700">Contenus vérifiés et adaptés à chaque âge</p>
            </div>
          </div>

          {/* Pack Promotion */}
          <div className="mt-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-3xl font-bold mb-4">Offre Spéciale Bibliothèque</h3>
              <p className="text-lg mb-6 text-white/90">Achetez 3 livres, le 4ème à -50% !</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-xl opacity-75">Réduction automatique au panier</span>
              </div>
              <button 
                onClick={() => setCurrentPage('library')}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition"
              >
                Découvrir tous les livres
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Page */}
      {currentPage === 'blog' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Blog Pédagogique</h2>
            <p className="text-gray-600 text-lg">Conseils, astuces et ressources pour mieux apprendre</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
                <div className={`${post.color} p-12 text-center`}>
                  <div className="text-6xl mb-2">{post.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button 
                    onClick={() => alert('Article complet bientôt disponible !')}
                    className="text-emerald-600 font-semibold hover:underline flex items-center gap-2"
                  >
                    Lire l'article complet
                    <TrendingUp size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">📧 Restez informé</h3>
            <p className="mb-6">Recevez nos derniers articles et conseils directement dans votre boîte mail</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 outline-none"
              />
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Page */}
      {currentPage === 'testimonials' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Témoignages</h2>
            <p className="text-gray-600 text-lg">L'avis de nos utilisateurs satisfaits</p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Star className="fill-amber-400 text-amber-400" size={24} />
              <span className="text-2xl font-bold">4.9/5</span>
              <span className="text-gray-600">(286 avis)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          {/* Add Review CTA */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center border-2 border-blue-200">
            <h3 className="text-2xl font-bold mb-3">Vous utilisez nos manuels ?</h3>
            <p className="text-gray-600 mb-6">Partagez votre expérience avec la communauté !</p>
            <button 
              onClick={() => alert('Formulaire d\'avis bientôt disponible !')}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition"
            >
              Laisser un avis
            </button>
          </div>
        </div>
      )}

      {/* My Manuals Page */}
      {currentPage === 'my-manuals' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Mes Manuels</h2>
            <p className="text-gray-600 text-lg">Accédez à vos manuels achetés</p>
          </div>

          {!user ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Connexion requise</h3>
              <p className="text-gray-600 mb-6">Connectez-vous pour accéder à vos manuels</p>
              <button 
                onClick={() => { setShowAuthModal(true); setAuthMode('login'); }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition"
              >
                Se connecter
              </button>
            </div>
          ) : purchasedProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-4">Aucun manuel acheté</h3>
              <p className="text-gray-600 mb-6">Découvrez nos manuels interactifs</p>
              <button 
                onClick={() => setCurrentPage('products')}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition"
              >
                Explorer les manuels
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => purchasedProducts.includes(p.id)).map(product => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className={`bg-gradient-to-br ${product.color} p-8 text-center`}>
                    <div className="text-6xl mb-2">{product.image}</div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">{product.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{product.subtitle}</p>
                    <button 
                      onClick={() => {
                        if (product.fileUrl) {
                          window.open(product.fileUrl, '_blank');
                        }
                      }}
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
                    >
                      Ouvrir le manuel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">
                {authMode === 'login' ? 'Connexion' : 'Inscription'}
              </h3>
              <button 
                onClick={() => setShowAuthModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              {authMode === 'register' && (
                <div>
                  <label className="block text-sm font-semibold mb-2">Nom complet</label>
                  <input 
                    type="text"
                    value={authForm.name}
                    onChange={(e) => setAuthForm({...authForm, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition"
                    placeholder="Ahmed Dupont"
                    required={authMode === 'register'}
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="email"
                    value={authForm.email}
                    onChange={(e) => setAuthForm({...authForm, email: e.target.value})}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition"
                    placeholder="email@exemple.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    value={authForm.password}
                    onChange={(e) => setAuthForm({...authForm, password: e.target.value})}
                    className="w-full pl-11 pr-11 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
              >
                {authMode === 'login' ? 'Se connecter' : 'S\'inscrire'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {authMode === 'login' ? "Pas encore de compte ?" : "Déjà un compte ?"}
                <button 
                  onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                  className="ml-2 text-emerald-600 font-semibold hover:underline"
                >
                  {authMode === 'login' ? 'S\'inscrire' : 'Se connecter'}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between sticky top-0 bg-white">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <CreditCard />
                Paiement
              </h3>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {/* Order Summary */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold mb-4">Récapitulatif de commande</h4>
                <div className="space-y-3">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between">
                      <span>{item.title} x{item.quantity}</span>
                      <span className="font-semibold">{(item.price * item.quantity).toFixed(2)}€</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-emerald-600">{total.toFixed(2)}€</span>
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-6">
                <h4 className="font-semibold mb-4">Méthode de paiement</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setPaymentMethod('stripe')}
                    className={`p-4 border-2 rounded-xl transition ${
                      paymentMethod === 'stripe' 
                        ? 'border-emerald-600 bg-emerald-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">💳</div>
                    <p className="font-semibold">Carte Bancaire</p>
                    <p className="text-xs text-gray-500">Stripe</p>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-4 border-2 rounded-xl transition ${
                      paymentMethod === 'paypal' 
                        ? 'border-blue-600 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">🅿️</div>
                    <p className="font-semibold">PayPal</p>
                    <p className="text-xs text-gray-500">Compte PayPal</p>
                  </button>
                </div>
              </div>

              {/* Payment Form (Simulated) */}
              {paymentMethod === 'stripe' && (
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Numéro de carte</label>
                    <input 
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Date d'expiration</label>
                      <input 
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">CVV</label>
                      <input 
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6 text-center">
                  <div className="text-5xl mb-3">🅿️</div>
                  <p className="text-gray-700 mb-4">Vous serez redirigé vers PayPal pour finaliser votre paiement de manière sécurisée.</p>
                </div>
              )}

              {/* Security Note */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-green-800 flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-600" />
                  Paiement 100% sécurisé et crypté
                </p>
              </div>

              {/* Confirm Button */}
              <button 
                onClick={processPayment}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition"
              >
                Confirmer le paiement ({total.toFixed(2)}€)
              </button>
              <p className="text-center text-xs text-gray-500 mt-3">
                En confirmant, vous acceptez nos conditions générales de vente
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b flex items-center justify-between">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <ShoppingCart />
                Mon Panier
              </h3>
              <button 
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-500 text-lg">Votre panier est vide</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className={`bg-gradient-to-br ${item.color} w-20 h-20 rounded-lg flex items-center justify-center text-3xl flex-shrink-0`}>
                        {item.image}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 bg-white rounded-lg hover:bg-gray-100 font-bold"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 bg-white rounded-lg hover:bg-gray-100 font-bold"
                            >
                              +
                            </button>
                          </div>
                          <p className="font-bold text-emerald-600">{(item.price * item.quantity).toFixed(2)}€</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:bg-red-50 p-2 rounded-lg h-fit"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total :</span>
                  <span className="text-3xl font-bold text-emerald-600">{total.toFixed(2)}€</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition"
                >
                  Procéder au paiement
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  🔒 Paiement sécurisé • 📥 Livraison instantanée
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-xl mb-4">ilmAcademy</h4>
              <p className="text-gray-400">Votre partenaire pour l'apprentissage islamique</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liens rapides</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('products')} className="hover:text-white">Nos manuels</button></li>
                <li><button onClick={() => setCurrentPage('library')} className="hover:text-white">Bibliothèque</button></li>
                <li><button onClick={() => setCurrentPage('blog')} className="hover:text-white">Blog</button></li>
                <li><button onClick={() => setCurrentPage('testimonials')} className="hover:text-white">Témoignages</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Conditions d'utilisation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suivez-nous</h4>
              <p className="text-gray-400 mb-3">Rejoignez notre communauté</p>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-gray-700 transition">📘</button>
                <button className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-gray-700 transition">📷</button>
                <button className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-gray-700 transition">🐦</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ilmAcademy. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}