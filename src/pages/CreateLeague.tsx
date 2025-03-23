
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Lock, Users, Globe, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';

const CreateLeague = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    leagueName: '',
    description: '',
    isPrivate: false,
    password: '',
    teamLimit: 10,
    draftDate: '',
    draftTime: '',
    seasonStart: '',
    seasonEnd: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    
    setFormData({
      ...formData,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this data to the backend
    console.log('Form submitted:', formData);
    
    // Navigate to the dashboard or league details page
    navigate('/dashboard');
  };
  
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center animate-fade-in">
            <h1 className="text-3xl font-bold mb-3">Create Your Fantasy League</h1>
            <p className="text-muted-foreground">Set up your league, invite friends, and start competing</p>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className={cn(
                    "flex flex-col items-center relative z-10",
                    i < step ? "text-primary" : i === step ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  <div 
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-medium mb-2 transition-all",
                      i < step 
                        ? "bg-primary text-white" 
                        : i === step 
                          ? "bg-background border-2 border-primary" 
                          : "bg-background border-2 border-muted"
                    )}
                  >
                    {i}
                  </div>
                  <span className="text-sm font-medium">
                    {i === 1 ? "Basic Info" : i === 2 ? "Settings" : "Review"}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="relative mt-4">
              <div className="absolute top-0 inset-x-0 h-1 bg-muted rounded-full"></div>
              <div 
                className="absolute top-0 left-0 h-1 bg-primary rounded-full transition-all"
                style={{ width: `${(step - 1) * 50}%` }}
              ></div>
            </div>
          </div>
          
          {/* Form Container */}
          <div className="glass-card rounded-xl p-8 shadow-md animate-scale-in">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="leagueName" className="block text-sm font-medium mb-2">
                      League Name *
                    </label>
                    <input
                      id="leagueName"
                      name="leagueName"
                      type="text"
                      required
                      value={formData.leagueName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g. Stockholm Sluggers 2023"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell others what your league is about..."
                    ></textarea>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="block text-sm font-medium mb-1">
                      Privacy Settings
                    </label>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          id="public"
                          name="isPrivate"
                          type="radio"
                          checked={!formData.isPrivate}
                          onChange={() => setFormData({...formData, isPrivate: false})}
                          className="h-4 w-4 text-primary border-input"
                        />
                        <label htmlFor="public" className="ml-3 block">
                          <div className="flex items-center">
                            <Globe className="h-5 w-5 mr-2 text-muted-foreground" />
                            <div>
                              <span className="font-medium">Public League</span>
                              <p className="text-sm text-muted-foreground">Anyone can find and join your league</p>
                            </div>
                          </div>
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="private"
                          name="isPrivate"
                          type="radio"
                          checked={formData.isPrivate}
                          onChange={() => setFormData({...formData, isPrivate: true})}
                          className="h-4 w-4 text-primary border-input"
                        />
                        <label htmlFor="private" className="ml-3 block">
                          <div className="flex items-center">
                            <Lock className="h-5 w-5 mr-2 text-muted-foreground" />
                            <div>
                              <span className="font-medium">Private League</span>
                              <p className="text-sm text-muted-foreground">Only people with the password can join</p>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {formData.isPrivate && (
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-2">
                        League Password *
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="text"
                        required={formData.isPrivate}
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Create a password for your league"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Share this password with people you want to invite
                      </p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Step 2: League Settings */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="teamLimit" className="block text-sm font-medium mb-2">
                      Team Limit *
                    </label>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                      <select
                        id="teamLimit"
                        name="teamLimit"
                        required
                        value={formData.teamLimit}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {[4, 6, 8, 10, 12, 14, 16].map(num => (
                          <option key={num} value={num}>{num} Teams</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="draftDate" className="block text-sm font-medium mb-2">
                        Draft Date *
                      </label>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                        <input
                          id="draftDate"
                          name="draftDate"
                          type="date"
                          required
                          value={formData.draftDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="draftTime" className="block text-sm font-medium mb-2">
                        Draft Time *
                      </label>
                      <input
                        id="draftTime"
                        name="draftTime"
                        type="time"
                        required
                        value={formData.draftTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="seasonStart" className="block text-sm font-medium mb-2">
                        Season Start Date *
                      </label>
                      <input
                        id="seasonStart"
                        name="seasonStart"
                        type="date"
                        required
                        value={formData.seasonStart}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="seasonEnd" className="block text-sm font-medium mb-2">
                        Season End Date *
                      </label>
                      <input
                        id="seasonEnd"
                        name="seasonEnd"
                        type="date"
                        required
                        value={formData.seasonEnd}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 3: Review */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-4">
                    <Trophy className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h2 className="text-xl font-bold">Review Your League</h2>
                    <p className="text-muted-foreground">Make sure everything is correct before creating your league</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">League Name</h3>
                        <p className="font-medium">{formData.leagueName}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Privacy</h3>
                        <p className="font-medium">{formData.isPrivate ? 'Private' : 'Public'}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Team Limit</h3>
                        <p className="font-medium">{formData.teamLimit} Teams</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Draft Date</h3>
                        <p className="font-medium">
                          {formData.draftDate} at {formData.draftTime}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Season Duration</h3>
                        <p className="font-medium">
                          {formData.seasonStart} to {formData.seasonEnd}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {formData.description && (
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Description</h3>
                      <p className="text-sm">{formData.description}</p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {step < 3 ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button type="submit">
                    Create League
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLeague;
