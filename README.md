🚀 Getting Started
# React Higher-Order Component: Loading State Management

This project demonstrates a practical implementation of React **Higher-Order Components (HOCs)** with a focus on **loading state management**. It showcases how to enhance components with additional functionality while keeping the base components clean and reusable.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd HighOrderComponent

   2: Install Dependencies
       -npm install
       -# or
       -yarn install 
   3: Start the development server
        npm start
        # or
        yarn start
**File Structure**
```
src/
├── components/
│   ├── withLoading.jsx     # HOC implementation
│   └── DataDisplay.jsx     # Base and enhanced components
├── App.jsx                 # Main application logic
└── index.js                # React entry point

💡 ** Key Features**

    Higher-Order Component Pattern:

        withLoading.jsx adds loading state functionality to any component

        Preserves original component props

    Component Organization:

        Base and enhanced components colocated in DataDisplay.jsx

        Clean separation of concerns

    Simulated API Loading:

        Demonstrates real-world loading state management

        Uses setTimeout to mimic network requests

🛠 How It Works

    The HOC (withLoading) wraps components and:

        Shows a spinner when isLoading=true

        Renders the wrapped component when isLoading=false

    DataDisplay.jsx exports:

        Base component for raw data display

        Enhanced version with loading state handling

    App.jsx demonstrates:

        State management for loading/data

        Usage of the enhanced component

🤝 Contributing

    Contributions are welcome! Please:

    Fork the repository

    Create your feature branch

    Submit a pull request    
