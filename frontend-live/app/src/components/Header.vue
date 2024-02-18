<template>

    <div class="sticky mb-4">
        <div class="grid nogutter justify-between align-center p-2 surface-200">
            <div class="col-6">
                <router-link to="/" class="p-button no-underline">{{projectName}}</router-link>
            </div>

            <div class="col-6 text-right">
            </div>
        </div>
    </div>

</template>

<script setup>

    import { onMounted } from 'vue'
    const projectName = import.meta.env.VITE_PROJECT_NAME;

    onMounted(() => {
        document.title = projectName;
    });

</script>
