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

                <common-drop-language/>
            </v-toolbar>

            <v-content>
                <router-view/>
            </v-content>
        </v-app>
    </section>
</template>

<script>
    import CommonDropLanguage from '@/modules/Visualization/components/DropLanguage'

    export default {
        components: {
            'common-drop-language': CommonDropLanguage
        },

        data: () => ({
            drawer: true,
            mini: false,
            authenticate: false
        })
    }
</script>

<style lang="scss">
    .navigation_box {
        background: #336699 !important;

        .navigation__logo {
            padding: 50px 0 35px 0;
            text-align: center;
            color: #FFF;
            text-shadow: 1px 1px 5px #000;
            font-size: 1.4em;
        }

        .list-tile__activated {
            background: rgba(0,0,0, 0.35);
        }
        
        .list-tile__box {
            padding: 10px;
            background: rgba(0,0,0, 0.15);
        }

    }
    
    .toolbar__icon-button {
        i {
            color: #336699 !important;
        }
    }

    .toolbar__title {
        color: #336699;
    }
</style>
