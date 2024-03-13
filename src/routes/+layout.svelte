<script lang="ts">
    import '../app.css'
    import { AppShell, AppBar } from "@skeletonlabs/skeleton"
    import { darkmode } from '$stores/darkmode'
    import { theme } from '$stores/theme'
</script>

<custom_theming_element data-theme={$theme} class={$darkmode ? 'dark' : 'light'}>
    <AppShell slotPageContent="text-surface-900-50-token bg-surface-50-900-token">
        <div class="p-4">
            <slot />
        </div>
    </AppShell>
</custom_theming_element>
