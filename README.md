# RM | Portfolio v2.0

A premium, editorial-grade portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**. Inspired by the "Studio Namma" brutalist aesthetic, this project showcases high-performance AI/ML engineering with a focus on latent reasoning and autonomous systems.

![Portfolio Preview](https://via.placeholder.com/1200x600?text=RM+Portfolio+Preview)

##  Key Features

- ** Neural AI Assistant**: A custom-built floating AI twin powered by **Groq (Llama 3.3)** that has full context of my projects, skills, and experience.
- ** Studio Namma Aesthetic**: A monochrome, high-contrast design featuring editorial typography (Syne & Georgia) and grid-based layouts.
- ** Dynamic GitHub Integration**: Automatically fetches and displays live project data directly from the GitHub API.
- ** Production-Ready Contact**: Integrated with **EmailJS** for instant communication.
- ** Cinematic Motion**: Custom Framer Motion transitions, including a high-impact "zoom toward user" preloader and smooth scroll interactions.
- ** Ultra Responsive**: Fluid layouts optimized for everything from ultra-wide monitors to mobile devices.

##  Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS (Custom Design Tokens)
- **Animations**: Framer Motion
- **AI Engine**: Groq SDK / Llama 3.3 70B
- **Icons**: Font Awesome 6
- **Routing**: React Router (HashRouter)

##  Getting Started

### Prerequisites
- Node.js (v18+)
- NPM or Yarn
- A Groq API Key (from [Groq Console](https://console.groq.com/))
- EmailJS Account (from [EmailJS](https://www.emailjs.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rajat25022005/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_GROQ_API_KEY=your_groq_api_key
   VITE_GROQ_MODEL=llama-3.3-70b-versatile
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

## 📦 Deployment

The project is configured for deployment on **GitHub Pages** (via the `base: "/portfolio/"` setting in `vite.config.js`).

To deploy:
```bash
npm run deploy
```

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with 🖤 by [Rajat Malik](https://github.com/Rajat25022005)
