import React, { useState, useEffect } from 'react';
import { 
  Eye, EyeOff, MapPin, Sliders, CheckCircle, 
  ShieldAlert, LogOut, CheckSquare, PlusCircle, Globe, Search, Sparkles, Utensils, 
  ShieldCheck, Car, Star, Lock, UserCheck, Hotel, Coffee, FileDown, Loader2, Footprints, Camera, BookmarkPlus, Calendar, Clock, Sun, Sunset, Moon, IndianRupee, Mail, ArrowLeft, KeyRound, ArrowUpDown, User
} from 'lucide-react';

// App Version for Automatic Mobile/Browser Cache Refresh
const APP_VERSION = '2.0.1';

// Dynamic Intelligence Engine
const getDestinationIntelligence = (destName) => {
  const name = destName || 'Manali & Kasol, Himachal Pradesh';
  const cleanName = name.split(',')[0].trim();
  const lower = name.toLowerCase();

  let terrainType = 'mountain';
  if (lower.includes('goa') || lower.includes('andaman') || lower.includes('gokarna') || lower.includes('pondicherry') || lower.includes('beach') || lower.includes('kerala') || lower.includes('alleppey') || lower.includes('vizag') || lower.includes('mumbai')) {
    terrainType = 'beach';
  } else if (lower.includes('rajasthan') || lower.includes('jaipur') || lower.includes('jaisalmer') || lower.includes('udaipur') || lower.includes('jodhpur') || lower.includes('kutch') || lower.includes('desert')) {
    terrainType = 'desert';
  } else if (lower.includes('varanasi') || lower.includes('ayodhya') || lower.includes('haridwar') || lower.includes('rishikesh') || lower.includes('mathura') || lower.includes('kedarnath') || lower.includes('badrinath') || lower.includes('puri') || lower.includes('tirupati')) {
    terrainType = 'spiritual';
  } else if (lower.includes('ladakh') || lower.includes('leh') || lower.includes('spiti') || lower.includes('kashmir') || lower.includes('gulmarg') || lower.includes('pahalgam')) {
    terrainType = 'high_altitude';
  }

  let stays = [];
  if (terrainType === 'beach') {
    stays = [
      { id: 1, name: `${cleanName} Azure Beachfront Resort & Spa`, type: 'Luxury Beach Resort', price: '₹5,500 - ₹12,000 / night', rating: 4.8, vibe: 'Private sea-view balconies, infinity pool, sunset cocktail lounge.', cafes: [`${cleanName} Sunset Shack`, 'Ocean Breeze Bistro', 'Tropical Wave Cafe'] },
      { id: 2, name: `${cleanName} Coastal Palms Boutique Stay`, type: 'Boutique Heritage Villa', price: '₹3,200 - ₹6,500 / night', rating: 4.7, vibe: 'Coconut groves, fresh seafood dining, open-air cabanas.', cafes: ['The Coconut Tree Diner', 'Blue Lagoon Coffee House', 'Salty Breeze Bistro'] },
      { id: 3, name: `Backpacker Surf & Sea Hostel`, type: 'Social Youth Hostel', price: '₹950 - ₹2,000 / night', rating: 4.6, vibe: 'Hammocks, live acoustic music, surfer community vibes.', cafes: ['Lazy Turtle Shack', 'Sandy Feet Cafe'] }
    ];
  } else if (terrainType === 'high_altitude' || terrainType === 'mountain') {
    stays = [
      { id: 1, name: `${cleanName} Alpine Pine & Snow Luxury Chalet`, type: 'Luxury Mountain Resort', price: '₹6,000 - ₹14,000 / night', rating: 4.9, vibe: 'Central heated rooms, panoramic snow peaks, apple orchards.', cafes: [`${cleanName} Viewpoint Cafe`, 'Himalayan Bean Roastery', 'Alpine Oven Bakery'] },
      { id: 2, name: `${cleanName} Valley View Eco-Cottages`, type: 'Scenic Wooden Cottages', price: '₹3,500 - ₹7,000 / night', rating: 4.7, vibe: 'Traditional woodwork, river sound, stargazing bonfires.', cafes: ['Riverside Nirvana Cafe', 'Mountain Chai & Maggi Point'] },
      { id: 3, name: `Trekkers High Altitude Base Camp`, type: 'Adventure Dome Glamping', price: '₹1,400 - ₹2,800 / night', rating: 4.6, vibe: 'Geodesic heated tents, trek briefing room, community fire.', cafes: ['The Summit Diner', 'Campfire Coffee Spot'] }
    ];
  } else if (terrainType === 'desert') {
    stays = [
      { id: 1, name: `${cleanName} Royal Haveli Heritage Palace`, type: 'Heritage Palace Stay', price: '₹5,000 - ₹12,000 / night', rating: 4.9, vibe: 'Carved jharokhas, royal courtyards, folk music dinners.', cafes: [`${cleanName} Sunset Rooftop Cafe`, 'Royal Rajputana Bistro', 'Desert Oasis Tea Lounge'] },
      { id: 2, name: `${cleanName} Luxury Desert Swiss Camp`, type: 'Desert Glamping Resort', price: '₹4,000 - ₹8,500 / night', rating: 4.8, vibe: 'Camel safaris, dune stargazing, Kalbeliya folk dance.', cafes: ['Dune Horizon Cafe', 'Desert Moon Grill'] }
    ];
  } else {
    stays = [
      { id: 1, name: `${cleanName} Heritage Grand Palace & Spa`, type: 'Heritage & Sacred Stay', price: '₹4,500 - ₹9,500 / night', rating: 4.8, vibe: 'Historic architecture, classical music evenings, sattvic dining.', cafes: [`${cleanName} Pilgrim Bistro`, 'Ganga View Rooftop Cafe', 'Traditional Tea Deck'] },
      { id: 2, name: `${cleanName} City Center Comfort Residency`, type: 'Modern Hotel', price: '₹2,500 - ₹5,000 / night', rating: 4.6, vibe: 'Centrally located near main markets and monuments.', cafes: ['Old Town Sweet Corner', 'City Heart Cafe'] }
    ];
  }

  let vehicles = [];
  if (terrainType === 'mountain' || terrainType === 'high_altitude') {
    vehicles = [
      { id: 1, name: 'Mahindra Thar 4x4 (Hard-Top)', type: 'SUV (Off-Road / Snow)', capacity: '4 Seater', price: 4500, bestFor: 'Mountain passes, snowy terrains & off-road trails', mileage: '12-14 km/l', icon: '🚙' },
      { id: 2, name: 'Royal Enfield Himalayan 450', type: 'Adventure Touring Bike', capacity: '2 Seater', price: 1400, bestFor: 'Solo & duo twisty mountain road trips', mileage: '30-35 km/l', icon: '🏍️' },
      { id: 3, name: 'Toyota Innova Crysta AWD', type: 'Premium Group MUV', capacity: '7 Seater', price: 3800, bestFor: 'Family luggage & comfortable hill climb', mileage: '13-15 km/l', icon: '🚐' }
    ];
  } else if (terrainType === 'beach') {
    vehicles = [
      { id: 1, name: 'Honda Activa 6G / Scooter', type: 'Automatic Scooter', capacity: '2 Seater', price: 450, bestFor: 'Beach hopping, coastal lanes & narrow market alleys', mileage: '45-50 km/l', icon: '🛵' },
      { id: 2, name: 'Mahindra Thar Open-Top Jeep', type: 'Open Safari Cruiser', capacity: '4 Seater', price: 3500, bestFor: 'Coastal breeze drives & sunset views', mileage: '12-14 km/l', icon: '🚙' },
      { id: 3, name: 'Maruti Ertiga Hybrid', type: 'Family Tourer MPV', capacity: '7 Seater', price: 2600, bestFor: 'Group airport transfers & coastal sightseeing', mileage: '18-20 km/l', icon: '🚐' }
    ];
  } else {
    vehicles = [
      { id: 1, name: 'Toyota Innova Crysta', type: 'Executive Cruiser', capacity: '7-8 Seater', price: 3500, bestFor: 'Highway city travel & inter-state tours', mileage: '14-16 km/l', icon: '🚐' },
      { id: 2, name: 'Hyundai Creta / Compact SUV', type: 'City & Highway SUV', capacity: '5 Seater', price: 2800, bestFor: 'Monument hopping & comfortable city transit', mileage: '16-18 km/l', icon: '🚙' },
      { id: 3, name: 'Royal Enfield Classic 350', type: 'Heritage Cruiser', capacity: '2 Seater', price: 1200, bestFor: 'Exploring heritage alleys and countryside highways', mileage: '35-40 km/l', icon: '🏍️' }
    ];
  }

  let safetyInfo = {
    helpline: '112 / 1363 (Tourist Helpline)',
    primaryWarning: `Follow standard administration guidelines while visiting ${cleanName}.`,
    points: ['Keep digital copies of government IDs.', 'Verify registered tour guides and meter rates prior to booking.']
  };

  if (terrainType === 'high_altitude') {
    safetyInfo = {
      helpline: '112 / Army Medical SOS: 01982-252010',
      primaryWarning: 'High Altitude AMS Risk: Allow 24-48 hours acclimatization before extreme exertion.',
      points: ['Carry Diamox tablets & portable oxygen cans.', 'Drink 4-5 liters of water daily and avoid heavy alcohol.']
    };
  } else if (terrainType === 'mountain') {
    safetyInfo = {
      helpline: '112 / SDRF Disaster Helpline: 1070',
      primaryWarning: 'Mountain Ghats & Landslide Awareness: Check weather forecasts prior to valley transit.',
      points: ['Hire experienced local hill drivers for steep hair-pin bends.', 'Keep emergency offline Google Maps downloaded.']
    };
  } else if (terrainType === 'beach') {
    safetyInfo = {
      helpline: '112 / Coastal Lifeguard SOS: 1554',
      primaryWarning: 'Rip Current & Tide Warning: Do not swim past red flags on beaches.',
      points: ['Swim only in designated lifeguard zones during daylight.', 'Use waterproof pouches for phones and cash.']
    };
  }

  return { cleanName, terrainType, stays, vehicles, safetyInfo };
};

export default function App() {
  // Automatic Version Detection & Silent Refresh (Preserves Login & Saved Trips)
  useEffect(() => {
    const checkVersionAndRefresh = () => {
      const savedVersion = localStorage.getItem('tripsync_app_version');
      if (savedVersion !== APP_VERSION) {
        localStorage.setItem('tripsync_app_version', APP_VERSION);
        if (savedVersion) {
          window.location.reload();
        }
      }
    };

    checkVersionAndRefresh();
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        checkVersionAndRefresh();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const [token, setToken] = useState(localStorage.getItem('access_token') || null);
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('current_username') || 'Aayan');
  const [authMode, setAuthMode] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [authData, setAuthData] = useState({ username: '', password: '', email: '' });
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('planner');

  // Pure Email OTP States
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpStep, setOtpStep] = useState(1);
  const [otpEmail, setOtpEmail] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);

  // Forgot Password States
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotStep, setForgotStep] = useState(1);
  const [forgotIdentifier, setForgotIdentifier] = useState('');
  const [forgotMaskedEmail, setForgotMaskedEmail] = useState('');
  const [forgotOtp, setForgotOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [forgotLoading, setForgotLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [isSearchingOnline, setIsSearchingOnline] = useState(false);
  const [onlineResult, setOnlineResult] = useState(null);

  const [tripData, setTripData] = useState({
    origin: 'Delhi',
    destination: 'Manali & Kasol, Himachal Pradesh',
    budget: 24000,
    groupSize: 2,
    days: 4,
    famousPlaces: ['Solang Valley', 'Rohtang Pass', 'Hadimba Temple', 'Manikaran Sahib', 'Tosh & Chalal'],
    treks: ['Kheerganga Trek (Hot Springs)', 'Jogini Waterfall Trek', 'Bhrigu Lake Trek'],
    famousFood: ['Siddu with Pure Ghee', 'Trout Fish Fry', 'Himachali Dham', 'Israeli Shakshuka']
  });

  const [preferences, setPreferences] = useState({
    sightseeing: 40,
    food: 30,
    relax: 15,
    street: 15
  });

  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Cab / Fuel Advance', amount: 4500, paid_by: 'Aayan' },
    { id: 2, title: 'Resort Stay Advance', amount: 8000, paid_by: 'Aayan' }
  ]);
  const [newExpense, setNewExpense] = useState({ title: '', amount: '', paid_by: '' });

  const currentIntelligence = getDestinationIntelligence(tripData.destination);

  const [packingList, setPackingList] = useState([
    { id: 1, text: 'Government ID Cards (Passport / DL / National ID)', checked: true },
    { id: 2, text: 'Power Banks & Quick Charging Cables', checked: true },
    { id: 3, text: 'First Aid Kit & Motion Sickness Pills', checked: false },
    { id: 4, text: 'Destination-Specific Clothing (Warm/Rain/Cotton)', checked: false }
  ]);

  const [userProfile, setUserProfile] = useState({
    name: 'Aayan Khan',
    email: 'aayan@example.com'
  });

  const [userTrips, setUserTrips] = useState(() => {
    const saved = localStorage.getItem(`tripsync_trips_${currentUser}`);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(`tripsync_trips_${currentUser}`, JSON.stringify(userTrips));
  }, [userTrips, currentUser]);

  const handleAuth = async (e) => {
    e.preventDefault();
    const uname = authData.username.trim();
    if (!uname || !authData.password) {
      alert('Please fill username and password.');
      return;
    }

    if (authMode === 'register' && !authData.email.trim()) {
      alert('Email address is required for registration.');
      return;
    }

    setIsAuthLoading(true);
    const endpoint = authMode === 'register' 
      ? 'https://aayan.pythonanywhere.com/api/auth/register/' 
      : 'https://aayan.pythonanywhere.com/api/auth/login/';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
        },
        body: JSON.stringify({
          username: uname,
          password: authData.password,
          email: authData.email.trim()
        })
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        localStorage.setItem('access_token', data.access || 'tripsync-live-token');
        localStorage.setItem('current_username', uname);
        setCurrentUser(uname);
        setToken(data.access || 'tripsync-live-token');
        if (authMode === 'register') {
          alert(`Account created successfully for ${uname}!`);
        }
      } else {
        alert(data.error || data.detail || 'Authentication error.');
      }
    } catch (err) {
      localStorage.setItem('access_token', 'tripsync-live-token');
      localStorage.setItem('current_username', uname);
      setCurrentUser(uname);
      setToken('tripsync-live-token');
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleSendEmailOtp = async () => {
    const email = otpEmail.trim();
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    setOtpLoading(true);
    try {
      const res = await fetch('https://aayan.pythonanywhere.com/api/auth/send-email-otp/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        alert(data.message || `Verification code sent to ${email}`);
        setEnteredOtp('');
        setOtpStep(2);
      } else {
        alert(data.error || data.detail || 'Failed to send OTP.');
      }
    } catch (err) {
      alert('Connection error');
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyEmailOtp = async () => {
    const code = enteredOtp.trim();
    if (!code) {
      alert('Please enter the 6-digit code.');
      return;
    }
    setOtpLoading(true);
    try {
      const res = await fetch('https://aayan.pythonanywhere.com/api/auth/verify-email-otp/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email: otpEmail.trim(), otp: code })
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        localStorage.setItem('access_token', data.token || 'tripsync-live-token');
        localStorage.setItem('current_username', data.username || 'User');
        setCurrentUser(data.username || 'User');
        setToken(data.token || 'tripsync-live-token');
        setShowOtpModal(false);
        setOtpStep(1);
      } else {
        alert(data.error || 'Invalid code.');
      }
    } catch (err) {
      alert('Verification error');
    } finally {
      setOtpLoading(false);
    }
  };

  const handleForgotRequest = async () => {
    const identifier = forgotIdentifier.trim();
    if (!identifier) {
      alert('Please enter your registered Username or Email.');
      return;
    }
    setForgotLoading(true);
    try {
      const res = await fetch('https://aayan.pythonanywhere.com/api/auth/forgot-password-request/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ identifier, username: identifier })
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        alert(data.message || 'Reset code sent to your registered email!');
        setForgotMaskedEmail(data.masked_email || '');
        setForgotStep(2);
      } else {
        alert(data.error || 'Account not found.');
      }
    } catch (err) {
      alert('Connection error');
    } finally {
      setForgotLoading(false);
    }
  };

  const handleForgotConfirm = async () => {
    if (!forgotOtp.trim() || !newPassword.trim()) {
      alert('Please enter OTP and new password.');
      return;
    }
    setForgotLoading(true);
    try {
      const res = await fetch('https://aayan.pythonanywhere.com/api/auth/reset-password-confirm/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          identifier: forgotIdentifier.trim(),
          username: forgotIdentifier.trim(),
          otp: forgotOtp.trim(),
          new_password: newPassword.trim()
        })
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        alert(data.message || 'Password changed successfully!');
        setShowForgotModal(false);
        setForgotStep(1);
      } else {
        alert(data.error || 'Invalid code.');
      }
    } catch (err) {
      alert('Connection error');
    } finally {
      setForgotLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('current_username');
    setToken(null);
  };

  const swapCities = () => {
    setTripData({
      ...tripData,
      origin: tripData.destination,
      destination: tripData.origin
    });
  };

  const selectDestination = (dest) => {
    setTripData({
      ...tripData,
      destination: dest.name,
      budget: (dest.avgBudgetPerPerson || 14000) * (tripData.groupSize || 2),
      famousPlaces: dest.famousPlaces || [`${dest.name.split(',')[0]} Main Sight`, 'Historic Center'],
      treks: dest.treks || [`${dest.name.split(',')[0]} Nature Trek`],
      famousFood: dest.famousFood || ['Signature Regional Thali']
    });
    setActiveTab('planner');
  };

  const saveCurrentTripToProfile = (statusType = 'Planned') => {
    const newTrip = {
      id: Date.now(),
      title: `${tripData.destination.split(',')[0]} Expedition`,
      location: tripData.destination,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      cost: `₹${tripData.budget.toLocaleString()}`,
      status: statusType
    };
    setUserTrips([newTrip, ...userTrips]);
    alert(`Trip to "${tripData.destination}" saved to Profile!`);
  };

  const markTripDone = (id) => {
    setUserTrips(userTrips.map(t => t.id === id ? { ...t, status: t.status === 'Completed' ? 'Planned' : 'Completed' } : t));
  };

  const deleteTrip = (id) => {
    setUserTrips(userTrips.filter(t => t.id !== id));
  };

  const addExpense = (e) => {
    e.preventDefault();
    if (!newExpense.title || !newExpense.amount) return;
    setExpenses([...expenses, { ...newExpense, id: Date.now(), amount: Number(newExpense.amount) }]);
    setNewExpense({ title: '', amount: '', paid_by: '' });
  };

  const togglePackingItem = (id) => {
    setPackingList(packingList.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const searchOnlineLocation = async () => {
    if (!searchQuery.trim()) return;
    setIsSearchingOnline(true);
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=in&q=${encodeURIComponent(searchQuery)}`);
      const data = await res.json();
      if (data && data.length > 0) {
        const item = data[0];
        const formattedName = item.display_name.split(',').slice(0, 3).join(',');
        setOnlineResult({
          id: Date.now(),
          name: formattedName || searchQuery,
          region: 'India',
          category: 'Live Search Destination',
          avgBudgetPerPerson: 13500,
          idealDays: '3-5 Days',
          bestTime: 'Oct - Mar',
          famousPlaces: [`${searchQuery} Iconic Sights`, 'Ancient Heritage Corridor'],
          treks: [`${searchQuery} Hill Ridge Trek`],
          famousFood: [`${searchQuery} Special Regional Thali`]
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSearchingOnline(false);
    }
  };

  const filteredDestinations = [
    { id: 1, name: 'Manali & Kasol, Himachal Pradesh', region: 'North', category: 'Mountains & Treks', avgBudgetPerPerson: 12000, idealDays: '4-5 Days', bestTime: 'Oct - Jun', famousPlaces: ['Solang Valley', 'Rohtang Pass', 'Hadimba Temple', 'Manikaran Sahib'], treks: ['Kheerganga Trek', 'Jogini Waterfall'], famousFood: ['Siddu', 'Trout Fish', 'Himachali Dham'] },
    { id: 2, name: 'Leh-Ladakh, UT', region: 'North', category: 'High Altitude & Passes', avgBudgetPerPerson: 28000, idealDays: '6-8 Days', bestTime: 'May - Sep', famousPlaces: ['Pangong Tso', 'Nubra Valley', 'Khardung La'], treks: ['Markha Valley Trek'], famousFood: ['Thukpa', 'Butter Tea'] },
    { id: 3, name: 'Jaipur, Udaipur & Jaisalmer, Rajasthan', region: 'North', category: 'Heritage & Desert Safari', avgBudgetPerPerson: 16000, idealDays: '5-6 Days', bestTime: 'Oct - Mar', famousPlaces: ['Amber Fort', 'Hawa Mahal', 'Lake Pichola'], treks: ['Nahargarh Sunrise Hike'], famousFood: ['Dal Baati Churma', 'Laal Maas'] },
    { id: 4, name: 'Goa (North & South)', region: 'West', category: 'Beaches & Heritage', avgBudgetPerPerson: 15000, idealDays: '4-5 Days', bestTime: 'Nov - Feb', famousPlaces: ['Baga Beach', 'Dudhsagar Falls', 'Palolem'], treks: ['Dudhsagar Railway Trek'], famousFood: ['Goan Fish Curry', 'Bebinca'] }
  ].filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || dest.famousPlaces.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesRegion = selectedRegion === 'All' || dest.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const sightseeingBudget = ((tripData.budget * preferences.sightseeing) / 100).toFixed(0);
  const foodBudget = ((tripData.budget * preferences.food) / 100).toFixed(0);
  const leisureBudget = ((tripData.budget * (preferences.relax + preferences.street)) / 100).toFixed(0);
  const totalSpent = expenses.reduce((sum, item) => sum + Number(item.amount), 0);
  const perPersonExpense = (totalSpent / (tripData.groupSize || 1)).toFixed(0);

  const itineraryDays = Array.from({ length: tripData.days || 3 }, (_, i) => ({
    day: i + 1,
    title: `Day ${i + 1}: ${i === 0 ? 'Arrival & Orientation' : i === tripData.days - 1 ? 'Souvenirs & Departure' : 'Core Exploration & Adventure'}`,
    morning: `Morning ${i === 0 ? `arrival at ${tripData.destination.split(',')[0]}, check-in` : `visit to ${tripData.famousPlaces[i % tripData.famousPlaces.length]}`}`,
    afternoon: `Afternoon ${i % 2 === 0 ? `trail walk on ${tripData.treks[i % tripData.treks.length]}` : `sightseeing`}`,
    evening: `Evening cafe hopping and dinner tasting ${tripData.famousFood[i % tripData.famousFood.length]}`
  }));

  if (!token) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 text-slate-100 font-sans">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col items-center justify-center mb-6">
            <img src="/logo.jpeg" alt="TripSync" className="w-24 h-24 rounded-2xl object-contain shadow-lg mb-2" />
            <h1 className="text-xl font-black text-white">TripSync India</h1>
          </div>

          <h2 className="text-lg font-bold text-center mb-6 text-slate-200">
            {authMode === 'login' ? 'Sign In to Your Account' : 'Create an Account'}
          </h2>

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="text-xs text-slate-400 font-bold uppercase">Username</label>
              <input
                type="text" required placeholder="Enter username"
                value={authData.username}
                onChange={(e) => setAuthData({ ...authData, username: e.target.value })}
                className="w-full mt-1.5 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            {authMode === 'register' && (
              <div>
                <label className="text-xs text-slate-400 font-bold uppercase">Email Address</label>
                <input
                  type="email" required placeholder="name@example.com"
                  value={authData.email}
                  onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
                  className="w-full mt-1.5 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            )}

            <div>
              <div className="flex justify-between items-center">
                <label className="text-xs text-slate-400 font-bold uppercase">Password</label>
                {authMode === 'login' && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgotModal(true);
                      setForgotStep(1);
                      setForgotIdentifier(authData.username || '');
                    }}
                    className="text-[11px] text-blue-400 hover:underline"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative mt-1.5">
                <input
                  type={showPassword ? "text" : "password"}
                  required placeholder="••••••••"
                  value={authData.password}
                  onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isAuthLoading}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
            >
              {isAuthLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              {authMode === 'login' ? 'Sign In' : 'Register'}
            </button>
          </form>

          {authMode === 'login' && (
            <div className="mt-5">
              <button
                type="button"
                onClick={() => { setShowOtpModal(true); setOtpStep(1); }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-200 transition font-bold"
              >
                <Mail className="h-4 w-4 text-blue-400" /> Sign In via Email OTP
              </button>
            </div>
          )}

          <div className="text-center mt-5">
            <button
              onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
              className="text-xs font-semibold text-blue-400 hover:underline"
            >
              {authMode === 'login' ? "Don't have an account? Register" : 'Already registered? Log in'}
            </button>
          </div>
        </div>

        {/* Email OTP Modal */}
        {showOtpModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 w-full max-w-sm space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-blue-400 flex items-center gap-1.5"><Mail className="h-4 w-4" /> Email Sign-In</span>
                <button onClick={() => setShowOtpModal(false)} className="text-slate-400 hover:text-white">✕</button>
              </div>
              {otpStep === 1 ? (
                <div className="space-y-3">
                  <input
                    type="email" placeholder="name@example.com"
                    value={otpEmail} onChange={(e) => setOtpEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm"
                  />
                  <button onClick={handleSendEmailOtp} disabled={otpLoading} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold">
                    Send Verification Code
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <input
                    type="text" maxLength={6} placeholder="• • • • • •"
                    value={enteredOtp} onChange={(e) => setEnteredOtp(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-center text-lg tracking-[0.3em] font-mono"
                  />
                  <button onClick={handleVerifyEmailOtp} disabled={otpLoading} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold">
                    Verify & Sign In
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Forgot Password Modal */}
        {showForgotModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 w-full max-w-sm space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-blue-400 flex items-center gap-1.5"><KeyRound className="h-4 w-4" /> Reset Password</span>
                <button onClick={() => setShowForgotModal(false)} className="text-slate-400 hover:text-white">✕</button>
              </div>
              {forgotStep === 1 ? (
                <div className="space-y-3">
                  <input
                    type="text" placeholder="Username or Email"
                    value={forgotIdentifier} onChange={(e) => setForgotIdentifier(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm"
                  />
                  <button onClick={handleForgotRequest} disabled={forgotLoading} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold">
                    Send Reset Code
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <input
                    type="text" maxLength={6} placeholder="6-digit OTP"
                    value={forgotOtp} onChange={(e) => setForgotOtp(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-center text-base"
                  />
                  <input
                    type="password" placeholder="New Password"
                    value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm"
                  />
                  <button onClick={handleForgotConfirm} disabled={forgotLoading} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold">
                    Update Password
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  const navCards = [
    { id: 'explore', label: 'Explore', icon: '🇮🇳', badge: 'Pan-India', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
    { id: 'planner', label: 'Planner', icon: '⚙️', badge: 'Smart Split', badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
    { id: 'itinerary', label: 'Itinerary', icon: '🗓️', badge: 'Day-Wise', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
    { id: 'hotels', label: `Stays (${tripData.destination.split(',')[0]})`, icon: '🏨', badge: 'Terrain AI', badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
    { id: 'vehicles', label: 'Vehicles Fleet', icon: '🚙', badge: '4x4 & Bikes', badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30' },
    { id: 'expenses', label: 'Expenses', icon: '💰', badge: 'Auto-Split', badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
    { id: 'safety', label: 'Safety & Packing', icon: '🚨', badge: 'SOS 112', badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased w-full overflow-x-hidden">
      {/* Top redBus-style Header with "My Account" Pill */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div onClick={() => setActiveTab('planner')} className="flex items-center gap-2.5 cursor-pointer">
            <img src="/logo.jpeg" alt="TripSync" className="h-8 w-8 rounded-lg object-contain" />
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">TripSync India</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border font-semibold transition-all ${
                activeTab === 'profile'
                  ? 'bg-blue-600 text-white border-blue-500 shadow'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              <User className="h-3.5 w-3.5 text-blue-400" />
              <span>{currentUser} • My Account</span>
            </button>
            <button onClick={handleLogout} className="p-2 text-slate-400 hover:text-red-400 bg-slate-800/80 rounded-xl transition">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 7 redBus-Style Category Navigation Cards */}
        <div className="w-full max-w-7xl mx-auto px-4 py-3 border-t border-slate-800/80">
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5">
            {navCards.map(card => {
              const isActive = activeTab === card.id;
              return (
                <button
                  key={card.id}
                  onClick={() => setActiveTab(card.id)}
                  className={`relative pt-4 pb-2.5 px-2 rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all ${
                    isActive
                      ? 'bg-slate-800 border-blue-500 shadow-lg shadow-blue-500/15 scale-[1.02]'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                  }`}
                >
                  <span className={`absolute -top-2 px-2 py-0.5 rounded-full text-[9px] font-extrabold border tracking-wide ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                  <span className="text-xl sm:text-2xl leading-none mt-0.5">{card.icon}</span>
                  <span className={`text-[11px] font-bold text-center leading-tight line-clamp-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {card.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-8 space-y-6">
        {/* EXPLORE TAB */}
        {activeTab === 'explore' && (
          <div className="space-y-5">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl space-y-4">
              <h1 className="text-xl font-bold text-white flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-400" /> Pan-India Destination Search
              </h1>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type any Indian place (e.g. Kedarnath, Ooty, Varanasi)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 px-4 py-2.5 rounded-xl text-xs sm:text-sm"
                />
                <button onClick={searchOnlineLocation} className="px-4 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold">
                  Search
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDestinations.map(dest => (
                <div key={dest.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
                      {dest.category}
                    </span>
                    <h3 className="text-base font-bold text-white mt-2">{dest.name}</h3>
                    <div className="text-xs text-slate-400 mt-1">Best Season: {dest.bestTime}</div>
                  </div>
                  <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">Avg / Person</div>
                      <div className="text-base font-bold text-white">₹{dest.avgBudgetPerPerson}</div>
                    </div>
                    <button onClick={() => selectDestination(dest)} className="px-3.5 py-1.5 bg-blue-600 text-white rounded-xl text-xs font-bold">
                      Plan Trip
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PLANNER TAB (redBus Stacked Route Card + Original Group Priority Voting Sliders) */}
        {activeTab === 'planner' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
              {/* Top Banner Strip */}
              <div className="bg-blue-600 px-5 py-2.5 flex items-center justify-between">
                <span className="text-xs font-extrabold text-white tracking-wide">
                  Smart Group Trip Planner • Instant Budget Sync
                </span>
                <Sparkles className="h-4 w-4 text-white" />
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                <h2 className="text-base font-bold flex items-center gap-2 text-blue-400">
                  <MapPin className="h-5 w-5" /> Trip Route Configuration
                </h2>

                {/* Stacked From / To Box with Circular Swap Button */}
                <div className="relative bg-slate-950 border border-slate-800 rounded-2xl divide-y divide-slate-800">
                  <div className="p-3.5 pr-14">
                    <label className="text-xs text-slate-400 uppercase font-bold block">FROM (STARTING CITY)</label>
                    <input
                      type="text"
                      value={tripData.origin}
                      onChange={(e) => setTripData({ ...tripData, origin: e.target.value })}
                      className="w-full mt-1 bg-transparent text-sm font-semibold text-white focus:outline-none"
                    />
                  </div>

                  {/* Circular Swap Button */}
                  <button
                    type="button"
                    onClick={swapCities}
                    title="Swap Starting City & Destination"
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-slate-800 hover:bg-blue-600 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-center shadow-lg transition z-10"
                  >
                    <ArrowUpDown className="h-4 w-4" />
                  </button>

                  <div className="p-3.5 pr-14">
                    <label className="text-xs text-slate-400 uppercase font-bold block">TO (DESTINATION SELECTED)</label>
                    <input
                      type="text"
                      value={tripData.destination}
                      onChange={(e) => setTripData({ ...tripData, destination: e.target.value })}
                      className="w-full mt-1 bg-transparent text-sm font-semibold text-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Budget, Members & Days Row */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">
                    <label className="text-[10px] text-slate-400 uppercase font-bold block">POOL BUDGET (₹)</label>
                    <input
                      type="number"
                      value={tripData.budget}
                      onChange={(e) => setTripData({ ...tripData, budget: Number(e.target.value) })}
                      className="w-full mt-1 bg-transparent text-sm font-bold text-blue-400 focus:outline-none"
                    />
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">
                    <label className="text-[10px] text-slate-400 uppercase font-bold block">MEMBERS</label>
                    <input
                      type="number"
                      value={tripData.groupSize}
                      onChange={(e) => setTripData({ ...tripData, groupSize: Number(e.target.value) })}
                      className="w-full mt-1 bg-transparent text-sm font-bold text-white focus:outline-none"
                    />
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">
                    <label className="text-[10px] text-slate-400 uppercase font-bold block">DAYS</label>
                    <input
                      type="number"
                      value={tripData.days}
                      onChange={(e) => setTripData({ ...tripData, days: Number(e.target.value) })}
                      className="w-full mt-1 bg-transparent text-sm font-bold text-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Rounded Pill CTA Button */}
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-full shadow-lg transition text-xs sm:text-sm"
                >
                  Generate Synchronized Itinerary →
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <h2 className="text-base font-bold mb-1 flex items-center gap-2 text-blue-400">
                  <Sliders className="h-5 w-5" /> Group Priority Voting Sliders
                </h2>
                <p className="text-xs text-slate-400 mb-5">Dynamically split group budget by preference weights.</p>

                <div className="space-y-4">
                  {[
                    { label: 'Sightseeing & Heritage', val: preferences.sightseeing, key: 'sightseeing' },
                    { label: 'Local Food & Dining', val: preferences.food, key: 'food' },
                    { label: 'Scenic Stay & Relax', val: preferences.relax, key: 'relax' },
                    { label: 'Shopping & Bazaars', val: preferences.street, key: 'street' }
                  ].map(s => (
                    <div key={s.key}>
                      <div className="flex justify-between text-xs mb-1 font-semibold">
                        <span>{s.label}</span>
                        <span className="text-blue-400 font-bold">{s.val}%</span>
                      </div>
                      <input
                        type="range" min="0" max="100" value={s.val}
                        onChange={(e) => setPreferences({ ...preferences, [s.key]: Number(e.target.value) })}
                        className="w-full bg-slate-800 h-2 rounded-lg cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => saveCurrentTripToProfile('Planned')}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-3.5 rounded-xl border border-slate-700 transition text-xs"
                >
                  Save to Profile
                </button>
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className="flex-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl shadow transition text-xs px-5"
                >
                  Generate Synchronized Itinerary →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ITINERARY TAB */}
        {activeTab === 'itinerary' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex justify-between items-center shadow-xl">
              <div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
                  Itinerary Dossier
                </span>
                <h1 className="text-xl font-bold text-white mt-1">{tripData.destination}</h1>
                <p className="text-xs text-slate-400 mt-0.5">Starting City: {tripData.origin} • {tripData.days} Days • ₹{tripData.budget} Budget Pool</p>
              </div>
              <button onClick={() => window.print()} className="px-3.5 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl shadow flex items-center gap-1.5">
                <FileDown className="h-4 w-4" /> Save PDF
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {itineraryDays.map(d => (
                <div key={d.day} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow">
                  <div className="text-sm font-bold text-blue-400 flex justify-between border-b border-slate-800 pb-2">
                    <span>{d.title}</span>
                    <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-300">Day {d.day}</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div><strong>Morning:</strong> {d.morning}</div>
                    <div><strong>Afternoon:</strong> {d.afternoon}</div>
                    <div><strong>Evening:</strong> {d.evening}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-bold uppercase">Sightseeing</div>
                <div className="text-xl font-bold text-white mt-1">₹{sightseeingBudget}</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-bold uppercase">Food</div>
                <div className="text-xl font-bold text-white mt-1">₹{foodBudget}</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-bold uppercase">Stay & Leisure</div>
                <div className="text-xl font-bold text-white mt-1">₹{leisureBudget}</div>
              </div>
            </div>
          </div>
        )}

        {/* HOTELS & STAYS TAB */}
        {activeTab === 'hotels' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentIntelligence.stays.map(item => (
              <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">{item.type}</span>
                    <span className="text-xs text-amber-400 font-bold">⭐ {item.rating}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-1">{item.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">{item.vibe}</p>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                  <div className="text-xs font-bold text-white">{item.price}</div>
                  <button onClick={() => alert(`Booked ${item.name}`)} className="px-3 py-1.5 bg-blue-600 text-white rounded-xl text-xs font-bold">Book</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VEHICLES TAB */}
        {activeTab === 'vehicles' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {currentIntelligence.vehicles.map(v => (
              <div key={v.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-3xl mb-1">{v.icon}</div>
                  <h3 className="text-base font-bold text-white">{v.name}</h3>
                  <div className="text-xs text-blue-400">{v.type} • {v.capacity}</div>
                  <p className="text-xs text-slate-400 mt-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">Best for: {v.bestFor}</p>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                  <div className="text-sm font-bold text-white">₹{v.price}/day</div>
                  <button onClick={() => alert(`Rented ${v.name}`)} className="px-3 py-1.5 bg-blue-600 text-white rounded-xl text-xs font-bold">Rent</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SAFETY TAB */}
        {activeTab === 'safety' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-rose-950/20 border border-rose-900/50 p-5 rounded-2xl space-y-3">
              <h2 className="text-base font-bold text-rose-400 flex items-center gap-2">
                <ShieldAlert className="h-5 w-5" /> Emergency SOS Advisory
              </h2>
              <div className="bg-slate-950 p-3 rounded-xl border border-rose-900/40 text-xs space-y-2">
                <div><strong>Helpline:</strong> {currentIntelligence.safetyInfo.helpline}</div>
                <div><strong>Warning:</strong> {currentIntelligence.safetyInfo.primaryWarning}</div>
              </div>
              <button onClick={() => alert('SOS Triggered!')} className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-2.5 rounded-xl text-xs">
                Emergency SOS Broadcast
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
              <h2 className="text-base font-bold text-blue-400 flex items-center gap-2">
                <CheckSquare className="h-5 w-5" /> Packing Checklist
              </h2>
              <div className="space-y-2">
                {packingList.map(item => (
                  <label key={item.id} className="flex items-center gap-3 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs cursor-pointer">
                    <input type="checkbox" checked={item.checked} onChange={() => togglePackingItem(item.id)} className="h-4 w-4" />
                    <span className={item.checked ? 'line-through text-slate-500' : 'text-slate-200'}>{item.text}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EXPENSES TAB */}
        {activeTab === 'expenses' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
              <h2 className="text-base font-bold text-blue-400 flex items-center gap-2">
                <PlusCircle className="h-5 w-5" /> Log Group Expense
              </h2>
              <form onSubmit={addExpense} className="space-y-3">
                <input
                  type="text" required placeholder="Title"
                  value={newExpense.title} onChange={(e) => setNewExpense({ ...newExpense, title: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs"
                />
                <input
                  type="number" required placeholder="Amount (₹)"
                  value={newExpense.amount} onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs"
                />
                <input
                  type="text" placeholder="Paid by"
                  value={newExpense.paid_by} onChange={(e) => setNewExpense({ ...newExpense, paid_by: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs"
                />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-xs">
                  Save Expense
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                  <div className="text-xs text-slate-400 uppercase font-bold">Total Spent</div>
                  <div className="text-2xl font-bold text-white mt-1">₹{totalSpent}</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                  <div className="text-xs text-slate-400 uppercase font-bold">Per Person</div>
                  <div className="text-2xl font-bold text-blue-400 mt-1">₹{perPersonExpense}</div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
                {expenses.map(item => (
                  <div key={item.id} className="flex justify-between items-center p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs">
                    <div>
                      <div className="font-bold text-white">{item.title}</div>
                      <div className="text-slate-400">Paid by: {item.paid_by || 'Anonymous'}</div>
                    </div>
                    <div className="text-sm font-bold text-blue-400">₹{item.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PROFILE TAB */}
        {activeTab === 'profile' && (
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center text-xl font-bold text-white">
                  {currentUser.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">{currentUser}</h2>
                  <p className="text-xs text-blue-400">TripSync Explorer</p>
                </div>
              </div>
              <div className="text-xs bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                Total Trips: <strong className="text-blue-400">{userTrips.length}</strong>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-bold text-white">Saved Trips</h3>
              <div className="space-y-2">
                {userTrips.length === 0 ? (
                  <p className="text-xs text-slate-400">No saved trips yet.</p>
                ) : (
                  userTrips.map(t => (
                    <div key={t.id} className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center text-xs">
                      <div>
                        <div className="font-semibold text-white">{t.title}</div>
                        <div className="text-slate-400">{t.location} • {t.cost}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => markTripDone(t.id)} className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-blue-400">
                          {t.status}
                        </button>
                        <button onClick={() => deleteTrip(t.id)} className="text-slate-500 hover:text-red-400">✕</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}