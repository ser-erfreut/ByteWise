<header class="header">
    <nav class="header-nav">
        <!-- Logo-Bereich -->
        <div class="logo-container">
            <a href="index.php">
                <img src="" alt="SilentPread Logo" class="logo">
            </a>
        </div>

        <!-- Hauptnavigation -->
        <div class="main-nav">
            <a href="/home" class="nav-item">Home</a>
        </div>

        <!-- Suchleiste
        <div class="search-container">
            <form action="/suche/suche.php" method="GET">
                <input type="search"
                       name="suche"
                       class="search-input"
                       placeholder="Suchen..."
                       value="<?php echo CoreHelper::getParameter('suche') ?? ''; ?>">
            </form>
        </div> -->

        <!-- Benutzer-Menü -->
        <div class="user-menu">
            <?php if (SessionManager::isLoggedIn()): ?>
                <div class="dropdown">
                    <button class="nav-item dropdown-toggle">
                        <?php echo htmlspecialchars(SessionManager::getUsername()); ?>
                        <span class="dropdown-icon">▼</span>
                    </button>
                    <div class="dropdown-menu">
                        <a href="<?php echo CoreHelper::getBaseURL(); ?>/profile/profile.php" class="dropdown-item">Mein Profil</a>
                        <a href="<?php echo CoreHelper::getBaseURL(); ?>/bestellungen/bestellungen.php" class="dropdown-item">Bestellungen</a>
                    </div>
                </div>

                <a href="<?php echo CoreHelper::getBaseURL(); ?>/logout.php" class="user-menu-item">Logout</a>
            <?php else: ?>
                <a href="<?php echo CoreHelper::getBaseURL(); ?>/Login/login.php" class="user-menu-item login">Login</a>
                <a href="<?php echo CoreHelper::getBaseURL(); ?>/registrierung/registration.php" class="user-menu-item register">Registrieren</a>
            <?php endif; ?>
            <a href="<?php echo CoreHelper::getBaseURL(); ?>/warenkorb/warenkorb.php" class="nav-item">
                <i class="fas fa-shopping-cart"></i>
            </a>
        </div>

        <!-- Mobile Menü Toggle -->
        <button class="mobile-menu-toggle" aria-label="Menü öffnen">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
</header>