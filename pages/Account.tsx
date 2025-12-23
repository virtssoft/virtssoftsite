
import React, { useState } from 'react';
import { User, Shield, Package, Headphones, LogOut, Settings } from 'lucide-react';

export const Account: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('info');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-gray-50 text-black">
        <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-xl">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-light tracking-widest uppercase mb-2">Virtssoft</h1>
            <p className="text-sm text-gray-400 uppercase tracking-widest">OneAccount</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Email ou Identifiant</label>
              <input 
                type="text" 
                className="w-full px-6 py-4 bg-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="nom@exemple.com"
                required 
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Mot de passe</label>
              <input 
                type="password" 
                className="w-full px-6 py-4 bg-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="••••••••"
                required 
              />
            </div>
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
              Se connecter
            </button>
            <div className="text-center space-y-4">
              <button type="button" className="text-sm text-blue-600 hover:underline">Mot de passe oublié ?</button>
              <div className="flex items-center space-x-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400 font-bold uppercase">Ou</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <button type="button" className="w-full py-4 border border-gray-200 rounded-xl font-bold flex items-center justify-center space-x-3 hover:bg-gray-50 transition-all">
                 <Shield className="w-4 h-4 text-blue-600" />
                 <span>Connexion OneAccount</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Sidebar Menu */}
        <div className="w-full md:w-80 flex-shrink-0">
          <div className="bg-white/5 border border-white/5 rounded-3xl p-6 sticky top-32">
            <div className="flex items-center space-x-4 mb-10 px-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">JD</div>
              <div>
                <p className="font-bold">John Doe</p>
                <p className="text-xs text-gray-500">ID: VS-12345</p>
              </div>
            </div>
            <nav className="space-y-2">
              {[
                { id: 'info', icon: User, label: 'Informations' },
                { id: 'security', icon: Shield, label: 'Sécurité' },
                { id: 'services', icon: Settings, label: 'Mes Services' },
                { id: 'orders', icon: Package, label: 'Commandes' },
                { id: 'support', icon: Headphones, label: 'Tickets Support' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-4 px-6 py-4 rounded-xl transition-all ${
                    activeTab === item.id ? 'bg-blue-600 text-white' : 'hover:bg-white/5 text-gray-400'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="w-full flex items-center space-x-4 px-6 py-4 rounded-xl text-red-400 hover:bg-red-400/10 transition-all mt-10"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Déconnexion</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="bg-white/5 border border-white/5 rounded-3xl p-12">
            {activeTab === 'info' && (
              <div className="space-y-12">
                <h2 className="text-3xl font-light">Informations Personnelles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Nom Complet</label>
                    <p className="text-lg">John Doe</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Email</label>
                    <p className="text-lg">john.doe@virtssoft.com</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Téléphone</label>
                    <p className="text-lg">+243 993 809 052</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Ville</label>
                    <p className="text-lg">Goma, RDC</p>
                  </div>
                </div>
                <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                  Modifier mes informations
                </button>
              </div>
            )}
            {activeTab === 'services' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-light">Mes Services Virtssoft</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="p-6 bg-blue-600/10 rounded-2xl border border-blue-600/20 flex justify-between items-center">
                      <div>
                        <h4 className="font-bold">EM Academia</h4>
                        <p className="text-sm text-blue-300">Statut: Actif</p>
                      </div>
                      <button className="text-xs uppercase tracking-widest font-bold bg-blue-600 px-4 py-2 rounded-lg">Gérer</button>
                   </div>
                   <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center opacity-50">
                      <div>
                        <h4 className="font-bold">EM Business</h4>
                        <p className="text-sm text-gray-500">Statut: Non Actif</p>
                      </div>
                      <button className="text-xs uppercase tracking-widest font-bold border border-white/20 px-4 py-2 rounded-lg">Souscrire</button>
                   </div>
                </div>
              </div>
            )}
            {/* Other tabs can be implemented similarly */}
          </div>
        </div>
      </div>
    </div>
  );
};
