import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, ComposedChart } from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Download, 
  Users, 
  CreditCard, 
  AlertTriangle, 
  XCircle, 
  PlusCircle,
  Sun,
  Moon,
  Menu,
  X,
  Search,
  Bell,
  Settings,
  HelpCircle,
  User
} from 'lucide-react';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState('7 Days');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Mock API data
  const mockData = {
    aum: { value: '12.19', change: '+0.77%', trend: 'up' },
    sip: { value: '1.39', change: '+5%', trend: 'up' },
    stats: [
      { title: 'Purchases', value: '0', icon: Users },
      { title: 'Redemptions', value: '0', icon: CreditCard },
      { title: 'Rejected Transactions', value: '0', icon: AlertTriangle },
      { title: 'SIP Rejections', value: '0', icon: XCircle },
      { title: 'New SIP', value: '0', icon: PlusCircle }
    ],
    chartData: [
      { name: 'Jan', value: 400, sip: 240 },
      { name: 'Feb', value: 300, sip: 220 },
      { name: 'Mar', value: 500, sip: 280 },
      { name: 'Apr', value: 280, sip: 200 },
      { name: 'May', value: 450, sip: 350 },
      { name: 'Jun', value: 380, sip: 280 }
    ],
    pieData: [
      { name: 'Online', value: 3824, color: '#ef4444' },
      { name: 'Offline', value: 541, color: '#f97316' },
      { name: 'Active', value: 2, color: '#22c55e' }
    ]
  };

  // Fetch data based on time range
  const fetchData = async (timeRange) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    setData(mockData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(selectedTimeRange);
  }, [selectedTimeRange]);

  // Navigation items
  const navItems = [
    'HOME', 'CRM', 'UTILITIES', 'INSURANCE', 'ASSETS', 'MUTUAL', 
    'RESEARCH', 'TRANSACT ONLINE', 'GOAL GPS', 'FINANCIAL PLANNING', 
    'WEALTH REPORT', 'OTHERS'
  ];

  const timeRanges = ['3 Days', '7 Days', '10 Days', '30 Days'];

  // Download PDF function
  const downloadPDF = () => {
    // Simple PDF download simulation
    const element = document.createElement('a');
    const file = new Blob(['Dashboard Report - AUM: ₹12.19 Cr, SIP: ₹1.39 Lakh'], { type: 'application/pdf' });
    element.href = URL.createObjectURL(file);
    element.download = 'dashboard-report.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle - Fixed positioned on middle-right */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-1/2 right-4 z-50 transform -translate-y-1/2 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      <div className="bg-background text-foreground">
        {/* Top Navbar - Logo, Search, Icons */}
        <header className="bg-white dark:bg-gray-900 shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-500 rounded text-white flex items-center justify-center text-sm font-bold">
                    WE
                  </div>
                  <span className="text-xl font-bold text-foreground">WealthElite</span>
                </div>
              </div>

              {/* Search Bar - Desktop */}
              <div className="hidden md:flex flex-1 max-w-lg mx-8">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search anything..."
                    className="pl-10 w-full"
                  />
                </div>
              </div>

              {/* Right Icons */}
              <div className="flex items-center space-x-2">
                {/* Search for mobile */}
                <button className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                  <Search className="h-5 w-5" />
                </button>
                
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                  <Bell className="h-5 w-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                  <Settings className="h-5 w-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                  <HelpCircle className="h-5 w-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                  <User className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Second Navbar - Navigation Items */}
        <header className="bg-red-500 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-1 w-full">
                {navItems.map((item, index) => (
                  <button
                    key={item}
                    className={`px-3 py-2 text-sm font-medium btn-hover transition-colors ${
                      index === 0 
                        ? 'bg-white text-red-500 rounded-md' 
                        : 'text-white hover:bg-red-600 rounded-md'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-white hover:bg-red-600"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="lg:hidden py-4 border-t border-red-400">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {navItems.map((item, index) => (
                    <button
                      key={item}
                      className={`px-3 py-2 rounded-md text-sm font-medium btn-hover transition-colors ${
                        index === 0 
                          ? 'bg-white text-red-500' 
                          : 'text-white hover:bg-red-600'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          {/* Financial Dashboard Title */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Financial Dashboard</h1>
            <Button 
              onClick={downloadPDF}
              className="btn-hover btn-pulse bg-red-500 hover:bg-red-600 text-white px-6 py-2"
            >
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
          {/* Top Stats Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* AUM Card */}
            <Card className="animate-card-enter animate-card-hover" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Current</CardTitle>
                <Badge className="bg-red-500 text-white border-0">Live Report</Badge>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">AUM {data?.aum.value || '12.19'} Cr</div>
                    <div className="flex items-center text-green-500 text-sm mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {data?.aum.change || '+0.77%'} MoM
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="btn-hover btn-pulse">
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* SIP Card */}
            <Card className="animate-card-enter animate-card-hover" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Current</CardTitle>
                <Badge className="bg-red-500 text-white border-0">Live Report</Badge>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">SIP {data?.sip.value || '1.39'} Lakh</div>
                    <div className="flex items-center text-green-500 text-sm mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {data?.sip.change || '+5%'} MoM
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="btn-hover btn-pulse">
                    View Trend
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Time Range Filter - Positioned on the left */}
          <div className="flex flex-wrap justify-start gap-2">
            {timeRanges.map((range) => (
              <Button
                key={range}
                variant={selectedTimeRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTimeRange(range)}
                className="btn-hover transition-all duration-300"
                disabled={loading}
              >
                {range}
              </Button>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {(data?.stats || mockData.stats).map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.title} className="animate-card-enter animate-card-hover" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="h-5 w-5 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">{stat.title}</div>
                    </div>
                    <div className="text-2xl font-bold mt-2">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">0.00 INR</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Clients Bubble Chart */}
            <Card className="animate-card-enter animate-card-hover" style={{ animationDelay: '0.8s' }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>CLIENTS</CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={downloadPDF}
                  className="btn-hover btn-pulse border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="h-64 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <>
                    {/* Bubble Chart */}
                    <div className="relative h-48 flex items-center justify-center mb-4">
                      <svg width="200" height="180" viewBox="0 0 200 180" className="overflow-visible">
                        {/* Main large red circle - Active */}
                        <circle cx="100" cy="90" r="45" fill="#ef4444" opacity="0.9" />
                        <text x="100" y="95" textAnchor="middle" className="fill-white font-bold text-lg">3824</text>
                        
                        {/* Medium red circle - Inactive */}
                        <circle cx="75" cy="75" r="25" fill="#dc2626" opacity="0.8" />
                        <text x="75" y="80" textAnchor="middle" className="fill-white font-semibold text-sm">541</text>
                        
                        {/* Orange circle - Online */}
                        <circle cx="120" cy="60" r="18" fill="#f97316" opacity="0.9" />
                        <text x="120" y="65" textAnchor="middle" className="fill-white font-semibold text-xs">60</text>
                        
                        {/* Small green circle - New */}
                        <circle cx="140" cy="110" r="12" fill="#22c55e" opacity="0.9" />
                        <text x="140" y="115" textAnchor="middle" className="fill-white font-semibold text-xs">2</text>
                      </svg>
                    </div>
                    
                    {/* Legend */}
                    <div className="flex justify-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <span className="text-xs text-muted-foreground">Online</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-xs text-muted-foreground">New</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-xs text-muted-foreground">Active</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-600"></div>
                        <span className="text-xs text-muted-foreground">Inactive</span>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* SIP Business Chart */}
            <Card className="animate-card-enter animate-card-hover" style={{ animationDelay: '0.9s' }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>SIP BUSINESS CHART</CardTitle>
                <Badge variant="outline" className="text-red-500 border-red-500">Live Report</Badge>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="h-64 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height={250}>
                    <ComposedChart data={data?.chartData || mockData.chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#3b82f6" />
                      <Line type="monotone" dataKey="sip" stroke="#ef4444" strokeWidth={2} />
                    </ComposedChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>

            {/* Monthly MIS */}
            <Card className="animate-card-enter animate-card-hover" style={{ animationDelay: '1.0s' }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>MONTHLY MIS</CardTitle>
                <Badge variant="outline" className="text-red-500 border-red-500">Live Report</Badge>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="h-64 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={data?.chartData || mockData.chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                      <Line type="monotone" dataKey="sip" stroke="#82ca9d" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Index;
