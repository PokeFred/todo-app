<script lang="ts">
    import '../app.css'
    import { darkmode } from '$stores/darkmode'
    import { theme } from '$stores/theme'
</script>

<div data-theme={$theme} class={$darkmode ? 'dark' : 'light'}>
    <div class="bg-surface-100-800-token text-surface-900-50-token absolute left-0 top-0 h-screen w-screen overflow-hidden">
        <div class="p-4">
            <slot />
        </div>
    </div>
</div>
