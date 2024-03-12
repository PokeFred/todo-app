<script lang="ts">
    import Icon from 'svelte-awesome'
    import { faSun } from '@fortawesome/free-solid-svg-icons/faSun'
    import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon'
    import { faPalette } from '@fortawesome/free-solid-svg-icons/faPalette'
    import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"
</script>

<div class="card p-4">
    <div class="input-group input-group-divider grid-cols-[auto_auto]">
        <div class="input-group-shim">
            <Icon data={faMagnifyingGlass} />
        </div>
        <input type="text" class="" />
    </div>

    <div>
        <Icon data={faSun} />
        <Icon data={faMoon} />
        <Icon data={faPalette} />
    </div>
</div>
