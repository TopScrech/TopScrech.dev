<script>
import NavBarLinks from "@/components/NavBarLinks.svelte";
</script>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        background-color: #f8f9fa;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo img {
        width: 40px;
        height: 40px;
    }

    .logo a {
        margin-left: 10px; /* Add spacing between the logo and the website name */
        font-size: 1.25rem;
        font-weight: bold;
        text-decoration: none;
        color: black;
    }

    .social-links {
        display: flex;
        gap: 15px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        text-decoration: underline;
    }

    .social-links a img {
        width: 24px;
        height: 24px;
    }
</style>

<header>
    <div class="logo">
        <img src="logo.png" alt="Лого">
        <a href="/">TopScrech.dev</a>
    </div>

    <NavBarLinks />

    <div class="social-links">
        <a href="https://twitter.com">
            <img src="twitter.png" alt="Twitter">
        </a>

        <a href="https://facebook.com">
            <img src="facebook.png" alt="Facebook">
        </a>

        <a href="https://linkedin.com">
            <img src="linkedin.png" alt="LinkedIn">
        </a>
    </div>
</header>