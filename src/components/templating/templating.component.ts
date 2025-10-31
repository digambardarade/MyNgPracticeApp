import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templating',
  templateUrl: './templating.component.html',
  styleUrls: ['./templating.component.scss']
})
export class TemplatingComponent implements OnInit {
  // Example 1: String Interpolation
  title = '100 Ultimate Angular Templating Examples - Complete Master Guide';
  currentDate = new Date();
  
  // Example 2: Property Binding
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  imageAlt = 'Angular Logo';
  isDisabled = false;
  
  // Example 3: Event Binding
  clickCount = 0;
  message = '';
  
  // Example 4: Two-way Data Binding
  userName = 'Angular Developer';
  
  // Example 5: Structural Directives - *ngIf
  showContent = true;
  
  // Example 6: Structural Directives - *ngFor
  languages = [
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'JavaScript', level: 'Expert' },
    { name: 'HTML', level: 'Expert' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'Angular', level: 'Intermediate' }
  ];
  
  // Example 7: Attribute Directives - ngClass
  themes = {
    primary: true,
    secondary: false,
    success: false,
    danger: false
  };
  
  // Example 8: Attribute Directives - ngStyle
  boxStyles = {
    'background-color': '#007bff',
    'color': 'white',
    'padding': '10px',
    'border-radius': '5px'
  };
  
  // Example 9: Template Reference Variables & ViewChild
  focusInput = false;
  
  // Example 10: Pipes
  sampleText = 'angular templating examples';
  sampleNumber = 1234.567;
  sampleDate = new Date();
  
  // Example 11: ngSwitch Directive
  selectedView = 'home';
  
  // Example 12: Safe Navigation Operator (Elvis Operator)
  user: any = {
    name: 'John Doe',
    profile: {
      email: 'john@example.com',
      address: {
        city: 'New York',
        zip: '10001'
      }
    }
  };
  nullUser: any = null;
  
  // Example 13: trackBy Function for *ngFor Performance
  items = [
    { id: 1, name: 'Item 1', description: 'First item' },
    { id: 2, name: 'Item 2', description: 'Second item' },
    { id: 3, name: 'Item 3', description: 'Third item' }
  ];
  
  // Example 14: Custom Attribute Directive Simulation
  isHighlighted = false;
  
  // Example 15: Form Handling
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subscribe: false
  };
  
  // Example 16: Conditional Classes and Styles
  statusClasses = {
    'text-success': true,
    'text-danger': false,
    'font-weight-bold': true
  };
  
  // Example 17: Multiple Event Listeners
  mousePosition = { x: 0, y: 0 };
  
  // Example 18: ngContainer Example
  showAdvancedOptions = false;
  
  // Example 19: Async Data Simulation
  loadingData = false;
  asyncData: string[] = [];
  
  // Example 20: Component communication simulation
  parentMessage = 'Hello from parent component!';
  childResponse = '';
  
  // Example 21: Custom Pipes Simulation
  customText = 'hello world angular';
  
  // Example 22: Dynamic Component Loading Simulation
  componentType = 'card';
  componentData = {
    title: 'Dynamic Component',
    content: 'This content is loaded dynamically',
    imageUrl: 'https://via.placeholder.com/150'
  };
  
  // Example 23: Reactive Forms Simulation (without reactive forms module)
  reactiveFormData = {
    username: 'john_doe',
    email: 'john@example.com',
    password: '',
    confirmPassword: '',
    terms: false
  };
  formErrors: any = {};
  
  // Example 24: Content Projection Simulation
  cardContent = {
    header: 'Card Header Content',
    body: 'This is the main card body content that demonstrates content projection.',
    footer: 'Card Footer Actions'
  };
  showCardContent = true;
  
  // Example 25: Lifecycle Hooks Simulation
  lifecycleLog: string[] = [];
  componentInitialized = false;
  
  // Example 26: Custom Validators Simulation
  validationText = '';
  validationErrors: string[] = [];
  
  // Example 27: Observable Simulation (without RxJS)
  counterValue = 0;
  isCounterRunning = false;
  counterInterval: any;
  
  // Example 28: Lazy Loading Simulation
  lazyContent: string[] = [];
  showLazyContent = false;
  lazyLoading = false;
  
  // Example 29: Internationalization (i18n) Simulation
  selectedLanguage = 'en';
  translations = {
    en: {
      welcome: 'Welcome to Angular',
      greeting: 'Hello, World!',
      button: 'Click Me'
    },
    es: {
      welcome: 'Bienvenido a Angular',
      greeting: '¡Hola, Mundo!',
      button: 'Haz Clic'
    },
    fr: {
      welcome: 'Bienvenue à Angular',
      greeting: 'Bonjour, le Monde!',
      button: 'Cliquez-Moi'
    }
  };
  
  // Example 30: Animation States Simulation
  animationState = 'initial';
  animationStates = ['initial', 'active', 'complete'];
  
  // Example 31: HTTP Service Simulation
  apiData: any[] = [];
  isLoading = false;
  apiError = '';
  
  // Example 32: Local Storage Integration
  storageKey = 'angular-demo-data';
  storedValue = '';
  storageItems: string[] = [];
  
  // Example 33: Date and Time Handling
  selectedDate = new Date();
  timeZones = ['UTC', 'EST', 'PST', 'GMT'];
  selectedTimeZone = 'UTC';
  
  // Example 34: File Upload Simulation
  uploadedFiles: File[] = [];
  uploadProgress = 0;
  isUploading = false;
  
  // Example 35: Drag and Drop
  dragItems = ['Item 1', 'Item 2', 'Item 3'];
  droppedItems: string[] = [];
  dragOverClass = false;
  
  // Example 36: Modal/Dialog Simulation
  isModalOpen = false;
  modalContent = {
    title: 'Modal Dialog',
    message: 'This is a modal dialog example',
    type: 'info'
  };
  
  // Example 37: Toast Notifications
  toasts: Array<{id: number, message: string, type: string, timestamp: Date}> = [];
  toastCounter = 0;
  
  // Example 38: Progress Bars and Indicators
  progressValue = 0;
  isProcessing = false;
  processSteps = ['Initializing', 'Processing', 'Validating', 'Completing'];
  currentStep = 0;
  
  // Example 39: Search and Filter
  searchTerm = '';
  filterOptions = ['All', 'Active', 'Inactive', 'Pending'];
  selectedFilter = 'All';
  sampleItems = [
    { id: 1, name: 'Angular Component', status: 'Active', category: 'Framework' },
    { id: 2, name: 'React Hook', status: 'Inactive', category: 'Library' },
    { id: 3, name: 'Vue Directive', status: 'Pending', category: 'Framework' },
    { id: 4, name: 'Node.js Module', status: 'Active', category: 'Runtime' },
    { id: 5, name: 'TypeScript Interface', status: 'Active', category: 'Language' }
  ];
  
  // Example 40: Accordion/Collapsible
  accordionSections = [
    { id: 1, title: 'Section 1', content: 'Content for section 1', isOpen: false },
    { id: 2, title: 'Section 2', content: 'Content for section 2', isOpen: false },
    { id: 3, title: 'Section 3', content: 'Content for section 3', isOpen: false }
  ];
  
  // Example 41: Tabs Component
  activeTab = 'tab1';
  tabData = {
    tab1: { title: 'Tab 1', content: 'This is the content for tab 1' },
    tab2: { title: 'Tab 2', content: 'This is the content for tab 2' },
    tab3: { title: 'Tab 3', content: 'This is the content for tab 3' }
  };
  
  // Example 42: Rating Component
  rating = 3;
  maxRating = 5;
  isRatingReadonly = false;
  
  // Example 43: Pagination
  currentPage = 1;
  itemsPerPage = 5;
  totalItems = 50;
  
  // Example 44: Breadcrumb Navigation
  breadcrumbs = [
    { label: 'Home', url: '/home', active: false },
    { label: 'Components', url: '/components', active: false },
    { label: 'Templating', url: '/templating', active: true }
  ];
  
  // Example 45: Color Picker
  selectedColor = '#007bff';
  colorPalette = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#6c757d', '#17a2b8'];
  
  // Example 46: Slider/Range Input
  sliderValue = 50;
  rangeMin = 0;
  rangeMax = 100;
  sliderStep = 1;
  
  // Example 47: Tree View
  treeData = [
    {
      name: 'Root Folder',
      expanded: true,
      children: [
        { name: 'src', expanded: false, children: [
          { name: 'app', expanded: false, children: [] },
          { name: 'assets', expanded: false, children: [] }
        ]},
        { name: 'node_modules', expanded: false, children: [] }
      ]
    }
  ];
  
  // Example 48: Data Table with Sorting
  tableData = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 35, email: 'bob@example.com' }
  ];
  sortColumn = '';
  sortDirection = 'asc';
  
  // Example 49: Calendar/Date Picker
  calendarDate = new Date();
  calendarView = 'month';
  selectedDates: Date[] = [];
  
  // Example 50: Chart Data Visualization
  chartData = [
    { label: 'January', value: 65 },
    { label: 'February', value: 78 },
    { label: 'March', value: 92 },
    { label: 'April', value: 45 },
    { label: 'May', value: 87 }
  ];
  chartType = 'bar';
  
  // Examples 51-100: Advanced Angular Templating
  
  // Example 51: WebSocket Real-time Data
  websocketConnected = false;
  realtimeData: any[] = [];
  
  // Example 52: Advanced Form Validation
  userFormData = { 
    username: '', 
    password: '', 
    confirmPassword: '', 
    email: '',
    phone: ''
  };
  advancedValidationErrors: {[key: string]: string} = {};
  
  // Example 53: State Management Pattern
  appState = {
    user: null,
    theme: 'light',
    notifications: 0,
    cart: []
  };
  
  // Example 54: Component Communication
  parentToChildMessage = 'Hello from parent';
  childToParentResponse = '';
  
  // Example 55: Dynamic Component Loading
  dynamicComponentType = 'text';
  dynamicComponentData = { content: 'Dynamic content' };
  
  // Example 56: Advanced Animations
  advancedAnimationState = 'initial';
  animationSpeed = 300;
  
  // Example 57: Micro Frontend Integration
  microfrontendUrl = '';
  microfrontendLoaded = false;
  
  // Example 58: Performance Monitoring
  performanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    interactionTime: 0
  };
  
  // Example 59: PWA Features
  isOnline = navigator.onLine;
  installPrompt: any = null;
  
  // Example 60: Advanced Caching
  cacheStrategy = 'network-first';
  cachedData: any = null;
  
  // Example 61: GraphQL Integration
  graphqlQuery = `
    query GetUsers {
      users {
        id
        name
        email
      }
    }
  `;
  graphqlVariables = {};
  graphqlResult: any = null;
  
  // Example 62: Real-time Collaboration
  collaborationUsers: any[] = [];
  sharedDocument = '';
  cursorPositions: {[userId: string]: number} = {};
  
  // Example 63: A/B Testing
  testVariant = 'A';
  conversionTracking = { views: 0, clicks: 0 };
  
  // Example 64: Machine Learning Integration
  mlModel: any = null;
  predictionInput = '';
  predictionResult: any = null;
  
  // Example 65: Blockchain Integration
  walletConnected = false;
  walletAddress = '';
  transactionHistory: any[] = [];
  
  // Example 66: IoT Device Control
  connectedDevices: any[] = [];
  deviceStatus = { temperature: 22, humidity: 45, lights: false };
  
  // Example 67: Voice Recognition
  voiceRecognition = false;
  voiceCommand = '';
  supportedCommands = ['play', 'pause', 'stop', 'next', 'previous'];
  
  // Example 68: Augmented Reality
  arEnabled = false;
  arMarkers: any[] = [];
  cameraStream: any = null;
  
  // Example 69: Advanced Data Visualization
  d3Chart: any = null;
  chartInteractions = { zoom: true, pan: true, select: true };
  
  // Example 70: Custom Element/Web Component
  customElementData = { title: 'Custom Element', content: 'Web Component content' };
  
  // Example 71: Server-Sent Events
  sseConnection: any = null;
  serverEvents: any[] = [];
  
  // Example 72: Advanced Routing
  routeParams: any = {};
  routeQuery: any = {};
  navigationHistory: string[] = [];
  
  // Example 73: Internationalization (i18n)
  currentLanguage = 'en';
  availableLanguages = ['en', 'es', 'fr', 'de', 'ja'];
  advancedTranslations: {[key: string]: any} = {};
  
  // Example 74: Accessibility Enhancements
  highContrast = false;
  fontSize = 'medium';
  screenReader = false;
  keyboardNavigation = true;
  
  // Example 75: Advanced Security
  securityConfig = {
    csp: true,
    https: true,
    tokenExpiry: 3600
  };
  authTokens: any = {};
  
  // Example 76: Enterprise Patterns
  designPatterns = {
    singleton: false,
    factory: false,
    observer: false,
    strategy: false
  };
  
  // Example 77: Micro Services Integration
  microservices = {
    auth: { status: 'connected', url: 'auth-service' },
    payment: { status: 'disconnected', url: 'payment-service' },
    inventory: { status: 'connected', url: 'inventory-service' }
  };
  
  // Example 78: Advanced Testing Patterns
  testScenarios: any[] = [];
  mockData = { users: [], products: [] };
  testResults = { passed: 0, failed: 0, skipped: 0 };
  
  // Example 79: DevOps Integration
  deploymentInfo = {
    version: '1.0.0',
    environment: 'production',
    lastDeploy: new Date(),
    healthCheck: true
  };
  
  // Example 80: Advanced Error Handling
  errorBoundary = true;
  errorLogs: any[] = [];
  retryConfig = { maxRetries: 3, backoff: 1000 };
  
  // Example 81: Advanced State Patterns
  stateHistory: any[] = [];
  undoStack: any[] = [];
  redoStack: any[] = [];
  
  // Example 82: Component Libraries
  libraryComponents = ['button', 'input', 'modal', 'table', 'chart'];
  selectedLibrary = 'material';
  
  // Example 83: Advanced Styling
  cssVariables: {[key: string]: string} = {};
  responsiveBreakpoints = { xs: 576, sm: 768, md: 992, lg: 1200 };
  
  // Example 84: Performance Optimization
  lazyLoadingConfig = { threshold: 100, rootMargin: '50px' };
  virtualScrolling = { itemHeight: 50, bufferSize: 10 };
  
  // Example 85: Advanced Forms
  formSchemas: any[] = [];
  dynamicFields: any[] = [];
  formValidators: any = {};
  
  // Example 86: Real-time Analytics
  analyticsData = {
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionTime: 0
  };
  
  // Example 87: Advanced Debugging
  debugMode = false;
  debugLogs: any[] = [];
  performanceProfile: any = null;
  
  // Example 88: Cross-Platform Features
  platformInfo = {
    browser: '',
    os: '',
    mobile: false,
    touchSupport: false
  };
  
  // Example 89: Advanced Configuration
  environmentConfig: any = {};
  featureFlags: {[key: string]: boolean} = {};
  
  // Example 90: Plugin Architecture
  loadedPlugins: any[] = [];
  pluginRegistry: any = {};
  
  // Example 91: Advanced Notifications
  notificationQueue: any[] = [];
  notificationSettings = {
    browser: true,
    email: false,
    push: true,
    sms: false
  };
  
  // Example 92: Workflow Engine
  workflowSteps: any[] = [];
  currentWorkflowStep = 0;
  workflowData: any = {};
  
  // Example 93: Advanced Search
  searchConfig = {
    fuzzy: true,
    caseSensitive: false,
    wholeWord: false,
    regex: false
  };
  searchHistory: string[] = [];
  
  // Example 94: Data Synchronization
  syncStatus = 'idle';
  conflictResolution = 'client-wins';
  syncQueue: any[] = [];
  
  // Example 95: Advanced Monitoring
  healthMetrics = {
    cpu: 0,
    memory: 0,
    network: 0,
    errors: 0
  };
  alertThresholds = { cpu: 80, memory: 85, errors: 10 };
  
  // Example 96: Custom Directives
  directiveConfig: any = {};
  customBehaviors: string[] = [];
  
  // Example 97: Advanced Pipes
  pipelineData: any[] = [];
  transformationRules: any[] = [];
  
  // Example 98: Component Composition
  compositionPattern = 'hoc';
  mixins: any[] = [];
  
  // Example 99: Advanced Lifecycle
  lifecycleEvents: string[] = [];
  componentMetrics = {
    initTime: 0,
    renderCount: 0,
    updateCount: 0
  };
  
  // Example 100: Future-Ready Patterns
  experimentalFeatures = {
    webAssembly: false,
    quantumComputing: false,
    aiIntegration: false,
    blockchainStorage: false
  };
  futureConfig: any = {};
  
  // Helper properties for template
  Object = Object; // Make Object available in template
  
  // Initialize component
  ngOnInit(): void {
    this.loadStorageItems();
  }

  // Track by function for *ngFor
  trackById(index: number, item: any): any {
    return item.id || index;
  }

  // Helper methods for template
  getDesignPattern(pattern: string): boolean {
    return (this.designPatterns as any)[pattern];
  }

  getExperimentalFeature(feature: string): boolean {
    return (this.experimentalFeatures as any)[feature];
  }

  getCurrentTimestamp(): number {
    return Date.now();
  }
  
  // Methods for event handling
  onButtonClick(): void {
    this.clickCount++;
    this.message = `Button clicked ${this.clickCount} times!`;
  }
  
  onInputChange(event: any): void {
    this.message = `Input changed to: ${event.target.value}`;
  }
  
  toggleContent(): void {
    this.showContent = !this.showContent;
  }
  
  changeTheme(theme: string): void {
    // Reset all themes
    Object.keys(this.themes).forEach(key => {
      this.themes[key as keyof typeof this.themes] = false;
    });
    // Set selected theme
    this.themes[theme as keyof typeof this.themes] = true;
  }
  
  changeBoxColor(color: string): void {
    this.boxStyles['background-color'] = color;
  }
  
  focusOnInput(): void {
    this.focusInput = true;
    // Reset focus flag after a short delay
    setTimeout(() => {
      this.focusInput = false;
    }, 100);
  }
  
  addLanguage(languageName: string, level: string): void {
    if (languageName && level) {
      this.languages.push({ name: languageName, level: level });
    }
  }
  
  removeLanguage(index: number): void {
    this.languages.splice(index, 1);
  }
  
  // Additional Methods for New Examples
  
  // Example 11: ngSwitch methods
  selectView(view: string): void {
    this.selectedView = view;
  }
  
  // Example 13: trackBy function for performance
  trackByItemId(index: number, item: any): number {
    return item.id;
  }
  
  addNewItem(): void {
    const newId = Math.max(...this.items.map(item => item.id)) + 1;
    this.items.push({
      id: newId,
      name: `Item ${newId}`,
      description: `Description for item ${newId}`
    });
  }
  
  removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
  
  // Example 14: Custom highlighting
  toggleHighlight(): void {
    this.isHighlighted = !this.isHighlighted;
  }
  
  // Example 15: Form handling
  onSubmit(): void {
    console.log('Form Data:', this.formData);
    alert(`Form submitted for ${this.formData.firstName} ${this.formData.lastName}`);
  }
  
  resetForm(): void {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subscribe: false
    };
  }
  
  // Example 16: Toggle status classes
  toggleStatus(): void {
    this.statusClasses['text-success'] = !this.statusClasses['text-success'];
    this.statusClasses['text-danger'] = !this.statusClasses['text-danger'];
  }
  
  getStatusClassValue(className: string): boolean {
    return this.statusClasses[className as keyof typeof this.statusClasses];
  }
  
  // Example 17: Mouse event handling
  onMouseMove(event: MouseEvent): void {
    this.mousePosition.x = event.clientX;
    this.mousePosition.y = event.clientY;
  }
  
  // Example 18: Toggle advanced options
  toggleAdvancedOptions(): void {
    this.showAdvancedOptions = !this.showAdvancedOptions;
  }
  
  // Example 19: Simulate async data loading
  loadAsyncData(): void {
    this.loadingData = true;
    this.asyncData = [];
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      this.asyncData = [
        'Async Data Item 1',
        'Async Data Item 2',
        'Async Data Item 3',
        'Async Data Item 4'
      ];
      this.loadingData = false;
    }, 2000);
  }
  
  // Example 20: Component communication simulation
  sendMessageToChild(message: string): void {
    this.parentMessage = message;
  }
  
  receiveResponseFromChild(response: string): void {
    this.childResponse = response;
  }
  
  // Additional Methods for Examples 21-30
  
  // Example 21: Custom pipe simulation
  customUppercase(text: string): string {
    return text.toUpperCase();
  }
  
  customReverse(text: string): string {
    return text.split('').reverse().join('');
  }
  
  customTruncate(text: string, limit: number): string {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }
  
  // Example 22: Dynamic component switching
  switchComponent(type: string): void {
    this.componentType = type;
    switch (type) {
      case 'card':
        this.componentData = {
          title: 'Card Component',
          content: 'This is a card layout component',
          imageUrl: 'https://via.placeholder.com/150/007bff'
        };
        break;
      case 'list':
        this.componentData = {
          title: 'List Component',
          content: 'This shows a list layout',
          imageUrl: 'https://via.placeholder.com/150/28a745'
        };
        break;
      case 'table':
        this.componentData = {
          title: 'Table Component',
          content: 'This displays tabular data',
          imageUrl: 'https://via.placeholder.com/150/dc3545'
        };
        break;
    }
  }
  
  // Example 23: Form validation simulation
  validateReactiveForm(): void {
    this.formErrors = {};
    
    if (!this.reactiveFormData.username) {
      this.formErrors.username = 'Username is required';
    } else if (this.reactiveFormData.username.length < 3) {
      this.formErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!this.reactiveFormData.email) {
      this.formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(this.reactiveFormData.email)) {
      this.formErrors.email = 'Invalid email format';
    }
    
    if (!this.reactiveFormData.password) {
      this.formErrors.password = 'Password is required';
    } else if (this.reactiveFormData.password.length < 6) {
      this.formErrors.password = 'Password must be at least 6 characters';
    }
    
    if (this.reactiveFormData.password !== this.reactiveFormData.confirmPassword) {
      this.formErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!this.reactiveFormData.terms) {
      this.formErrors.terms = 'You must accept the terms and conditions';
    }
  }
  
  submitReactiveForm(): void {
    this.validateReactiveForm();
    if (Object.keys(this.formErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  }
  
  // Example 24: Content projection toggle
  toggleCardContent(): void {
    this.showCardContent = !this.showCardContent;
  }
  
  updateCardContent(section: string): void {
    const newContent = prompt(`Enter new ${section} content:`);
    if (newContent) {
      (this.cardContent as any)[section] = newContent;
    }
  }
  
  // Example 25: Lifecycle hooks simulation
  simulateNgOnInit(): void {
    this.lifecycleLog.push('ngOnInit() called - Component initialized');
    this.componentInitialized = true;
  }
  
  simulateNgAfterViewInit(): void {
    this.lifecycleLog.push('ngAfterViewInit() called - View initialized');
  }
  
  simulateNgOnDestroy(): void {
    this.lifecycleLog.push('ngOnDestroy() called - Component destroyed');
  }
  
  clearLifecycleLog(): void {
    this.lifecycleLog = [];
    this.componentInitialized = false;
  }
  
  // Example 26: Custom validation
  validateCustomText(): void {
    this.validationErrors = [];
    const text = this.validationText;
    
    if (text.length < 5) {
      this.validationErrors.push('Text must be at least 5 characters long');
    }
    
    if (!/[A-Z]/.test(text)) {
      this.validationErrors.push('Text must contain at least one uppercase letter');
    }
    
    if (!/\d/.test(text)) {
      this.validationErrors.push('Text must contain at least one number');
    }
    
    if (/[<>]/.test(text)) {
      this.validationErrors.push('Text cannot contain < or > characters');
    }
  }
  
  // Example 27: Observable counter simulation
  startCounter(): void {
    if (this.isCounterRunning) return;
    
    this.isCounterRunning = true;
    this.counterInterval = setInterval(() => {
      this.counterValue++;
    }, 1000);
  }
  
  stopCounter(): void {
    if (this.counterInterval) {
      clearInterval(this.counterInterval);
      this.counterInterval = null;
    }
    this.isCounterRunning = false;
  }
  
  resetCounter(): void {
    this.stopCounter();
    this.counterValue = 0;
  }
  
  // Example 28: Lazy loading simulation
  loadLazyContent(): void {
    if (this.showLazyContent) return;
    
    this.lazyLoading = true;
    
    // Simulate network delay
    setTimeout(() => {
      this.lazyContent = [
        'Lazy loaded content item 1',
        'Lazy loaded content item 2',
        'Lazy loaded content item 3',
        'Lazy loaded content item 4',
        'Lazy loaded content item 5'
      ];
      this.showLazyContent = true;
      this.lazyLoading = false;
    }, 2000);
  }
  
  unloadLazyContent(): void {
    this.showLazyContent = false;
    this.lazyContent = [];
  }
  
  // Example 29: Language switching
  switchLanguage(lang: string): void {
    this.selectedLanguage = lang;
  }
  
  getTranslation(key: string): string {
    const langTranslations = this.translations[this.selectedLanguage as keyof typeof this.translations];
    return langTranslations[key as keyof typeof langTranslations] || key;
  }
  
  // Example 30: Animation state management
  nextAnimationState(): void {
    const currentIndex = this.animationStates.indexOf(this.animationState);
    const nextIndex = (currentIndex + 1) % this.animationStates.length;
    this.animationState = this.animationStates[nextIndex];
  }
  
  setAnimationState(state: string): void {
    this.animationState = state;
  }
  
  resetAnimation(): void {
    this.animationState = 'initial';
  }
  
  // Additional Methods for Examples 31-50
  
  // Example 31: HTTP Service simulation
  fetchData(): void {
    this.isLoading = true;
    this.apiError = '';
    
    // Simulate API call
    setTimeout(() => {
      this.apiData = [
        { id: 1, title: 'API Data 1', description: 'First item from API' },
        { id: 2, title: 'API Data 2', description: 'Second item from API' },
        { id: 3, title: 'API Data 3', description: 'Third item from API' }
      ];
      this.isLoading = false;
    }, 1500);
  }
  
  simulateApiError(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.apiError = 'Failed to fetch data from server';
      this.isLoading = false;
      this.apiData = [];
    }, 1000);
  }
  
  // Example 32: Local Storage
  saveToStorage(): void {
    if (this.storedValue.trim()) {
      const existing = this.getStorageItems();
      existing.push(this.storedValue);
      localStorage.setItem(this.storageKey, JSON.stringify(existing));
      this.loadStorageItems();
      this.storedValue = '';
    }
  }
  
  loadStorageItems(): void {
    this.storageItems = this.getStorageItems();
  }
  
  getStorageItems(): string[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }
  
  clearStorage(): void {
    localStorage.removeItem(this.storageKey);
    this.storageItems = [];
  }
  
  // Example 33: Date and Time
  formatDateForTimeZone(date: Date, timezone: string): string {
    return `${date.toLocaleDateString()} (${timezone})`;
  }
  
  changeTimeZone(tz: string): void {
    this.selectedTimeZone = tz;
  }
  
  // Example 34: File Upload simulation
  onFileSelect(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.uploadedFiles = Array.from(files);
      this.simulateUpload();
    }
  }
  
  simulateUpload(): void {
    this.isUploading = true;
    this.uploadProgress = 0;
    
    const interval = setInterval(() => {
      this.uploadProgress += 10;
      if (this.uploadProgress >= 100) {
        clearInterval(interval);
        this.isUploading = false;
        alert('Files uploaded successfully!');
      }
    }, 200);
  }
  
  // Example 35: Drag and Drop
  onDragStart(event: DragEvent, item: string): void {
    event.dataTransfer?.setData('text/plain', item);
  }
  
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragOverClass = true;
  }
  
  onDragLeave(): void {
    this.dragOverClass = false;
  }
  
  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragOverClass = false;
    const data = event.dataTransfer?.getData('text/plain');
    if (data && !this.droppedItems.includes(data)) {
      this.droppedItems.push(data);
    }
  }
  
  resetDragDrop(): void {
    this.droppedItems = [];
  }
  
  // Example 36: Modal
  openModal(type: string = 'info'): void {
    this.modalContent.type = type;
    this.modalContent.title = `${type.charAt(0).toUpperCase() + type.slice(1)} Modal`;
    this.modalContent.message = `This is a ${type} modal dialog example`;
    this.isModalOpen = true;
  }
  
  closeModal(): void {
    this.isModalOpen = false;
  }
  
  // Example 37: Toast Notifications
  showToast(message: string, type: string = 'info'): void {
    const toast = {
      id: ++this.toastCounter,
      message,
      type,
      timestamp: new Date()
    };
    this.toasts.push(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      this.removeToast(toast.id);
    }, 3000);
  }
  
  removeToast(id: number): void {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
  }
  
  // Example 38: Progress
  startProcess(): void {
    this.isProcessing = true;
    this.progressValue = 0;
    this.currentStep = 0;
    
    const interval = setInterval(() => {
      this.progressValue += 5;
      this.currentStep = Math.floor(this.progressValue / 25);
      
      if (this.progressValue >= 100) {
        clearInterval(interval);
        this.isProcessing = false;
        this.showToast('Process completed successfully!', 'success');
      }
    }, 100);
  }
  
  // Example 39: Search and Filter
  get filteredItems(): any[] {
    let filtered = this.sampleItems;
    
    if (this.selectedFilter !== 'All') {
      filtered = filtered.filter(item => item.status === this.selectedFilter);
    }
    
    if (this.searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }
  
  // Example 40: Accordion
  toggleAccordion(sectionId: number): void {
    const section = this.accordionSections.find(s => s.id === sectionId);
    if (section) {
      section.isOpen = !section.isOpen;
    }
  }
  
  // Example 41: Tabs
  selectTab(tabId: string): void {
    this.activeTab = tabId;
  }

  getTabData(tabId: string): any {
    return (this.tabData as any)[tabId];
  }
  
  // Example 42: Rating
  setRating(rating: number): void {
    if (!this.isRatingReadonly) {
      this.rating = rating;
    }
  }
  
  toggleRatingReadonly(): void {
    this.isRatingReadonly = !this.isRatingReadonly;
  }
  
  // Example 43: Pagination
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
  
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  
  // Example 44: Breadcrumbs
  navigateToBreadcrumb(index: number): void {
    this.breadcrumbs.forEach((crumb, i) => {
      crumb.active = i === index;
    });
  }
  
  // Example 45: Color Picker
  selectColor(color: string): void {
    this.selectedColor = color;
  }
  
  // Example 46: Slider
  onSliderChange(event: any): void {
    this.sliderValue = event.target.value;
  }
  
  // Example 47: Tree View
  toggleTreeNode(node: any): void {
    node.expanded = !node.expanded;
  }
  
  // Example 48: Table Sorting
  sortTable(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    
    this.tableData.sort((a, b) => {
      const aVal = (a as any)[column];
      const bVal = (b as any)[column];
      const result = aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
      return this.sortDirection === 'asc' ? result : -result;
    });
  }
  
  // Example 49: Calendar
  changeCalendarView(view: string): void {
    this.calendarView = view;
  }
  
  selectDate(date: Date): void {
    const dateExists = this.selectedDates.some(d => d.getTime() === date.getTime());
    if (dateExists) {
      this.selectedDates = this.selectedDates.filter(d => d.getTime() !== date.getTime());
    } else {
      this.selectedDates.push(date);
    }
  }
  
  // Example 50: Chart
  changeChartType(type: string): void {
    this.chartType = type;
  }
  
  updateChartData(): void {
    this.chartData = this.chartData.map(item => ({
      ...item,
      value: Math.floor(Math.random() * 100)
    }));
  }

  // Methods for Examples 51-100

  // Example 51: WebSocket Real-time Data
  connectWebSocket(): void {
    this.websocketConnected = true;
    // Simulate real-time data
    setInterval(() => {
      if (this.websocketConnected) {
        this.realtimeData.push({
          id: Date.now(),
          value: Math.floor(Math.random() * 100),
          timestamp: new Date()
        });
        if (this.realtimeData.length > 10) {
          this.realtimeData = this.realtimeData.slice(-10);
        }
      }
    }, 2000);
  }

  disconnectWebSocket(): void {
    this.websocketConnected = false;
    this.realtimeData = [];
  }

  // Example 52: Advanced Form Validation
  validateAdvancedForm(): boolean {
    this.advancedValidationErrors = {};
    
    if (!this.userFormData.username || this.userFormData.username.length < 3) {
      this.advancedValidationErrors['username'] = 'Username must be at least 3 characters';
    }
    
    if (this.userFormData.password !== this.userFormData.confirmPassword) {
      this.advancedValidationErrors['confirmPassword'] = 'Passwords do not match';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.userFormData.email)) {
      this.advancedValidationErrors['email'] = 'Invalid email format';
    }
    
    return Object.keys(this.advancedValidationErrors).length === 0;
  }

  submitAdvancedForm(): void {
    if (this.validateAdvancedForm()) {
      this.message = 'Advanced form submitted successfully!';
    }
  }

  // Example 53: State Management Pattern
  updateAppState(key: string, value: any): void {
    this.appState = { ...this.appState, [key]: value };
  }

  resetAppState(): void {
    this.appState = {
      user: null,
      theme: 'light',
      notifications: 0,
      cart: []
    };
  }

  // Example 54: Component Communication
  sendAdvancedMessageToChild(): void {
    this.parentToChildMessage = `Message sent at ${new Date().toLocaleTimeString()}`;
  }

  receiveMessageFromChild(message: string): void {
    this.childToParentResponse = message;
  }

  // Example 55: Dynamic Component Loading
  loadDynamicComponent(type: string): void {
    this.dynamicComponentType = type;
    this.dynamicComponentData = {
      content: `Dynamic ${type} component loaded at ${new Date().toLocaleTimeString()}`
    };
  }

  // Example 56: Advanced Animations
  triggerAdvancedAnimation(): void {
    const states = ['fadeIn', 'slideUp', 'bounce', 'rotate'];
    this.advancedAnimationState = states[Math.floor(Math.random() * states.length)];
  }

  setAnimationSpeed(speed: number): void {
    this.animationSpeed = speed;
  }

  // Example 57: Micro Frontend Integration
  loadMicrofrontend(url: string): void {
    this.microfrontendUrl = url;
    this.microfrontendLoaded = false;
    
    // Simulate loading
    setTimeout(() => {
      this.microfrontendLoaded = true;
    }, 1500);
  }

  // Example 58: Performance Monitoring
  measurePerformance(): void {
    const start = performance.now();
    
    // Simulate some work
    setTimeout(() => {
      const end = performance.now();
      this.performanceMetrics.loadTime = end - start;
      this.performanceMetrics.renderTime = Math.random() * 50;
      this.performanceMetrics.interactionTime = Math.random() * 20;
    }, 100);
  }

  // Example 59: PWA Features
  installPWA(): void {
    if (this.installPrompt) {
      this.installPrompt.prompt();
    }
  }

  toggleOnlineStatus(): void {
    this.isOnline = !this.isOnline;
  }

  // Example 60: Advanced Caching
  setCacheStrategy(strategy: string): void {
    this.cacheStrategy = strategy;
    this.loadCachedData();
  }

  loadCachedData(): void {
    // Simulate cache lookup
    if (this.cacheStrategy === 'cache-first' && this.cachedData) {
      this.message = 'Data loaded from cache';
    } else {
      this.message = 'Data loaded from network';
      this.cachedData = { timestamp: new Date(), data: 'Cached content' };
    }
  }

  // Example 61: GraphQL Integration
  executeGraphQLQuery(): void {
    this.graphqlResult = null;
    
    // Simulate GraphQL execution
    setTimeout(() => {
      this.graphqlResult = {
        data: {
          users: [
            { id: 1, name: 'Alice', email: 'alice@example.com' },
            { id: 2, name: 'Bob', email: 'bob@example.com' }
          ]
        }
      };
    }, 1000);
  }

  updateGraphQLVariables(variables: any): void {
    this.graphqlVariables = variables;
  }

  // Example 62: Real-time Collaboration
  addCollaborationUser(user: any): void {
    this.collaborationUsers.push(user);
  }

  updateSharedDocument(content: string): void {
    this.sharedDocument = content;
    // Simulate broadcasting to other users
    this.message = 'Document updated and synced with collaborators';
  }

  updateCursorPosition(userId: string, position: number): void {
    this.cursorPositions[userId] = position;
  }

  // Example 63: A/B Testing
  switchTestVariant(): void {
    this.testVariant = this.testVariant === 'A' ? 'B' : 'A';
  }

  trackConversion(type: 'view' | 'click'): void {
    this.conversionTracking[type === 'view' ? 'views' : 'clicks']++;
  }

  // Example 64: Machine Learning Integration
  loadMLModel(): void {
    this.mlModel = { loaded: true, accuracy: 0.95 };
    this.message = 'ML Model loaded successfully';
  }

  makePrediction(): void {
    if (this.mlModel && this.predictionInput) {
      this.predictionResult = {
        prediction: Math.random() > 0.5 ? 'Positive' : 'Negative',
        confidence: Math.random() * 100
      };
    }
  }

  // Example 65: Blockchain Integration
  connectWallet(): void {
    this.walletConnected = true;
    this.walletAddress = '0x' + Math.random().toString(16).substr(2, 40);
    this.loadTransactionHistory();
  }

  loadTransactionHistory(): void {
    this.transactionHistory = [
      { hash: '0xabc123...', amount: 0.5, date: new Date() },
      { hash: '0xdef456...', amount: 1.2, date: new Date(Date.now() - 86400000) }
    ];
  }

  // Example 66: IoT Device Control
  connectIoTDevices(): void {
    this.connectedDevices = [
      { id: 'thermostat', name: 'Smart Thermostat', status: 'online' },
      { id: 'lights', name: 'Smart Lights', status: 'online' }
    ];
  }

  updateDeviceStatus(device: string, value: any): void {
    this.deviceStatus = { ...this.deviceStatus, [device]: value };
  }

  // Example 67: Voice Recognition
  startVoiceRecognition(): void {
    this.voiceRecognition = true;
    
    // Simulate voice recognition
    setTimeout(() => {
      const commands = this.supportedCommands;
      this.voiceCommand = commands[Math.floor(Math.random() * commands.length)];
      this.executeVoiceCommand();
    }, 2000);
  }

  executeVoiceCommand(): void {
    this.message = `Executed voice command: ${this.voiceCommand}`;
    this.voiceRecognition = false;
  }

  // Example 68: Augmented Reality
  enableAR(): void {
    this.arEnabled = true;
    this.arMarkers = [
      { id: 1, x: 100, y: 150, content: '3D Model' },
      { id: 2, x: 200, y: 250, content: 'Info Panel' }
    ];
  }

  addARMarker(x: number, y: number): void {
    this.arMarkers.push({
      id: Date.now(),
      x: x,
      y: y,
      content: `Marker ${this.arMarkers.length + 1}`
    });
  }

  // Example 69: Advanced Data Visualization
  createD3Chart(): void {
    this.d3Chart = {
      type: 'scatter',
      data: Array.from({length: 50}, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100
      }))
    };
  }

  updateChartInteractions(interaction: string): void {
    this.chartInteractions = {
      ...this.chartInteractions,
      [interaction]: !this.chartInteractions[interaction as keyof typeof this.chartInteractions]
    };
  }

  // Example 70: Custom Element/Web Component
  updateCustomElement(): void {
    this.customElementData = {
      title: `Updated at ${new Date().toLocaleTimeString()}`,
      content: 'Custom element content updated'
    };
  }

  // Example 71: Server-Sent Events
  connectSSE(): void {
    this.serverEvents = [];
    
    // Simulate server-sent events
    const interval = setInterval(() => {
      if (this.sseConnection) {
        this.serverEvents.push({
          id: Date.now(),
          type: 'update',
          data: `Server message at ${new Date().toLocaleTimeString()}`
        });
        
        if (this.serverEvents.length > 5) {
          this.serverEvents = this.serverEvents.slice(-5);
        }
      } else {
        clearInterval(interval);
      }
    }, 3000);
    
    this.sseConnection = interval;
  }

  disconnectSSE(): void {
    if (this.sseConnection) {
      clearInterval(this.sseConnection);
      this.sseConnection = null;
    }
  }

  // Example 72: Advanced Routing
  updateRouteParams(params: any): void {
    this.routeParams = params;
    this.navigationHistory.push(`Route updated: ${JSON.stringify(params)}`);
  }

  navigateWithQuery(query: any): void {
    this.routeQuery = query;
    this.message = `Navigation with query: ${JSON.stringify(query)}`;
  }

  // Example 73: Internationalization
  changeLanguage(language: string): void {
    this.currentLanguage = language;
    this.loadTranslations();
  }

  loadTranslations(): void {
    const translations: any = {
      en: { welcome: 'Welcome', goodbye: 'Goodbye' },
      es: { welcome: 'Bienvenido', goodbye: 'Adiós' },
      fr: { welcome: 'Bienvenue', goodbye: 'Au revoir' }
    };
    
    this.advancedTranslations = translations[this.currentLanguage] || translations.en;
  }

  // Example 74: Accessibility Enhancements
  toggleHighContrast(): void {
    this.highContrast = !this.highContrast;
  }

  changeFontSize(size: string): void {
    this.fontSize = size;
  }

  enableScreenReader(): void {
    this.screenReader = !this.screenReader;
    this.message = `Screen reader ${this.screenReader ? 'enabled' : 'disabled'}`;
  }

  // Example 75: Advanced Security
  updateSecurityConfig(config: any): void {
    this.securityConfig = { ...this.securityConfig, ...config };
  }

  refreshAuthTokens(): void {
    this.authTokens = {
      accessToken: 'new_access_token_' + Date.now(),
      refreshToken: 'new_refresh_token_' + Date.now(),
      expiresIn: 3600
    };
  }

  // Examples 76-100: Additional advanced methods
  toggleDesignPattern(pattern: string): void {
    this.designPatterns = {
      ...this.designPatterns,
      [pattern]: !this.designPatterns[pattern as keyof typeof this.designPatterns]
    };
  }

  checkMicroserviceHealth(): void {
    Object.keys(this.microservices).forEach(service => {
      (this.microservices as any)[service].status = Math.random() > 0.7 ? 'connected' : 'disconnected';
    });
  }

  runTestScenario(): void {
    this.testResults = {
      passed: Math.floor(Math.random() * 10),
      failed: Math.floor(Math.random() * 3),
      skipped: Math.floor(Math.random() * 2)
    };
  }

  checkDeploymentHealth(): void {
    this.deploymentInfo.healthCheck = Math.random() > 0.8;
  }

  logError(error: any): void {
    this.errorLogs.push({
      timestamp: new Date(),
      message: error.message || 'Unknown error',
      stack: error.stack || 'No stack trace'
    });
  }

  undoLastAction(): void {
    if (this.undoStack.length > 0) {
      const lastAction = this.undoStack.pop();
      this.redoStack.push(lastAction);
    }
  }

  redoLastAction(): void {
    if (this.redoStack.length > 0) {
      const lastAction = this.redoStack.pop();
      this.undoStack.push(lastAction);
    }
  }

  switchComponentLibrary(library: string): void {
    this.selectedLibrary = library;
    this.message = `Switched to ${library} component library`;
  }

  updateCSSVariable(name: string, value: string): void {
    this.cssVariables[name] = value;
    document.documentElement.style.setProperty(`--${name}`, value);
  }

  optimizePerformance(): void {
    this.lazyLoadingConfig.threshold = Math.max(50, this.lazyLoadingConfig.threshold - 10);
    this.virtualScrolling.bufferSize = Math.min(20, this.virtualScrolling.bufferSize + 2);
  }

  addDynamicField(): void {
    this.dynamicFields.push({
      id: Date.now(),
      type: 'text',
      label: `Field ${this.dynamicFields.length + 1}`,
      required: false
    });
  }

  trackAnalytics(event: string): void {
    this.analyticsData.pageViews++;
    if (event === 'unique_visit') {
      this.analyticsData.uniqueVisitors++;
    }
  }

  toggleDebugMode(): void {
    this.debugMode = !this.debugMode;
    if (this.debugMode) {
      this.debugLogs.push({
        timestamp: new Date(),
        message: 'Debug mode enabled'
      });
    }
  }

  detectPlatform(): void {
    this.platformInfo = {
      browser: navigator.userAgent.includes('Chrome') ? 'Chrome' : 'Other',
      os: navigator.platform,
      mobile: /Mobile|Android|iPhone|iPad/.test(navigator.userAgent),
      touchSupport: 'ontouchstart' in window
    };
  }

  toggleFeatureFlag(flag: string): void {
    this.featureFlags[flag] = !this.featureFlags[flag];
  }

  loadPlugin(pluginName: string): void {
    this.loadedPlugins.push({
      name: pluginName,
      version: '1.0.0',
      loadedAt: new Date()
    });
  }

  sendNotification(message: string, type: string): void {
    this.notificationQueue.push({
      id: Date.now(),
      message: message,
      type: type,
      timestamp: new Date()
    });
  }

  advanceWorkflow(): void {
    if (this.currentWorkflowStep < this.workflowSteps.length - 1) {
      this.currentWorkflowStep++;
    }
  }

  performAdvancedSearch(query: string): void {
    this.searchHistory.unshift(query);
    if (this.searchHistory.length > 10) {
      this.searchHistory = this.searchHistory.slice(0, 10);
    }
  }

  syncData(): void {
    this.syncStatus = 'syncing';
    setTimeout(() => {
      this.syncStatus = 'completed';
    }, 2000);
  }

  updateHealthMetrics(): void {
    this.healthMetrics = {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      network: Math.random() * 100,
      errors: Math.floor(Math.random() * 20)
    };
  }

  createCustomDirective(): void {
    this.directiveConfig = {
      name: 'customHighlight',
      selector: '[appCustomHighlight]',
      created: new Date()
    };
  }

  transformPipelineData(): void {
    this.pipelineData = this.pipelineData.map(item => ({
      ...item,
      transformed: true,
      timestamp: new Date()
    }));
  }

  composeComponents(pattern: string): void {
    this.compositionPattern = pattern;
    this.message = `Applied ${pattern} composition pattern`;
  }

  recordLifecycleEvent(event: string): void {
    this.lifecycleEvents.push(`${event} - ${new Date().toISOString()}`);
    this.componentMetrics.renderCount++;
  }

  enableExperimentalFeature(feature: string): void {
    this.experimentalFeatures = {
      ...this.experimentalFeatures,
      [feature]: !this.experimentalFeatures[feature as keyof typeof this.experimentalFeatures]
    };
  }

  configureFutureFeatures(): void {
    this.futureConfig = {
      quantumReadiness: true,
      aiIntegrationLevel: 'advanced',
      blockchainCompatible: true,
      lastUpdated: new Date()
    };
  }
}