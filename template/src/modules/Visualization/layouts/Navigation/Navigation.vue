<template>
    <section class="vuetify">
        <v-app>
            <!-- NAVIGATION -->
            <v-navigation-drawer
                v-model="drawer"
                :mini-variant="mini"
                fixed
                app
                dark
                class="navigation_box scroll"
                width="400"
            >
                <v-flex
                    class="navigation__logo"
                >
                    {{ name }}
                </v-flex>

                <slot name="navigation-links"/>
            </v-navigation-drawer>


            <!-- TOOLBAR -->
            <v-toolbar 
                color="write" 
                app
            >
                <v-toolbar-side-icon 
                    class="toolbar__icon-button" 
                    @click="drawer = !drawer"
                />

                <!-- title -->
                <v-toolbar-title class="toolbar__title">\{{ $t('visualization.layout.navigation.title') }}</v-toolbar-title>

                <v-spacer/>

                <!-- btns right -->
                <template v-if="authenticate">
                    <v-btn 
                        to="/dashboard" 
                        color="primary"
                    >
                        \{{ $t('visualization.layout.navigation.labelBtnLogout') }}
                    </v-btn>
                </template>
                <template v-else>
                    <v-btn 
                        color="primary" 
                        to="/login"
                    >
                        \{{ $t('visualization.layout.navigation.labelBtnLogin') }}
                    </v-btn>
                </template>

                <language/>
            </v-toolbar>

            <v-content>
                <router-view/>
            </v-content>
        </v-app>
    </section>
</template>

<script>
    import Language from './Language/Language'

    export default {
        components: {
            'language': Language
        },

        data: () => ({
            drawer: true,
            mini: false,
            authenticate: false
        })
    }
</script>

<style lang="scss">
    @import url('./Navigation');
</style>
