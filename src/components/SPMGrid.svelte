<div class="grid">
    <div class="app-item hidden">
        <div class="app-icon"></div>
        <div class="app-info">
            <h2 class="hidden">QuickLooking</h2>

            <p>Open any files</p>
            <div class="status">
                <span class="status-dot"></span>
                <span class="status-text">In Progress</span>
            </div>
        </div>
    </div>
    <!-- More app items can be added here by copying the above structure -->
</div>

<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        margin: 0;
        padding: 20px;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
    }
    .app-item {
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        align-items: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .app-icon {
        width: 64px;
        height: 64px;
        background: linear-gradient(to bottom right, #ff9900, #3399ff);
        border-radius: 14px;
        margin-right: 15px;
    }
    .app-info h2 {
        margin: 0 0 5px 0;
        font-size: 18px;
    }
    .app-info p {
        margin: 0;
        font-size: 14px;
        color: #666;
    }
    .status {
        display: flex;
        align-items: center;
        margin-top: 5px;
    }
    .status-dot {
        width: 8px;
        height: 8px;
        background-color: #ffcc00;
        border-radius: 50%;
        margin-right: 5px;
    }
    .status-text {
        font-size: 12px;
        color: #888;
    }

    .hidden {
        opacity: 0;
        transition: all 1s;
    }

    @media(prefers-reduced-motion) {
        .hidden {
            transition: none;
        }
    }

    .show {
        opacity: 1;
    }
</style>
