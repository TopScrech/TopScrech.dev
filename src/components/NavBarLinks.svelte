<script>
    import appStore from "hitler/app-store.webp";
    import spm from "hitler/spm.webp";
</script>

<style>
    .nav-links {
        display: flex;
        gap: 20px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.85rem;
        color: #6c757d; /* Secondary color */
    }

    .nav-item img {
        width: 30px;
        height: 30px;
        margin-bottom: 5px;
    }
</style>

<nav class="nav-links">
    <div class="nav-item">
        <img src={appStore} alt="Приложения">
        <a href="/app-store">Приложения</a>
    </div>

    <div class="nav-item">
        <img src={spm} alt="Библ иотеки" />
        <a href="/spm">Библ иотеки</a>
    </div>
</nav>
