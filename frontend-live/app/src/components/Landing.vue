<template>

    <div class="grid">
        <div class="col-12 md:col-8 md:col-offset-2">

            <Card>
            <template #content>
                <div class="text-center">
                    <h2>{{ message }}</h2>
                </div>
            </template>
            </Card>

        </div>
    </div>

</template>

<script setup>
    import { ref } from 'vue'
    const message = ref('Welcome!')
</script>
