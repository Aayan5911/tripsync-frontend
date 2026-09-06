import React, { useState, useEffect } from 'react';
import { 
  Eye, EyeOff, MapPin, Sliders, CheckCircle, 
  ShieldAlert, LogOut, CheckSquare, PlusCircle, Globe, Search, Sparkles, Utensils, 
  ShieldCheck, Car, Star, Lock, UserCheck, Hotel, Coffee, FileDown, Loader2, Footprints, Camera, BookmarkPlus, Calendar, Clock, Sun, Sunset, Moon, IndianRupee, Mail, ArrowLeft, KeyRound
} from 'lucide-react';

// 🌍 Complete Dynamic Intelligence Engine
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
  const [token, setToken] = useState(localStorage.getItem('access_token') || null);
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('current_username') || 'Aayan');
  const [authMode, setAuthMode] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [authData, setAuthData] = useState({ username: '', password: '', email: '' });
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('planner');

  // 🚀 Pure Email OTP States
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpStep, setOtpStep] = useState(1);
  const [otpEmail, setOtpEmail] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);

  // 🔑 Forgot Password States (Username or Email)
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
      ? 'https://web-production-79148.up.railway.app/api/auth/register/' 
      : 'https://web-production-79148.up.railway.app/api/auth/login/';

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
          alert(`Account created successfully for ${uname}! Details saved in database.`);
        }
      } else {
        alert(data.error || data.detail || 'Authentication error. Please verify your credentials.');
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
      const res = await fetch('https://web-production-79148.up.railway.app/api/auth/send-email-otp/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        alert(data.message || `Verification code sent to ${email}. Check your inbox!`);
        setEnteredOtp('');
        setOtpStep(2);
      } else {
        alert(data.error || data.detail || 'Failed to send OTP. Please verify email.');
      }
    } catch (err) {
      alert('Connection error: ' + (err.message || 'Failed to connect to server'));
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyEmailOtp = async () => {
    const code = enteredOtp.trim();
    if (!code) {
      alert('Please enter the 6-digit code received in your email.');
      return;
    }
    setOtpLoading(true);
    try {
      const res = await fetch('https://web-production-79148.up.railway.app/api/auth/verify-email-otp/', {
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
        alert(`Welcome, ${data.username || 'User'}! Successfully verified.`);
      } else {
        alert(data.error || data.detail || 'Invalid or expired code.');
      }
    } catch (err) {
      alert('Verification error: ' + (err.message || 'Could not verify code'));
    } finally {
      setOtpLoading(false);
    }
  };

  // 🔑 Forgot Password Handlers (Accepts Username or Email)
  const handleForgotRequest = async () => {
    const identifier = forgotIdentifier.trim();
    if (!identifier) {
      alert('Please enter your registered Username or Email address.');
      return;
    }
    setForgotLoading(true);
    try {
      const res = await fetch('https://web-production-79148.up.railway.app/api/auth/forgot-password-request/', {
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
        alert(data.error || 'Account not found with this username or email.');
      }
    } catch (err) {
      alert('Connection error: ' + err.message);
    } finally {
      setForgotLoading(false);
    }
  };

  const handleForgotConfirm = async () => {
    if (!forgotOtp.trim() || !newPassword.trim()) {
      alert('Please enter the 6-digit code and your new password.');
      return;
    }
    setForgotLoading(true);
    try {
      const res = await fetch('https://web-production-79148.up.railway.app/api/auth/reset-password-confirm/', {
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
        alert(data.message || 'Password changed successfully! You can now log in.');
        setShowForgotModal(false);
        setForgotStep(1);
        setForgotIdentifier('');
        setForgotOtp('');
        setNewPassword('');
      } else {
        alert(data.error || 'Invalid or expired OTP code.');
      }
    } catch (err) {
      alert('Connection error: ' + err.message);
    } finally {
      setForgotLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('current_username');
    setToken(null);
  };

  const selectDestination = (dest) => {
    setTripData({
      ...tripData,
      destination: dest.name,
      budget: (dest.avgBudgetPerPerson || 14000) * (tripData.groupSize || 2),
      famousPlaces: dest.famousPlaces || [`${dest.name.split(',')[0]} Main Sight`, 'Historic Center', 'Scenic Viewpoint', 'Main Bazaar'],
      treks: dest.treks || [`${dest.name.split(',')[0]} Nature Trek`, 'Sunset Hill View Trail', 'Historic Old Town Walk'],
      famousFood: dest.famousFood || ['Signature Regional Thali', 'Authentic Local Street Delicacies', 'Famous Traditional Sweets']
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
    alert(`Trip to "${tripData.destination}" saved to Profile as ${statusType}! 🚀`);
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
          famousPlaces: [`${searchQuery} Iconic Sights`, 'Ancient Heritage Corridor', 'Panoramic Sunset Viewpoint', 'Central Town Bazaar'],
          treks: [`${searchQuery} Hill Ridge Trek`, 'Historic Heritage Walk', 'Lakeside / Nature Trail'],
          famousFood: [`${searchQuery} Special Regional Thali`, 'Authentic Street Food Flavors', 'Traditional Local Sweets']
        });
      } else {
        setOnlineResult({
          id: Date.now(),
          name: searchQuery.trim(),
          region: 'India',
          category: 'Custom Location',
          avgBudgetPerPerson: 13000,
          idealDays: '3-4 Days',
          bestTime: 'Oct - Mar',
          famousPlaces: [`${searchQuery} Historic Spots`, 'Famous Temples / Viewpoints', 'Bustling Local Markets'],
          treks: [`${searchQuery} Nature Trail`, 'Sunset Peak Trail'],
          famousFood: ['Authentic Regional Delicacies', 'Famous Street Snacks']
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
    { id: 4, name: 'Goa (North & South)', region: 'West', category: 'Beaches & Heritage', avgBudgetPerPerson: 15000, idealDays: '4-5 Days', bestTime: 'Nov - Feb', famousPlaces: ['Baga Beach', 'Dudhsagar Falls', 'Palolem'], treks: ['Dudhsagar Railway Trek'], famousFood: ['Goan Fish Curry', 'Bebinca'] },
    { id: 5, name: 'Munnar & Alleppey, Kerala', region: 'South', category: 'Backwaters & Tea Hills', avgBudgetPerPerson: 18000, idealDays: '5-6 Days', bestTime: 'Sep - Mar', famousPlaces: ['Tea Gardens', 'Alleppey Houseboat'], treks: ['Anamudi Peak Trek'], famousFood: ['Kerala Sadhya', 'Appam'] },
    { id: 6, name: 'Srinagar & Gulmarg, Kashmir', region: 'North', category: 'Snow Valleys', avgBudgetPerPerson: 22000, idealDays: '5-6 Days', bestTime: 'All Year', famousPlaces: ['Dal Lake Shikara', 'Gulmarg Gondola'], treks: ['Great Lakes Trek'], famousFood: ['Kashmiri Wazwan', 'Kahwa'] }
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
    morning: `Morning ${i === 0 ? `arrival at ${tripData.destination.split(',')[0]}, check-in & breakfast` : `visit to ${tripData.famousPlaces[i % tripData.famousPlaces.length]}`}`,
    afternoon: `Afternoon ${i % 2 === 0 ? `trail walk on ${tripData.treks[i % tripData.treks.length]}` : `sightseeing around local heritage points`}`,
    evening: `Evening cafe hopping and dinner tasting ${tripData.famousFood[i % tripData.famousFood.length]} at famous spots`
  }));

  if (!token) {
    return (
      <div className="min-h-screen bg-[#070B14] flex items-center justify-center p-4 text-slate-100 font-sans relative">
        <div className="w-full max-w-md bg-[#0F172A] border border-slate-700/80 p-6 sm:p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col items-center justify-center mb-6">
            <img 
              src="/logo.jpeg" 
              alt="TripSync" 
              className="w-28 h-28 rounded-2xl object-contain shadow-lg shadow-cyan-500/20"
            />
          </div>

          <h2 className="text-xl font-bold text-center mb-6 text-slate-100">
            {authMode === 'login' ? 'Sign In to Your Account' : 'Create an Account'}
          </h2>

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="text-xs text-slate-300 font-bold uppercase">Username *</label>
              <input
                type="text" required placeholder="Enter username"
                value={authData.username}
                onChange={(e) => setAuthData({ ...authData, username: e.target.value })}
                className="w-full mt-1.5 bg-[#070B14] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            {authMode === 'register' && (
              <div>
                <label className="text-xs text-slate-300 font-bold uppercase">Email Address *</label>
                <input
                  type="email" required placeholder="name@example.com"
                  value={authData.email}
                  onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
                  className="w-full mt-1.5 bg-[#070B14] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            )}

            <div>
              <div className="flex justify-between items-center">
                <label className="text-xs text-slate-300 font-bold uppercase">Password *</label>
                {authMode === 'login' && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgotModal(true);
                      setForgotStep(1);
                      setForgotIdentifier(authData.username || '');
                      setForgotOtp('');
                      setNewPassword('');
                    }}
                    className="text-[11px] text-cyan-400 hover:underline font-semibold"
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
                  className="w-full bg-[#070B14] border border-slate-700 rounded-xl px-4 py-3 pr-11 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isAuthLoading}
              className="w-full mt-4 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isAuthLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              {authMode === 'login' ? 'Sign In to TripSync' : 'Complete Registration'}
            </button>
          </form>

          {authMode === 'login' && (
            <div className="mt-5">
              <div className="flex items-center my-3.5">
                <div className="flex-1 border-t border-slate-700/80"></div>
                <span className="px-3 text-[11px] text-slate-400 font-bold tracking-wider uppercase">Or sign in with</span>
                <div className="flex-1 border-t border-slate-700/80"></div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowOtpModal(true);
                  setOtpStep(1);
                  setOtpEmail('');
                  setEnteredOtp('');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-200 transition font-bold"
              >
                <Mail className="h-4 w-4 text-cyan-400" /> Sign In via Email
              </button>
            </div>
          )}

          <div className="text-center mt-5">
            <button
              onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
              className="text-xs font-semibold text-cyan-400 hover:underline"
            >
              {authMode === 'login' ? "Don't have an account? Register here" : 'Already registered? Log in'}
            </button>
          </div>
        </div>

        {/* 🚀 Email OTP Sign-In Modal */}
        {showOtpModal && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-[#0F172A] border border-slate-700 rounded-3xl p-6 sm:p-7 w-full max-w-sm shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Mail className="h-4 w-4" />
                  <span>Email Sign-In</span>
                </div>
                <button 
                  onClick={() => setShowOtpModal(false)} 
                  className="text-slate-400 hover:text-white text-xs font-bold px-2 py-1 bg-slate-800 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-400">
                {otpStep === 1 
                  ? "Enter your registered email address. We'll send a 6-digit verification code." 
                  : `Enter the 6-digit verification code sent to ${otpEmail}.`}
              </p>

              {otpStep === 1 ? (
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] text-slate-300 font-bold uppercase">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={otpEmail}
                      onChange={(e) => setOtpEmail(e.target.value)}
                      className="w-full mt-1 bg-[#070B14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <button
                    onClick={handleSendEmailOtp}
                    disabled={otpLoading}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-60"
                  >
                    {otpLoading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                    Send Verification Code
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] text-slate-300 font-bold uppercase">Enter 6-Digit Code</label>
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="• • • • • •"
                      value={enteredOtp}
                      onChange={(e) => setEnteredOtp(e.target.value)}
                      className="w-full mt-1 text-center tracking-[0.4em] font-mono text-lg bg-[#070B14] border border-cyan-500/60 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <button
                    onClick={handleVerifyEmailOtp}
                    disabled={otpLoading}
                    className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-60"
                  >
                    {otpLoading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                    Verify & Sign In →
                  </button>
                  <button
                    type="button"
                    onClick={() => setOtpStep(1)}
                    className="w-full text-center text-xs text-slate-400 hover:text-cyan-400 font-medium py-1"
                  >
                    ← Change Email Address
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 🔑 Forgot Password Modal (Username or Email Address) */}
        {showForgotModal && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-[#0F172A] border border-slate-700 rounded-3xl p-6 sm:p-7 w-full max-w-sm shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <KeyRound className="h-4 w-4" />
                  <span>Reset Password</span>
                </div>
                <button 
                  onClick={() => setShowForgotModal(false)} 
                  className="text-slate-400 hover:text-white text-xs font-bold px-2 py-1 bg-slate-800 rounded-lg"
                >
                  ✕
                </button>
              </div>

              {forgotStep === 1 ? (
                <div className="space-y-3">
                  <p className="text-xs text-slate-400">
                    Enter your registered <strong>Username</strong> or <strong>Email address</strong>. We'll send a 6-digit reset code.
                  </p>
                  <div>
                    <label className="text-[11px] text-slate-300 font-bold uppercase tracking-wider">Username or Email Address</label>
                    <input
                      type="text"
                      placeholder="e.g. Aayan or name@example.com"
                      value={forgotIdentifier}
                      onChange={(e) => setForgotIdentifier(e.target.value)}
                      className="w-full mt-1 bg-[#070B14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <button
                    onClick={handleForgotRequest}
                    disabled={forgotLoading}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-60"
                  >
                    {forgotLoading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                    Send Reset Code
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-slate-400">
                    Code sent to <strong className="text-cyan-400">{forgotMaskedEmail}</strong>. Enter code & your new password:
                  </p>
                  <div>
                    <label className="text-[11px] text-slate-300 font-bold uppercase">6-Digit Code</label>
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="• • • • • •"
                      value={forgotOtp}
                      onChange={(e) => setForgotOtp(e.target.value)}
                      className="w-full mt-1 text-center tracking-[0.4em] font-mono text-lg bg-[#070B14] border border-cyan-500/60 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-300 font-bold uppercase">New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full mt-1 bg-[#070B14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <button
                    onClick={handleForgotConfirm}
                    disabled={forgotLoading}
                    className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-60"
                  >
                    {forgotLoading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                    Update Password & Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setForgotStep(1)}
                    className="w-full text-center text-xs text-slate-400 hover:text-cyan-400 font-medium py-1"
                  >
                    ← Change Username / Email
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 font-sans antialiased w-full overflow-x-hidden">
      <header className="border-b border-slate-800/80 bg-[#0E1526]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img 
              src="/logo.jpeg" 
              alt="TripSync" 
              className="h-9 w-9 rounded-lg object-contain border border-cyan-500/40 shadow-sm"
            />
            <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent">
              TripSync India
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs bg-slate-800/80 border border-slate-700/60 px-2.5 py-1 rounded-lg text-slate-300 font-semibold">
              👤 {currentUser}
            </span>
            <button onClick={handleLogout} className="p-2 text-slate-400 hover:text-red-400 bg-slate-800/50 rounded-xl transition" title="Logout">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-auto scrollbar-none px-4 py-2 border-t border-slate-800/50 flex items-center gap-2">
          {[
            { id: 'explore', label: 'Explore 🇮🇳' },
            { id: 'planner', label: 'Planner ⚙️' },
            { id: 'itinerary', label: 'Itinerary 🗓️' },
            { id: 'hotels', label: `Stays & Cafes (${tripData.destination.split(',')[0]})` },
            { id: 'vehicles', label: 'Vehicles Fleet 🚙' },
            { id: 'expenses', label: 'Expenses 💰' },
            { id: 'safety', label: 'Safety & Packing 🚨' },
            { id: 'profile', label: 'Profile 👤' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-8 space-y-6">
        {activeTab === 'explore' && (
          <div className="space-y-5">
            <div className="bg-[#0F172A] border border-slate-700/60 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl space-y-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" /> Pan-India Destination Search
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Type <strong>ANY Indian place</strong> to instantly customize hotels, restaurants, vehicles & safety advisory!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 flex gap-2">
                  <div className="relative flex-1">
                    <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Type ANY Indian place (e.g. Kedarnath, Ooty, Ayodhya, Pondicherry)..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setOnlineResult(null);
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && searchOnlineLocation()}
                      className="w-full bg-[#070B14] border border-slate-700/80 pl-9 pr-4 py-2.5 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <button
                    onClick={searchOnlineLocation}
                    disabled={isSearchingOnline || !searchQuery.trim()}
                    className="px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 transition disabled:opacity-50"
                  >
                    {isSearchingOnline ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                    Search
                  </button>
                </div>
              </div>
            </div>

            {onlineResult && (
              <div className="bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-purple-950/40 border border-cyan-400/50 p-6 rounded-3xl shadow-2xl space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40">
                      ⚡ Live Detected Destination
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-white mt-2">{onlineResult.name}</h2>
                  </div>
                  <button
                    onClick={() => selectDestination(onlineResult)}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-1"
                  >
                    <Sparkles className="h-3.5 w-3.5" /> Plan Now →
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredDestinations.map(dest => (
                <div key={dest.id} className="bg-[#0F172A] border border-slate-800 hover:border-cyan-500/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl space-y-4 transition hover:-translate-y-1">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">
                        {dest.category}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">🗓️ {dest.idealDays}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mt-1">{dest.name}</h3>
                    <div className="text-xs text-emerald-400 font-medium mt-1">Best Season: {dest.bestTime}</div>

                    <div className="mt-4 space-y-3">
                      <div>
                        <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5 mb-1.5">
                          <MapPin className="h-3.5 w-3.5 text-cyan-400" /> Sights:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {dest.famousPlaces.map((place, idx) => (
                            <span key={idx} className="text-[11px] bg-[#070B14] border border-slate-800 px-2 py-0.5 rounded-md text-slate-300">
                              {place}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Avg / Person</div>
                      <div className="text-base sm:text-lg font-black text-white">₹{dest.avgBudgetPerPerson}</div>
                    </div>
                    <button
                      onClick={() => selectDestination(dest)}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow"
                    >
                      <Sparkles className="h-3.5 w-3.5" /> Plan Trip
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'planner' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
            <div className="bg-[#0F172A] border border-slate-700/60 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl space-y-4">
              <h2 className="text-base sm:text-lg font-bold flex items-center gap-2 text-cyan-400">
                <MapPin className="h-5 w-5" /> Trip Route Configuration
              </h2>
              <div className="space-y-3.5">
                <div>
                  <label className="text-xs text-slate-400 uppercase font-bold">Starting City</label>
                  <input
                    type="text" 
                    value={tripData.origin}
                    onChange={(e) => setTripData({ ...tripData, origin: e.target.value })}
                    onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                    className="w-full mt-1.5 bg-[#070B14] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 uppercase font-bold">Destination Selected</label>
                  <input
                    type="text" 
                    value={tripData.destination}
                    onChange={(e) => setTripData({ ...tripData, destination: e.target.value })}
                    onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                    className="w-full mt-1.5 bg-[#070B14] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 uppercase font-bold">Total Pool Budget (₹)</label>
                  <input
                    type="number" 
                    inputMode="numeric"
                    value={tripData.budget || ''}
                    onChange={(e) => setTripData({ ...tripData, budget: Number(e.target.value) })}
                    onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                    className="w-full mt-1.5 bg-[#070B14] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400 uppercase font-bold">Members</label>
                    <input
                      type="number" 
                      inputMode="numeric"
                      value={tripData.groupSize || ''}
                      onChange={(e) => setTripData({ ...tripData, groupSize: Number(e.target.value) })}
                      onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                      className="w-full mt-1.5 bg-[#070B14] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 uppercase font-bold">Days</label>
                    <input
                      type="number" 
                      inputMode="numeric"
                      value={tripData.days || ''}
                      onChange={(e) => setTripData({ ...tripData, days: Number(e.target.value) })}
                      onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                      className="w-full mt-1.5 bg-[#070B14] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="lg:col-span-2 bg-[#0F172A] border border-slate-700/60 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-between space-y-6"
              onTouchStart={() => document.activeElement && document.activeElement.blur()}
            >
              <div>
                <h2 className="text-base sm:text-lg font-bold mb-1 flex items-center gap-2 text-cyan-400">
                  <Sliders className="h-5 w-5" /> Group Priority Voting Sliders
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mb-5">Dynamically split group budget by preference weights.</p>

                <div className="space-y-4">
                  {[
                    { label: '🏛️ Sightseeing & Heritage', val: preferences.sightseeing, key: 'sightseeing', color: 'text-cyan-400', accent: 'accent-cyan-400' },
                    { label: '🍲 Local Food & Dining', val: preferences.food, key: 'food', color: 'text-amber-400', accent: 'accent-amber-400' },
                    { label: '🛋️ Scenic Stay & Relax', val: preferences.relax, key: 'relax', color: 'text-emerald-400', accent: 'accent-emerald-400' },
                    { label: '🛍️ Shopping & Night Bazaars', val: preferences.street, key: 'street', color: 'text-purple-400', accent: 'accent-purple-400' }
                  ].map(s => (
                    <div key={s.key} className="touch-pan-y">
                      <div className="flex justify-between text-xs sm:text-sm mb-1.5 font-semibold">
                        <span>{s.label}</span>
                        <span className={`${s.color} font-black`}>{s.val}%</span>
                      </div>
                      <input
                        type="range" 
                        min="0" 
                        max="100" 
                        value={s.val}
                        onTouchStart={() => document.activeElement && document.activeElement.blur()}
                        onMouseDown={() => document.activeElement && document.activeElement.blur()}
                        onChange={(e) => setPreferences({ ...preferences, [s.key]: Number(e.target.value) })}
                        className={`w-full ${s.accent} bg-slate-800 h-3 rounded-lg cursor-pointer`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => saveCurrentTripToProfile('Planned')}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold py-3.5 rounded-xl border border-cyan-500/30 transition flex items-center justify-center gap-1.5 text-xs sm:text-sm"
                >
                  <BookmarkPlus className="h-4 w-4" /> Save to Profile
                </button>
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className="flex-2 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold py-3.5 rounded-xl sm:rounded-2xl shadow-lg transition active:scale-[0.98] text-xs sm:text-sm"
                >
                  Generate Synchronized Itinerary →
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'itinerary' && (
          <div className="space-y-6">
            <div className="bg-[#0F172A] border border-slate-700/60 p-5 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">
                  🗺️ Synchronized Trip Dossier
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-white mt-1.5">{tripData.destination}</h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Route: <strong>{tripData.origin}</strong> ➔ <strong>{tripData.destination}</strong> • {tripData.days} Days • {tripData.groupSize} Members • ₹{tripData.budget} Total Pool
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => saveCurrentTripToProfile('Planned')}
                  className="px-3.5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow flex items-center gap-1.5"
                >
                  <BookmarkPlus className="h-4 w-4" /> Save Trip
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold rounded-xl shadow flex items-center gap-1.5"
                >
                  <FileDown className="h-4 w-4" /> Save PDF
                </button>
                <button
                  onClick={() => setActiveTab('planner')}
                  className="px-3.5 py-2.5 bg-slate-800 border border-slate-700 text-xs font-semibold rounded-xl text-slate-200"
                >
                  ← Edit Inputs
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-[#0F172A] border border-cyan-500/40 p-5 rounded-3xl shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Camera className="h-4 w-4" /> Famous Attractions & Spots
                </div>
                <div className="space-y-2">
                  {tripData.famousPlaces?.map((place, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-[#070B14] p-2.5 rounded-xl border border-slate-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                      <span>{place}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0F172A] border border-emerald-500/40 p-5 rounded-3xl shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Footprints className="h-4 w-4" /> Famous Treks & Trails
                </div>
                <div className="space-y-2">
                  {tripData.treks?.map((trek, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-[#070B14] p-2.5 rounded-xl border border-slate-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span>{trek}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0F172A] border border-amber-500/40 p-5 rounded-3xl shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Utensils className="h-4 w-4" /> Must-Try Signature Food
                </div>
                <div className="space-y-2">
                  {tripData.famousFood?.map((food, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-[#070B14] p-2.5 rounded-xl border border-slate-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0"></span>
                      <span>{food}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Calendar className="h-5 w-5 text-cyan-400" /> Day-by-Day Detailed Schedule
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {itineraryDays.map((d) => (
                  <div key={d.day} className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 space-y-3 shadow-lg">
                    <div className="text-sm font-bold text-cyan-400 flex items-center justify-between border-b border-slate-800 pb-2">
                      <span>{d.title}</span>
                      <span className="text-xs bg-cyan-950/60 border border-cyan-500/40 px-2 py-0.5 rounded-md">Day {d.day}</span>
                    </div>
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex items-start gap-2">
                        <Sun className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-200">Morning:</strong> {d.morning}</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Sunset className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-200">Afternoon:</strong> {d.afternoon}</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Moon className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-200">Evening:</strong> {d.evening}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
              <div className="bg-cyan-950/30 border border-cyan-500/30 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow">
                <div className="text-cyan-400 font-bold text-xs uppercase">Sightseeing Budget</div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">₹{sightseeingBudget}</div>
              </div>
              <div className="bg-amber-950/30 border border-amber-500/30 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow">
                <div className="text-amber-400 font-bold text-xs uppercase">Food & Dining Budget</div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">₹{foodBudget}</div>
              </div>
              <div className="bg-emerald-950/30 border border-emerald-500/30 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow">
                <div className="text-emerald-400 font-bold text-xs uppercase">Stay & Leisure</div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">₹{leisureBudget}</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'hotels' && (
          <div className="space-y-5">
            <div className="bg-[#0F172A] border border-slate-700/60 p-5 rounded-2xl shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <span className="text-[10px] uppercase font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/30">
                  Customized for {tripData.destination.split(',')[0]}
                </span>
                <h1 className="text-lg sm:text-xl font-bold text-white mt-1">Recommended Hotels, Resorts & Cafes</h1>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {currentIntelligence.stays.map(item => (
                <div key={item.id} className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-xl space-y-3">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-400/30">
                        {item.type}
                      </span>
                      <span className="text-xs font-bold text-amber-400">⭐ {item.rating}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mt-1">{item.name}</h3>
                    
                    <div className="text-xs text-slate-300 bg-[#070B14] p-3 rounded-xl border border-slate-800 space-y-2 mt-2">
                      <div><strong className="text-slate-400">Atmosphere & Vibe:</strong> <span className="text-slate-200">{item.vibe}</span></div>
                      <div>
                        <strong className="text-slate-400 block mb-1 flex items-center gap-1"><Coffee className="h-3 w-3 text-amber-400" /> Famous Top Cafes:</strong>
                        <div className="flex flex-wrap gap-1">
                          {item.cafes.map((c, i) => <span key={i} className="text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-slate-300">{c}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">Tariff</div>
                      <div className="text-xs sm:text-sm font-bold text-white">{item.price}</div>
                    </div>
                    <button onClick={() => alert(`Booking confirmed for ${item.name}!`)} className="px-3.5 py-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-xl text-xs font-bold shadow">
                      Book Stay
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'vehicles' && (
          <div className="space-y-5">
            <div className="bg-[#0F172A] border border-slate-700/60 p-5 rounded-2xl shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <span className="text-[10px] uppercase font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/30">
                  Optimized Fleet for {tripData.destination.split(',')[0]}
                </span>
                <h1 className="text-lg sm:text-xl font-bold text-white mt-1">Recommended Vehicle Rentals</h1>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentIntelligence.vehicles.map(v => (
                <div key={v.id} className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-xl space-y-3">
                  <div>
                    <div className="text-3xl mb-2">{v.icon}</div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm sm:text-base font-bold text-white">{v.name}</h3>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">{v.capacity}</span>
                    </div>
                    <div className="text-xs text-cyan-400 mt-0.5">{v.type}</div>
                    <div className="mt-2 text-xs text-slate-300 bg-[#070B14] p-2.5 rounded-xl border border-slate-800 space-y-1">
                      <div><strong className="text-slate-400">Best For:</strong> {v.bestFor}</div>
                      <div><strong className="text-slate-400">Avg Mileage:</strong> {v.mileage}</div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <div className="text-sm font-bold text-white">₹{v.price}<span className="text-[10px] text-slate-400 font-normal">/day</span></div>
                    <button onClick={() => alert(`Vehicle booked: ${v.name}`)} className="px-3.5 py-1.5 bg-cyan-500 text-slate-950 font-bold rounded-xl text-xs">
                      Rent Vehicle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'safety' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-rose-950/20 border border-rose-900/50 p-5 sm:p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-rose-400 px-2 py-0.5 rounded bg-rose-500/10 border border-rose-400/30">
                  Regional Advisory: {tripData.destination.split(',')[0]}
                </span>
                <h2 className="text-base sm:text-lg font-black text-rose-400 flex items-center gap-2 mt-1 mb-2">
                  <ShieldAlert className="h-5 w-5 text-rose-500" /> Emergency SOS & Area Advisory
                </h2>
                <div className="p-3.5 bg-[#070B14] border border-rose-900/40 rounded-xl space-y-2 text-xs">
                  <div><strong className="text-rose-400">Active Destination:</strong> {tripData.destination}</div>
                  <div><strong className="text-rose-400">Emergency Helpline:</strong> {currentIntelligence.safetyInfo.helpline}</div>
                  <div className="text-slate-300 pt-1 border-t border-slate-800">
                    <strong className="text-amber-400 block mb-1">⚠️ Safety Warning:</strong>
                    {currentIntelligence.safetyInfo.primaryWarning}
                  </div>
                  <div className="pt-1">
                    <strong className="text-slate-400 block mb-1">Key Precautions:</strong>
                    <ul className="list-disc pl-4 text-slate-300 space-y-0.5">
                      {currentIntelligence.safetyInfo.points.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              <button onClick={() => alert(`🚨 Emergency SOS Broadcast sent to Local Helpline: ${currentIntelligence.safetyInfo.helpline}!`)} className="w-full bg-gradient-to-r from-rose-600 to-red-600 text-white font-extrabold py-3 rounded-xl shadow-lg">
                Trigger Emergency SOS
              </button>
            </div>

            <div className="bg-[#0F172A] border border-slate-700/60 p-5 rounded-2xl shadow-xl space-y-3">
              <h2 className="text-base font-bold text-cyan-400 flex items-center gap-2">
                <CheckSquare className="h-5 w-5" /> Smart Packing Checklist
              </h2>
              <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                {packingList.map((item) => (
                  <label key={item.id} className="flex items-center gap-3 p-3 bg-[#070B14] border border-slate-800 rounded-xl cursor-pointer text-xs">
                    <input type="checkbox" checked={item.checked} onChange={() => togglePackingItem(item.id)} className="h-4 w-4 rounded accent-cyan-400" />
                    <span className={item.checked ? 'line-through text-slate-500' : 'text-slate-200'}>{item.text}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'expenses' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
            <div className="bg-[#0F172A] border border-slate-700/60 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl">
              <h2 className="text-base sm:text-lg font-bold mb-4 flex items-center gap-2 text-cyan-400">
                <PlusCircle className="h-5 w-5" /> Log Group Expense
              </h2>
              <form onSubmit={addExpense} className="space-y-3.5">
                <div>
                  <label className="text-xs text-slate-400 uppercase font-bold">Expense Title</label>
                  <input
                    type="text" required placeholder="e.g., Fuel / Hotel / Dinner"
                    value={newExpense.title}
                    onChange={(e) => setNewExpense({ ...newExpense, title: e.target.value })}
                    className="w-full mt-1 bg-[#070B14] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 uppercase font-bold">Amount (₹)</label>
                  <input
                    type="number" required placeholder="0.00"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                    className="w-full mt-1 bg-[#070B14] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 uppercase font-bold">Paid By</label>
                  <input
                    type="text" placeholder="Member name"
                    value={newExpense.paid_by}
                    onChange={(e) => setNewExpense({ ...newExpense, paid_by: e.target.value })}
                    className="w-full mt-1 bg-[#070B14] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold py-3 rounded-xl shadow transition">
                  Save to Pool
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#0F172A] border border-slate-700/60 p-4 sm:p-6 rounded-2xl shadow">
                  <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">Total Pool Spent</div>
                  <div className="text-xl sm:text-3xl font-black text-white mt-1">₹{totalSpent}</div>
                </div>
                <div className="bg-[#0F172A] border border-slate-700/60 p-4 sm:p-6 rounded-2xl shadow">
                  <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">Per Person Share</div>
                  <div className="text-xl sm:text-3xl font-black text-cyan-400 mt-1">₹{perPersonExpense}</div>
                </div>
              </div>

              <div className="bg-[#0F172A] border border-slate-700/60 p-4 sm:p-6 rounded-2xl shadow-xl">
                <h3 className="text-sm sm:text-base font-bold mb-3 text-white">Expense Ledger</h3>
                <div className="space-y-2.5">
                  {expenses.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-3 bg-[#070B14] rounded-xl border border-slate-800">
                      <div>
                        <div className="font-bold text-xs sm:text-sm text-white">{item.title}</div>
                        <div className="text-[10px] sm:text-xs text-slate-400">Paid by: {item.paid_by || 'Anonymous'}</div>
                      </div>
                      <div className="text-base sm:text-lg font-black text-emerald-400">₹{item.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-5">
            <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-xl font-bold text-slate-950">
                  {currentUser.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">{currentUser}</h2>
                  <p className="text-xs text-cyan-400">TripSync Explorer</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 w-full sm:w-auto text-center text-xs">
                <div className="bg-[#070B14] border border-slate-800 px-3 py-2 rounded-xl">
                  <span className="text-base font-bold text-cyan-400">{userTrips.length}</span>
                  <p className="text-[9px] text-slate-400 uppercase">Trips</p>
                </div>
                <div className="bg-[#070B14] border border-slate-800 px-3 py-2 rounded-xl">
                  <span className="text-base font-bold text-emerald-400">{userTrips.filter(t => t.status === 'Completed').length}</span>
                  <p className="text-[9px] text-slate-400 uppercase">Done</p>
                </div>
                <div className="bg-[#070B14] border border-slate-800 px-3 py-2 rounded-xl">
                  <span className="text-base font-bold text-amber-400">{userTrips.filter(t => t.status === 'Planned').length}</span>
                  <p className="text-[9px] text-slate-400 uppercase">Planned</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 space-y-3 text-xs">
                <h3 className="text-sm font-bold text-white">Edit Profile Info</h3>
                <form onSubmit={(e) => { e.preventDefault(); alert('Profile info updated!'); }} className="space-y-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Full Name</label>
                    <input type="text" value={userProfile.name} onChange={(e)=>setUserProfile({...userProfile, name: e.target.value})} className="w-full bg-[#070B14] border border-slate-800 rounded-xl px-3 py-2 text-white outline-none focus:border-cyan-400" />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Email</label>
                    <input type="email" value={userProfile.email} onChange={(e)=>setUserProfile({...userProfile, email: e.target.value})} className="w-full bg-[#070B14] border border-slate-800 rounded-xl px-3 py-2 text-white outline-none focus:border-cyan-400" />
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-xl mt-1">
                    Save Changes
                  </button>
                </form>
              </div>

              <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-white">Your Booked & Saved Trips</h3>
                  <button
                    onClick={() => setActiveTab('planner')}
                    className="text-[10px] text-cyan-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    + Plan New Trip
                  </button>
                </div>

                <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-1">
                  {userTrips.length === 0 ? (
                    <div className="p-6 bg-[#070B14] border border-slate-800/80 rounded-2xl text-center space-y-2">
                      <Calendar className="h-6 w-6 text-slate-500 mx-auto" />
                      <p className="text-xs text-slate-400">No trips planned yet.</p>
                      <button
                        onClick={() => setActiveTab('planner')}
                        className="px-3.5 py-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-[11px] font-bold rounded-lg shadow"
                      >
                        Plan Your First Trip 🚀
                      </button>
                    </div>
                  ) : (
                    userTrips.map(t => (
                      <div key={t.id} className="p-3 bg-[#070B14] border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-white">{t.title}</div>
                          <div className="text-[10px] text-slate-400">{t.location} • {t.date}</div>
                          <div className="text-[10px] text-emerald-400 font-bold mt-0.5">{t.cost}</div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => markTripDone(t.id)}
                            className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase ${
                              t.status === 'Completed' 
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                                : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                            }`}
                          >
                            {t.status}
                          </button>
                          <button
                            onClick={() => deleteTrip(t.id)}
                            className="p-1 text-slate-500 hover:text-red-400 text-xs"
                            title="Delete Trip"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}