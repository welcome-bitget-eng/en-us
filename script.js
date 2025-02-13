:root {
    --primary-color: #00ffea;
    --background-dark: #0a0a0a;
    --card-background: #1a1a1a;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background-dark);
    color: var(--text-primary);
    line-height: 1.6;
}

/* Navbar Styles */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background: rgba(26, 26, 26, 0.8);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

.nav-links a {
    color: var(--text-primary);
    text-decoration: none;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: background-color 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
    background-color: rgba(255, 255, 255, 0.1);
}

.connect-btn {
    background: linear-gradient(45deg, #00ffea, #00ff88);
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    color: #000;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s;
}

.connect-btn:hover {
    transform: translateY(-2px);
}

/* Hero Section */
.hero {
    padding: 8rem 5% 4rem;
    text-align: center;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, var(--primary-color), #00ff88);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-content p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

.primary-btn {
    background: linear-gradient(45deg, var(--primary-color), #00ff88);
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    color: #000;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: transform 0.3s;
}

.primary-btn:hover {
    transform: translateY(-2px);
}

/* Stats Container */
.stats-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;
}

.stat-box {
    background: var(--card-background);
    padding: 1.5rem;
    border-radius: 12px;
    text-align: center;
    min-width: 200px;
    box-shadow: 0 8px 32px rgba(0, 255, 234, 0.1);
}

.stat-box h3 {
    color: var(--text-secondary);
    font-size: 1rem;
    margin-bottom: 0.5rem;
}

.stat-box p {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

/* Features Section */
.features {
    padding: 4rem 2rem;
    text-align: center;
}

.features h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0 5%;
}

.feature-card {
    background: var(--card-background);
    padding: 2rem;
    border-radius: 16px;
    transition: transform 0.3s;
    box-shadow: 0 8px 32px rgba(0, 255, 234, 0.1);
}

.feature-card:hover {
    transform: translateY(-10px);
}

.feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.feature-card h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.feature-card p {
    color: var(--text-secondary);
}

/* Bitget Wallet Section */
.bitget-wallet {
    background-color: #f9f9f9;
    padding: 4rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bitget-wallet-content {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bitget-wallet h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 2rem;
    text-align: center;
}

.wallet-details {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
}

.wallet-description {
    flex: 2;
}

.wallet-description p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.wallet-features {
    flex: 1;
    background-color: #fff;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.wallet-features h3 {
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
}

.wallet-features ul {
    list-style-type: none;
    padding: 0;
}

.wallet-features li {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #eee;
    color: #555;
    display: flex;
    align-items: center;
}

.wallet-features li:last-child {
    border-bottom: none;
}

.wallet-features li::before {
    content: '✓';
    color: #4CAF50;
    margin-right: 0.75rem;
    font-weight: bold;
}

/* Footer */
footer {
    background: var(--card-background);
    padding: 4rem 5%;
    margin-top: 4rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-section h4 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
}

.footer-section a {
    display: block;
    color: var(--text-secondary);
    text-decoration: none;
    margin-bottom: 0.8rem;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .stats-container {
        flex-direction: column;
        align-items: center;
    }
    
    .stat-box {
        width: 100%;
        max-width: 300px;
    }
}
