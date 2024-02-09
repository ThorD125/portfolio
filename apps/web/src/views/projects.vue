<template>
    <div class="w-full h-full flex flex-wrap justify-between">
        <!-- {{ projectlist }} -->
        <ProjectTile v-for="project in projectlist">
            <Url slot="title" :href="project.svn_url" :title="project.name" />
            <p class="text-sm">{{ project.description }}</p>
            <ProjectLanguage :type="project.language" />
        </ProjectTile>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    let projectlist = ref<any>();

    const getProjects = async () => {
        fetch('https://api.github.com/users/ThorD125/repos')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                var sorted = data.sort((a, b) => {
                    const dateA = new Date(a.updated_at).getTime();
                    const dateB = new Date(b.updated_at).getTime();
                    const result = dateA < dateB;
                    // console.log(result);
                    return result ? -1 : 1;
                });
                console.log(sorted);
                projectlist.value = sorted;
            })
    };

    getProjects();
</script>

<style scoped></style>
