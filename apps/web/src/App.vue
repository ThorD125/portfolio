<template>
    <div class="p-5 md:px-20 xl:px-40 w-screen block md:flex block md:flex-wrap overflow-hidden h-[95vh]">
        <div class="navbar block md:flex md:justify-end w-[100%] h-[10vh] max-h-fit md:max-h-[10%] ">
        <!-- 
            <Spacer></Spacer>
            <div class="w-full">
                <Color color="#1e90ff" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor"></Color>
                <Color color="#8a2be2" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor"></Color>
                <Color color="#ff00ff" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor" :selected="true"></Color>
                <Color color="red" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor"></Color>
            </div> 
        -->
        <TabNav to="/">About me</TabNav>
        <TabNav to="/CV">CV</TabNav>
        <TabNav to="/blog">Blog</TabNav>
        <TabNav to="/projects">Projects</TabNav>
        <!-- <TabNav to="/console">Console</TabNav> -->

        </div>
        <div class="content w-full h-[80vh]" :class="$route.fullPath == '/'?'':'pr-5 overflow-y-scroll'">
            <RouterView :key="$route.fullPath" />
        </div>
    </div>

    <RichtClickMenu></RichtClickMenu>
    
    <footer class="w-full bottom-0 flex justify-center items-center text-center h-[5vh]">© Thor Demeestere · Powered by vue</footer>
</template>
<script setup lang="ts"></script>

<style>
    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 2px;
    }
    ::-webkit-scrollbar-track {
        background: #eee;
    }
    ::-webkit-scrollbar-track-piece {
        background: #ccc;
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
</style>
