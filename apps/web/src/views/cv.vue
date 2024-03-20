<template>
    <h1 v-if="!props.download">&lt;CV /&gt;</h1>
    <div :class="props.download ? 'flex' : ''">
        <div :class="props.download ? 'w-[50%] pr-5' : 'w-[100%]'">
            <h2>&lt;Experiences /&gt;</h2>
            <div>
                <h3><span class="font-bold">Televic</span></h3>
                <p class="text-xs">juli-augustus 2022</p>
                <p>
                    Ik heb dubbele klantgegevens in een gefuseerde database opgeschoond en het CRM-systeem aangepast
                    voor snellere verwerking van opdrachten en facturen.
                </p>
            </div>
            <a href="https://tombroucke.be/" target="_blank">
                <h3><span class="font-bold">Otomaties</span> - Tom Broucke</h3>
                <p class="text-xs">maart 2021</p>
                <p></p>
                <p>
                    Mijn opdrachten bestonden uit het ontwerpen van websites en deze in code omzetten en wordpress erop
                    te integreren.
                </p>
            </a>
        </div>
        <div :class="props.download ? 'pl-5 w-[50%]' : 'd-none'">
            <slot></slot>
        </div>
    </div>

    <SectionBreak v-if="props.download"/>
    <div class="md:flex" v-if="props.download">
        <div class="w-[90vw] md:w-[50vw] md:pr-5">
            <h2>Plus-punten</h2>
            <div>
                <p>Gedreven werker:</p>
                <p>
                    Ik werk liever s'avonds een uurtje verder dan een nieuwe functie of iets dergelijks te laten liggen
                    tot de dag erna.
                </p>
            </div>
            <div>
                <p>Leergierig:</p>
                <p>Ik leer graag nieuwe dingen of leer graag betere manieren kennen voor iets te doen.</p>
            </div>
            <div>
                <p>Relaxed:</p>
                <p>
                    Als ik zeg dat iets af zal zijn, zal ik zo veel mogelijk doen zodat u op 2 geruste oren kunst slapen
                </p>
            </div>
        </div>
        <div class="w-[90vw] md:w-[50vw] md:pl-5">
            <h2>Min-puntjes</h2>
            <div>
                <p>Dislectisch</p>
                <p>Ik doe mijn best maar er zitten waarschijnlijk veel schrijffouten in mijn teksten.</p>
            </div>
            <div>
                <p>Niet detail georienteerd</p>
                <p>Ik maak liever iets die werkt, dan dat het er goed uitziet</p>
            </div>
            <div>
                <p>Solitair</p>
                <p>Ik geef er de voorkeur aan om zelfstandig te werken in plaats van in een groep.</p>
            </div>
        </div>
    </div>
    <SectionBreak />

    <div>
        <h2>&lt;Education /&gt;</h2>
        <div>
            <h3><span class="font-bold">Bachelor toegepaste informatica</span> - Cyber Security Professional</h3>
            <p class="text-xs">2021-heden</p>
            <p>Howest Brugge</p>
            <p>
                Ik leerde over een breed scala aan IT-disciplines en rond in juni mijn opleiding af, met een
                specialisatie in Cyber Security Professional, gericht op forensische analyse, malware analyse, pentesten
                en reverse engineering.
            </p>
        </div>
        <div>
            <h3><span class="font-bold">Multimedia</span> - Optie Visueel</h3>
            <p class="text-xs">2015-2021</p>
            <p>Athena Heule</p>
            <p>https://www.athena-school.be/onze-school/campus-heule</p>
            <p>We leerden vooral gebruik maken van verschillende adobe programma's en websites maken.</p>
            Diploma behaald op 29 juni 2021
        </div>
        <div>
            <h3><span class="font-bold">Industriele</span> Wetenschappen</h3>
            <p class="text-xs">2012-2015</p>
            <p>Vti Menen</p>
            <p v-if="!download">
                We hadden een praktijkgerichte benadering van technologie en engineering, stimuleerde ons om innovatieve
                oplossingen te ontwikkelen voor complexe industriële uitdagingen.
            </p>
        </div>
    </div>
    <SectionBreak />
    <div class="md:flex">
        <div class="w-[90vw] md:w-[50vw] md:pr-5">
            <h2>Skills</h2>
            <ul>
                <li>python</li>
                <li>.net</li>
                <li>html, Javascript, css, php</li>
                vue, webpack, wordpress typescript sass, tailwind
                <li>Linux (ubuntu, debian, kali, manjaro)</li>
                <li>git</li>
                <li>kotlin</li>
            </ul>
        </div>
        <div class="w-[90vw] md:w-[50vw] md:pl-5">
            <h2>Certificaten</h2>

            <p>Cisco Networking Academy: CyberOps Associate</p>
            <p>CEH</p>
            <p>Rijbewijs b</p>
            <p>SODA-attest</p>
        </div>
    </div>
    <div class="md:flex">
        <div class="w-[90vw] md:w-[50vw] md:pr-5">
            <h2>Hobby's</h2>

            <p>Gamen</p>
            <p>Programmeren</p>
            <p>Scripten</p>
        </div>
        <div class="w-[90vw] md:w-[50vw] md:pl-5">
            <h2>Talen</h2>

            <p>Nederlands</p>
            <p>Engels</p>
        </div>
    </div>
    <div class="md:flex" v-if="!props.download">
        <div class="w-[90vw] md:w-[50vw] md:pr-5">
            <h2>Plus-punten</h2>
            <div>
                <p>Gedreven werker:</p>
                <p>
                    Ik werk liever s'avonds een uurtje verder dan een nieuwe functie of iets dergelijks te laten liggen
                    tot de dag erna.
                </p>
            </div>
            <div>
                <p>Leergierig:</p>
                <p>Ik leer graag nieuwe dingen of leer graag betere manieren kennen voor iets te doen.</p>
            </div>
            <div>
                <p>Relaxed:</p>
                <p>
                    Als ik zeg dat iets af zal zijn, zal ik zo veel mogelijk doen zodat u op 2 geruste oren kunst slapen
                </p>
            </div>
        </div>
        <div class="w-[90vw] md:w-[50vw] md:pl-5">
            <h2>Min-puntjes</h2>
            <div>
                <p>Dislectisch</p>
                <p>Ik doe mijn best maar er zitten waarschijnlijk veel schrijffouten in mijn teksten.</p>
            </div>
            <div>
                <p>Niet detail georienteerd</p>
                <p>Ik maak liever iets die werkt, dan dat het er goed uitziet</p>
            </div>
            <div>
                <p>Solitair</p>
                <p>Ik geef er de voorkeur aan om zelfstandig te werken in plaats van in een groep.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        download: boolean;
    }>();
</script>

<style scoped>
    h2 {
        /* width: fit-content; */
        margin-bottom: 1rem;
        /* border-bottom: 0.4rem solid #42a5f5; */
    }
</style>
